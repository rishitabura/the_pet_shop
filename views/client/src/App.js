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
//import GoldenRetrieversDog from './pages/Golden-Retrievers-Dog';

import Modal from './pages/Modal1';

//user
import UserProfile from './pages/userprofile';

// admin
import AdminDashboard from "./pages/AdminPages/AdminDashboard";
import AdminProfile from "./pages/AdminPages/AdminProfile";
import GetAllAdmins from './pages/AdminPages/GetAllAdmins';
import ViewCategories from './pages/AdminPages/ViewCategories';
import GetAllCustomers from './pages/AdminPages/GetAllCustomers';
import GetAllOrders from './pages/AdminPages/GetAllOrders';
import Admin_AddPet from './pages/AdminPages/Admin_AddPet';
import Admin_AddAdmin from './pages/AdminPages/Admin_AddAdmin';
import Admin_PetCat_GetAll from './pages/AdminPages/Admin_PetCat_GetAll';



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
          <Route exact path="/modal" element={<Modal />} />
          {/* <Route exact path="/goldenRetrieversDog" element={<GoldenRetrieversDog />} /> */}

          {/* Admin Routes */}
          <Route exact path="/admin/dashboard" element={<AdminDashboard/>}/>
          <Route exact path="/admin/profile" element={<AdminProfile/>}/>
          <Route exact path="/admin/manageadmins" element={<GetAllAdmins/>}/>
              <Route exact path="/admin/registeradmin" element={<Admin_AddAdmin/>}/>
          <Route exact path="/admin/viewCategories" element={<ViewCategories/>}/>
              <Route exact path="/admin/addpet" element={<Admin_AddPet/>}/>
              <Route exact path="/admin/getAllPets" element={<Admin_PetCat_GetAll/>}/>
          <Route exact path="/admin/managecustomers" element={<GetAllCustomers/>}/>
          <Route exact path="/admin/manageorders" element={<GetAllOrders/>}/>


 
      </Routes>
      </BrowserRouter>
  

    </>
  );
}


export default App;

