import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/dash");
  };

  return (
    <>
      <div>
        <h1>Login Page</h1>
        <button onClick={navigateHome}>Home</button>
      </div>
    </>
  );
};

export default Login;
