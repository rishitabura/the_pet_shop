// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//main
import Home from "./pages/home";
import About from './pages/aboutus';

//login
import Login from './pages/login';
import LoginSample from './pages/loginSample';
import Register from './pages/register';

//general
import Animals from './pages/animals';

//user
import UserProfile from './pages/userprofile';


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
          <Route exact path="/user/profile" element={<UserProfile/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;

