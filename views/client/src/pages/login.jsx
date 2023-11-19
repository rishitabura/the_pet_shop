import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../styles/login.css'
import cat_anmi from "../assets/img/cat_anim.jpg";
import Navbar from "../components/Navbar";

 
const Login = () => {
 const navigate = useNavigate();
 const location = useLocation();

 const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/");
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    var email = form.email;
    var password = form.password;
    fetch("http://localhost:5000/customer/login", {
        method: "POST",
        CrossDomain: true,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin": "*", 
        },
        
        body: JSON.stringify({
            email,
            password,
        }),

    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data, "userLogin");
        console.log(data.msg);
        if(data.msg=="ok")
        {
            window.localStorage.setItem("wtcptoken", data.data.token);
            window.localStorage.setItem("usertype", data.data.type);
            if(data.data.type=="customer"){
                alert("Login Successful"); 
                redirectNow();
            }
            else if( data.data.type=="Admin" || data.data.type=="MasterAdmin")
            {
                alert("Redirecting to Admin");
                navigate('/admin/dashboard');
            }
        }
        else alert("Invalid Credentials");
       
    });
    
  };

 return(

    <div><div>
        <Navbar/>

   <body>
    <div className="Main-container">
        <div className="container-login">

            
            <div className="wrap-login">
            <div className="topBottons_login">
             
            </div>

                <div className="login-pic">
                    <img src={cat_anmi} alt="IMG" className="login-pic-img"/>
                </div>

                <form className="login-form">
                    <span className="login-form-title">Login</span>

                    <div className="wrap-input">
                        <input type="email" className="input" name="email" placeholder="Email"  
                        value={form.email} onChange={onFormInputChange} label="Email" required/>
                        <span className="focus-input"></span>
                        <span className="symbol-input">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div className="wrap-input">
                        <input type="password" className="input" name="password" placeholder="Password" 
                        value={form.password} onChange={onFormInputChange} required/>
                        <span className="focus-input"></span>
                        <span className="symbol-input">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div className="login-form-btn-container">
                        <button className="login-form-btn" onClick={onSubmit}>Login</button>
                    </div>

                  {/* <div className="text-center p-t-1">
                      <span className="txt1">Forgot</span>
                      <a href="#" className="txt2"> Username / Password ?</a>
                  </div> */}
                  <div className="text-center p-t-2">
                      <a href="/register" className="txt2">Create Your Account <i className="fa fa-long-arrow-right " aria-hidden="true"></i></a>
                  </div>

                </form>

            </div>
        </div>
    </div>

</body>
    
    </div></div>
          
)

}

export default Login;












