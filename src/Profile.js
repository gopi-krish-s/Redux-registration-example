import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


function Profile() {
    const username = useSelector((state) => state.user.username);
    console.log({username});
      const navigate = useNavigate();


     const handleLogout = () => {
       localStorage.removeItem("username");
       navigate("/");
     };

     if (!username) {
       navigate("/login");
       return null;
     }
  return (
    <div>
      <h1> Welcome {username}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;