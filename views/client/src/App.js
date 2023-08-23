// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import About from './pages/aboutus';

import Login from './pages/login';
import LoginSample from './pages/loginSample';
import Register from './pages/register';

import Animals from './pages/animals';


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/loginSample" element={<LoginSample />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/about" element={< About/>}/> 
          <Route exact path="/animals" element={<Animals />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;

