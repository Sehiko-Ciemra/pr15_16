import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
});

test('за замовчуванням відображається сторінка профілів', () => {
  render(<App />);

  const title = screen.getByText(/user profiles/i);
  expect(title).toBeInTheDocument();
});

test('перемикання на вкладку To-Do відображає список завдань', () => {
  render(<App />);

  const todoTabButton = screen.getByText(/Практична 2 \(To-Do\)/i);
  fireEvent.click(todoTabButton);

  const todoTitle = screen.getByText(/Мій To-Do List/i);
  expect(todoTitle).toBeInTheDocument();
});

test('можна додати нове завдання у To-Do список', () => {
  render(<App />);

  const todoTabButton = screen.getByText(/Практична 2 \(To-Do\)/i);
  fireEvent.click(todoTabButton);

  const input = screen.getByPlaceholderText(/Нове завдання/i);
  const addButton = screen.getByText(/Додати/i);

  fireEvent.change(input, { target: { value: 'Нове тестове завдання' } });
  fireEvent.click(addButton);

  const newTodo = screen.getByText(/Нове тестове завдання/i);
  expect(newTodo).toBeInTheDocument();
});