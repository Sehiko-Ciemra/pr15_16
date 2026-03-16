import React from 'react';
import './Profiles.css';
import ProfileCard from './ProfileCard';

import annaAvatar from './assets/anna.webp';
import oleksiiAvatar from './assets/oleksii.webp';
import mariiaAvatar from './assets/mariia.webp';

function Profiles() {
  const users = [
    {
      id: 1,
      avatar: annaAvatar,
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
      avatar: oleksiiAvatar,
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
      avatar: mariiaAvatar,
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
    <div className="profiles-page">
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

export default Profiles;