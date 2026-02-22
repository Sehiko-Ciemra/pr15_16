import React, { useState, useEffect } from 'react';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('myRetroTodos');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, text: 'Вивчити useState', done: false },
      { id: 2, text: 'Зрозуміти події в React', done: false },
    ];
  });

  const [nextId, setNextId] = useState(() => {
    const saved = localStorage.getItem('myRetroTodos');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.length > 0) return Math.max(...parsed.map(t => t.id)) + 1;
    }
    return 3;
  });

  useEffect(() => {
    localStorage.setItem('myRetroTodos', JSON.stringify(todos));
  }, [todos]);

  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAdd = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, { id: nextId, text: inputValue, done: false }]);
    setNextId(nextId + 1);
    setInputValue('');
  };

  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleClearDone = () => {
    setTodos(todos.filter(todo => !todo.done));
  };

  const startEditing = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    if (editText.trim() === '') return;
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: editText } : todo
    ));
    setEditId(null);
    setEditText('');
  };

  const doneCount = todos.filter(t => t.done).length;
  const pendingCount = todos.length - doneCount;
  const isInputEmpty = inputValue.trim() === '';

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.done;
    if (filter === 'completed') return todo.done;
    return true;
  });

  return (
    <div className='app-todo'>
      <h1>Мій To-Do List</h1>

      <div className='status-panel'>
        <p className='progress'>
          Залишилось: {pendingCount} | Виконано: {doneCount}
        </p>
      </div>

      <div className='input-row'>
        <input
          type='text'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !isInputEmpty && handleAdd()}
          placeholder='Нове завдання...'
        />
        <button onClick={handleAdd} disabled={isInputEmpty}>
          Додати
        </button>
      </div>

      <div className="filters-container">
        <button 
          className={filter === 'all' ? 'filter-active' : ''} 
          onClick={() => setFilter('all')}
        > Всі </button>
        <button 
          className={filter === 'active' ? 'filter-active' : ''} 
          onClick={() => setFilter('active')}
        > Активні </button>
        <button 
          className={filter === 'completed' ? 'filter-active' : ''} 
          onClick={() => setFilter('completed')}
        > Виконані </button>
      </div>

      <ul className='todo-list'>
        {filteredTodos.map(todo => (
          <li key={todo.id} className={todo.done ? 'done' : ''}>
            <input
              type='checkbox'
              checked={todo.done}
              onChange={() => handleToggle(todo.id)}
            />
            
            {editId === todo.id ? (
              <input
                type="text"
                className="edit-input"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => saveEdit(todo.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') saveEdit(todo.id);
                  if (e.key === 'Escape') setEditId(null);
                }}
                autoFocus
              />
            ) : (
              <span onDoubleClick={() => startEditing(todo.id, todo.text)}>
                {todo.text}
              </span>
            )}

            <button
              className='delete-btn'
              onClick={() => handleDelete(todo.id)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {doneCount > 0 && (
        <button className='clear-done-btn' onClick={handleClearDone}>
          Очистити виконані ({doneCount})
        </button>
      )}
    </div>
  );
}

export default TodoList;