import logo from './logo.svg';
import './App.css';
import TextButtons from './Component'
import SignInSide from './login'
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
        <TextButtons/>
        <SignInSide/>
      
    </div>
  );
}

export default App;
