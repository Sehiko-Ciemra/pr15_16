import React from 'react';
import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  const users = [
    {
      id: 1,
      avatar: 'https://i.pinimg.com/736x/4e/68/e8/4e68e8d5905040f8ac4c21e38a330c94.jpg',
      name: 'Анна Коваленко',
      role: 'Frontend Developer',
      location: 'Київ',
      bio: 'Захоплююся створенням красивих веб-інтерфейсів',
      followers: 1234,
      following: 567,
      github: 'https://github.com'
    },
    {
      id: 2,
      avatar: 'https://i.pinimg.com/736x/2f/fa/fe/2ffafeed870f46e31aabc3e0ef8f3c31.jpg',
      name: 'Олексій Петренко',
      role: 'UI/UX Designer',
      location: 'Львів',
      bio: 'Створюю зручні та інтуїтивні дизайни',
      followers: 890,
      following: 234,
      twitter: 'https://twitter.com'
    },
    {
      id: 3,
      avatar: 'https://i.pinimg.com/736x/6f/8d/c1/6f8dc1639856b1d054c553ba75cc90d9.jpg',
      name: 'Марія Бондаренко',
      role: 'React Developer',
      location: 'Одеса',
      bio: 'Будую масштабовані SPA-додатки',
      followers: 2100,
      following: 410,
      github: 'https://github.com'
    }
  ];

  return (
    <div className="App">
      <h1>User Profiles</h1>

      <div className="profiles-container">
        {users.map(user => (
          <ProfileCard
            key={user.id}
            avatar={user.avatar}
            name={user.name}
            role={user.role}
            location={user.location}
            bio={user.bio}
            followers={user.followers}
            following={user.following}
            twitter={user.twitter}
            github={user.github}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
