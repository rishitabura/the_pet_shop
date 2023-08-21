import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
//import '../styles/login.css'
//import login_img from '';
 
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
    navigate(redirectTo ? redirectTo : "/auth");
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    var email = form.email;
    var password = form.password;
    const utype = "patient";
    fetch("http://localhost:5000/login", {
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
        if(data.status=="Ok"){
            alert("Login Successful");
            window.localStorage.setItem("token", data.data);
            redirectNow();
            
        }
    });
    
  };

 return(

    <div><div>
   <body>
    <div className="Main-container">
        <div className="container-login">

            
            <div className="wrap-login">
            <div className="topBottons_login">
             
            </div>

                <div class="login-pic">
                    <img src='' alt="IMG" className="login-pic-img"/>
                </div>

                <form class="login-form">
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












