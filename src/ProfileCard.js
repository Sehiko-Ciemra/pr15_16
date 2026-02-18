import React from 'react';
import './ProfileCard.css';
import ProfileStats from './ProfileStats';

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <img
        src={props.avatar}
        alt={props.name}
        className="profile-avatar"
      />

      <h2 className="profile-name">{props.name}</h2>
      <p className="profile-role">{props.role}</p>
      <p className="profile-location">{props.location}</p>
      <p className="profile-bio">{props.bio}</p>

      <div className="social-links">
        {props.twitter && (
          <a href={props.twitter} target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
            />
          </a>
        )}

        {props.github && (
          <a href={props.github} target="_blank" rel="noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              alt="GitHub"
            />
          </a>
        )}
      </div>

      <button className="follow-btn">Follow</button>

      <ProfileStats
        followers={props.followers}
        following={props.following}
      />
    </div>
  );
}

ProfileCard.defaultProps = {
  bio: 'Інформація про користувача відсутня'
};

export default ProfileCard;
