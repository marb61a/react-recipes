import React from "react";
import { Link } from "react-router-dom";

const UserInfo = ({session}) => {
  <div>
    <h3>User Info</h3>
    <p>Username: {session.getCurrentUser.username}</p>
    <p>Email: {session.getCurrentUser.email}</p>
    <ul>
      <h3>{session.getCurrentUser.username}'s favourites</h3>
      
    </ul>
  </div>
};

export default UserInfo;