import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';

import Input from "./components/Input/Input"
import Button from "./components/Button/Button"

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("Please provide an email");
  const [passwordError, setPasswordError] = useState("Please provide a password");

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log("FORM SUBMITTED")

    if (emailError || passwordError) {
      alert("Please fix login form errors")
    } else {
      alert(`Logged in successfully as ${email}`) 
    }
  }

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail)

    if (newEmail.length === 0) {
      setEmailError("Please provide an email")
    } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(newEmail)) {
      setEmailError("Please provide a valid email")
    } else {
      setEmailError("")
    }
  }

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword)

    if (newPassword.lenght === 0) {
      setPasswordError("Please provide a password")
    } else if (newPassword.lenght < 8) {
      setPasswordError("Please provide a password of a minimum of 8 characters")
    } else if (!/\d/.test(newPassword)) {
      setPasswordError("Please provide a password with a number")
    } else {
      setPasswordError("")
    }
  }

  console.log(email, password)

  return (
    <div className="App">
      <h1>Login Form</h1>

      <form onSubmit={handleLoginSubmit} >
      <Input type="email" title="Email: " id="email" value={email} onChange={handleEmailChange} error={emailError}  />
      <Input type="password" title="Password: " id="password" value={password} onChange={handlePasswordChange} error={passwordError} />
      <Button type="submit" name="Login" />
      </form>
    </div>
  );
}

export default App;
