// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import About from './pages/aboutus';


<<<<<<< HEAD
=======
import Animals from './pages/animals';

>>>>>>> 524bffb5ec26051e2233e7055ec5d1044c0c23c3
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
          <Route exact path="/" element={<Home />} />
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

