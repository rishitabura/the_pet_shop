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
import Birds from './pages/birds';
import SeaAnimals from './pages/seaanimals';

//pet accessories
import Food from "./pages/food";
import Essentials from "./pages/essentials";
import Shelter from "./pages/shelter";
import Grooming from "./pages/grooming";


import Product1 from "./pages/product1";
import Product2 from "./pages/product2";
import Product3 from "./pages/product3";
import Product4 from "./pages/product4";
import Product5 from "./pages/product5";
import Product6 from "./pages/product6";
import Pet from "./pages/pet";

// import ProductModal from './pages/Modal';
import UserProfile from './pages/userprofile';

// import GoldenRetrieversDog from './pages/Golden-Retrievers-Dog';



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
          <Route exact path="/userprofile" element={<UserProfile/>}/>
          <Route exact path="/birds" element={<Birds />} />
          <Route exact path="/seaanimals" element={<SeaAnimals />} />
          {/* <Route exact path="/modal" element={<ProductModal />} /> */}

          <Route exact path="/food" element={<Food />} />
          <Route exact path="/shelter" element={<Shelter />} />
          <Route exact path="/grooming" element={<Grooming />} />
          <Route exact path="/essentials" element={<Essentials />} />

          <Route exact path="/product1" element={<Product1 />} />
          <Route exact path="/product2" element={<Product2 />} />
          <Route exact path="/product3" element={<Product3 />} />
          <Route exact path="/product4" element={<Product4 />} />
          <Route exact path="/product5" element={<Product5 />} />
          <Route exact path="/product6" element={<Product6 />} />
          <Route exact path="/pet" element={<Pet />} />
          {/* <Route exact path="/goldenRetrieversDog" element={<GoldenRetrieversDog />} /> */}
 
      </Routes>
      </BrowserRouter>
  

    </>
  );
}


export default App;

