import { useState, useEffect } from "react";

export const LoginCard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  useEffect(() => {
    console.log(`User is ${isLoggedIn ? "logged in" : "logged out"}`);
  }, [isLoggedIn]);

  return (
    <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
  );
};