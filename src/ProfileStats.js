import React from 'react';

function ProfileStats(props) {
  return (
    <div className="profile-stats">
      <div className="stat">
        <span className="stat-number">{props.followers}</span>
        <span className="stat-label">Followers</span>
      </div>

      <div className="stat">
        <span className="stat-number">{props.following}</span>
        <span className="stat-label">Following</span>
      </div>
    </div>
  );
}

export default ProfileStats;
