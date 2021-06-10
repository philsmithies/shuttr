import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavBar from './components/Navbar/Index' 
import Index from './components/Index/Index' 
import Login from './components/Login/Login' 
import SignUp from './components/SignUp/SignUp' 
import Preferences from './components/Preferences/Index'
import ImageUpload from './components/ImageUpload/Index' 
import PhotosPage from './components/PhotosPage/Index'

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Cyber Playground</h1>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Preferences" component={Preferences} />
        <Route path="/ImageUpload" component={ImageUpload} />
        <Route component={Error} />
      </Switch>
      <PhotosPage />
    </div>
  );
}

export default App;