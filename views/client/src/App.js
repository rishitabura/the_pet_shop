// import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
=======
 import { BrowserRouter, Routes, Route } from "react-router-dom";

//import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
>>>>>>> 116261419b39a2fd2c2273a6bfa2f785b3f491eb
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import About from './pages/aboutus';

import Login from './pages/login';
import Register from './pages/register';

import Animals from './pages/animals';

<<<<<<< HEAD
=======

>>>>>>> 116261419b39a2fd2c2273a6bfa2f785b3f491eb
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
          <Route exact path="/" element={<Home />} />
<<<<<<< HEAD
=======
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />

          <Route exact path="/animals" element={<Animals />} />
>>>>>>> 116261419b39a2fd2c2273a6bfa2f785b3f491eb
      </Routes>
      </BrowserRouter>
    </>
  );
}

// function App() {
//   return (
//     <>
//      <Router>
//        <Switch>

//           <Route exact path="/" element={<Home />} />

//           <Route path="/about" component={About} />

//           <Redirect to="/" />

//       </Switch>
//       </Router>
//     </>
//   );
// }

export default App;

