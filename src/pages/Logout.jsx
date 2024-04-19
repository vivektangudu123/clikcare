import React from 'react';
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('JWT');
  };

  return (
    <div>
      <h2>Logout</h2>
      {/* <p>Are you sure you want to logout?</p> */}
      <button onClick={handleLogout}>Logout</button>
      <p>Click <a href="/Landingpage">here</a> to login again.</p>
    </div>
  );
};

export default Logout;
