// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import About from './pages/aboutus';


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

