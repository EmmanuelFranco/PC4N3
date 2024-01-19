import React from 'react';
import './UserCard.css';

const UserCard = ({ name, username, email, imageUrl }) => {
  return (
    <div className="user-card">
      <div className="user-image">
        <img src={imageUrl} alt={`${name} Avatar`} />
      </div>
      <div className="user-details">
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
