// InputFocus.jsx
import React, { useRef, useEffect } from "react";

const InputFocus = () => {
  const usernameRef = useRef(null);

  useEffect(() => {
    // Autofocus on the username field when the component mounts
    usernameRef.current.focus();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Login form submitted!");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          ref={usernameRef}
          placeholder="Enter your username"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />
      </div>
      {/* <button type="submit">Login</button> */}
    </form>
  );
};

export default InputFocus;
