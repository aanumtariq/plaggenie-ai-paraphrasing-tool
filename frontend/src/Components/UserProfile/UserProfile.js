import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Styles.css";

const UserProfile = ({ user }) => {
  if (!user) {
    return <h2>You are not logged in!</h2>;
  }

  return (
    <div>
      <h1>Welcome, {user.email}!</h1>
      <p>This is your profile page.</p>
    </div>
  );
};

export default UserProfile;
