import React from "react";
//import '../styles/login.css'
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

 
const Register = () => {
 const navigate = useNavigate();
 const location = useLocation();
 
 // As explained in the Login page.
 
 const [form, setForm] = useState({
   email: "",
   password: "",
   name: "",
   phone: ""
 });
 
 // As explained in the Login page.
 const onFormInputChange = (event) => {
   const { name, value } = event.target;
   setForm({ ...form, [name]: value });
 };
 
 
 // As explained in the Login page.
 const redirectNow = () => {
   const redirectTo = location.search.replace("?redirectTo=", "");
   navigate(redirectTo ? redirectTo : "/");
 }
 
 // As explained in the Login page.
 const onSubmit = async (e) => {
    e.preventDefault();
    var uname=form.name;
    var email = form.email;
    var password = form.password;
    var phone = form.phone;
    //console.log(email, password, utype);
    
    fetch("http://localhost:5000/register", {
        method: "POST",
        CrossDomain: true,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin": "*", 
        },
        
        body: JSON.stringify({
            uname,
            email,
            password,
            phone,
        }),

    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data, "userRegister");
        alert("Successful");
        navigate("/login");
    });
 };
 
 return(

    <div><container>
   <body>
    <div className="Main-container">
        <div className="container-login">

            
            <div className="wrap-login">
            <div className="topBottons_login">
            
            </div>

                <div className="login-pic">
                    <img src=''alt="IMG" className="login-pic-img"/>
                </div>

                <form className="login-form">
                    <span className="login-form-title">Create Account</span>

                    <div class="wrap-input">
                        <input type="text" class="input" name="name" placeholder="Name" 
                        label="name"
                        value={form.name}
                        onInput={onFormInputChange}
                        required/>
                        <span class="focus-input"></span>
                        <span class="symbol-input">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div class="wrap-input">
                        <input type="text" className="input" name="email" placeholder="Email" 
                        label="email"
                        value={form.email}
                        onInput={onFormInputChange}
                        required/>
                        
                        <span className="focus-input"></span>
                        <span className="symbol-input">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                    </div>

                     <div class="wrap-input">
                        <input type="text" class="input" name="phone" placeholder="Phone Number" 
                        label="Phone" value={form.phone}
                        onInput={onFormInputChange}
                        required/>
                        <span class="focus-input"></span>
                        <span class="symbol-input">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div className="wrap-input">
                        <input type="password" className="input" name="password" placeholder="Password" 
                        label="Password"
                        // type="password"
                        // name="password"
                        value={form.password}
                        onInput={onFormInputChange}
                        required/>
                        <span className="focus-input"></span>
                        <span className="symbol-input">
                            <i className="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div class="wrap-input">
                        <input type="password" class="input" name="conpass" placeholder="Confirm Password" required/>
                        <span class="focus-input"></span>
                        <span class="symbol-input">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                        </span>
                    </div>

                    <div className="login-form-btn-container">
                        <button className="login-form-btn" onClick={onSubmit}>Sign Up</button>
                    </div>

                  <div className="text-center p-t-2">
                      <a href="/login" className="txt2">Already have an Account? Login <i class="fa fa-long-arrow-right " aria-hidden="true"></i></a>
                  </div>

                </form>

            </div>
        </div>
    </div>

</body>
    
    </container></div>
          
)

}

export default Register;

