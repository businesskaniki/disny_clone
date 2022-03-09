import React from 'react';
import Header from './components/Header';
import Home from './components/Home'
import Login from './components/Login';
import './App.css';
import Detail from './components/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/> 
          <Route exact path="Detail" element={<Detail/>}/>
          <Route exact path="Login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
