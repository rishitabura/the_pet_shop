// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//main
import Home from "./pages/home";
import About from './pages/aboutus';

//login
import Login from './pages/login';
import Register from './pages/register';

//general
import Animals from './pages/animals';
import Birds from './pages/birds';
import SeaAnimals from './pages/seaanimals';
import PetsCategory from './pages/PetsCategory';
import PetInfo from './pages/PetInfo';
import DisplayAnimals from './pages/DisplayAnimals';
import ProductsCategory from './pages/ProductsCategory';
import ProductInfo from './pages/ProductInfo';
import DisplayProducts from './pages/DisplayProducts';
//import GoldenRetrieversDog from './pages/Golden-Retrievers-Dog';

//pet accessories
import Food from "./pages/food";
import Healthcare from "./pages/healthcare";
import Shelter from "./pages/shelter";
import Habitat from "./pages/habitat";

import Puppies from "./pages/puppies";

import Product1 from "./pages/product1";
import Product2 from "./pages/product2";
import Product3 from "./pages/product3";
import Product4 from "./pages/product4";
import Product5 from "./pages/product5";
import Product6 from "./pages/product6";
import Pet from "./pages/pet";

// import ProductModal from './pages/Modal';
import UserProfile from './pages/userprofile';

// admin
import AdminDashboard from "./pages/AdminPages/AdminDashboard";
import AdminProfile from "./pages/AdminPages/AdminProfile";
import GetAllAdmins from './pages/AdminPages/GetAllAdmins';
import Admin_AddAdmin from './pages/AdminPages/Admin_AddAdmin';
// admin - pets
import ViewPetCategories from './pages/AdminPages/ViewPetCategories';
import Admin_AddPet from './pages/AdminPages/Admin_AddPet';
import Admin_PetCat_GetAll from './pages/AdminPages/Admin_PetCat_GetAll';
import Admin_Pet_View from './pages/AdminPages/Admin_Pet_View';
// admin - products
import ViewProductCategories from './pages/AdminPages/ViewProductCategories';
import Admin_AddProduct from './pages/AdminPages/Admin_AddProduct';
import Admin_ProductCat_GetAll from './pages/AdminPages/Admin_ProductCat_GetAll';
import Admin_Product_View from './pages/AdminPages/Admin_Product_View';
// admin - customers and orders
import GetAllCustomers from './pages/AdminPages/GetAllCustomers';
import GetAllOrders from './pages/AdminPages/GetAllOrders';
import Admin_Customer_View from './pages/AdminPages/Admin_Customer_View';
import Admin_Customer_Orders from './pages/AdminPages/Admin_Customer_Orders';





function App() {


  return (
    
    <>
     <BrowserRouter>
     <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} /> 
          <Route exact path="/userprofile" element={<UserProfile/>}/>
          <Route exact path="/about" element={< About/>}/> 
          <Route exact path="/pets/tags/:searchTag" element={<DisplayAnimals />} />
          <Route exact path="/pets/:category/:pid" element={<PetInfo />} />
          <Route exact path="/pets/:category/" element={<PetsCategory />} />

          <Route exact path="/products/tags/:searchTag" element={<DisplayProducts />} />
          <Route exact path="/products/:category/:pid" element={<ProductInfo />} />
          <Route exact path="/products/:category/" element={<ProductsCategory />} />
           <Route exact path="/animals" element={<Animals />} />
          {/*<Route exact path="/birds" element={<Birds />} /> */}
          {/* <Route exact path="/seaanimals" element={<SeaAnimals />} /> */}
          {/* <Route exact path="/goldenRetrieversDog" element={<GoldenRetrieversDog />} /> */}

          {/* Admin Routes */}
            {/* Admin */}
            <Route exact path="/admin/dashboard" element={<AdminDashboard/>}/>
            <Route exact path="/admin/profile" element={<AdminProfile/>}/>
            <Route exact path="/admin/manageadmins" element={<GetAllAdmins/>}/>
            <Route exact path="/admin/registeradmin" element={<Admin_AddAdmin/>}/>
           
            {/* Admin - Pets */}
            <Route exact path="/admin/pets/viewCategories" element={<ViewPetCategories/>}/>
            <Route exact path="/admin/addpet" element={<Admin_AddPet/>}/>
            <Route path="/admin/getAllPets/:petcat" element={<Admin_PetCat_GetAll />} />
            <Route path="/admin/getAllPets/:petcat/:pid" element={<Admin_Pet_View />} />

            {/* Admin - Products */}
            <Route exact path="/admin/products/viewCategories" element={<ViewProductCategories/>}/>
            <Route exact path="/admin/addproduct" element={<Admin_AddProduct/>}/>
            <Route path="/admin/getAllProducts/:productcat" element={<Admin_ProductCat_GetAll />} />
            <Route path="/admin/getAllProducts/:productcat/:pid" element={<Admin_Product_View />} />
          
          
          <Route exact path="/admin/customers" element={<GetAllCustomers/>}/>
          <Route exact path="/admin/customers/:cid" element={<Admin_Customer_View/>}/>
          <Route exact path="/admin/customers/:cid/orders" element={<Admin_Customer_Orders/>}/>
          <Route exact path="/admin/orders" element={<GetAllOrders/>}/>
          {/* <Route exact path="/modal" element={<ProductModal />} /> */}

          <Route exact path="/food" element={<Food />} />
          <Route exact path="/shelter" element={<Shelter />} />
          <Route exact path="/habitat" element={<Habitat />} />
          <Route exact path="/essentials" element={<Healthcare />} />

          <Route exact path="/product1" element={<Product1 />} />
          <Route exact path="/product2" element={<Product2 />} />
          <Route exact path="/product3" element={<Product3 />} />
          <Route exact path="/product4" element={<Product4 />} />
          <Route exact path="/product5" element={<Product5 />} />
          <Route exact path="/product6" element={<Product6 />} />
          <Route exact path="/pet" element={<Pet />} />
          <Route exact path="/puppies" element={<Puppies />} />



 
      </Routes>
      </BrowserRouter>
  

    </>
  );
}


export default App;

