/* eslint-disable react/jsx-no-duplicate-props */
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../styles/login.css'
import cat_anmi from "../assets/img/cat_anim.jpg";
import Navbar from "../components/Navbar";


const UserProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [form, setForm] = useState({
        name: "",
        phone: "",
        address_line1: "",
        address_area: "",
        address_city: "",
        pincode: "",
        dob: "",
        email: "",
        //paymentmethods
        //giftcards
    });

    const [isLoading, setIsLoading] = useState(null);


    const fetchUserData = async () => {
        setIsLoading(true);
        const token = window.localStorage.getItem("wtcptoken");
        console.log(token);
        fetch("http://localhost:5000/customer/fetchprofile", {
            method: "POST",
            CrossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({
                token
            }),

        })
            .then((res) => res.json())
            .then((data) => {
                if(data.data){
                var userdata = data.data;
                //console.log(userdata);
                if ('Address_line1' in userdata) setForm((prevForm) => ({ ...prevForm, address_line1: userdata.Address_line1 }));
                if ('Address_area' in userdata) setForm((prevForm) => ({ ...prevForm, address_area: userdata.Address_area }));
                if ('City' in userdata) setForm((prevForm) => ({ ...prevForm, address_city: userdata.City }));
                if ('Pincode' in userdata) setForm((prevForm) => ({ ...prevForm, pincode: userdata.Pincode }));
                if ('Phone' in userdata) setForm((prevForm) => ({ ...prevForm, phone: userdata.Phone }));
                if ('DOB' in userdata) setForm((prevForm) => ({ ...prevForm, dob: userdata.DOB, }));
                
                setForm((prevForm) => ({ ...prevForm, email: userdata.Email, name: userdata.Name }));
                }
            });

        setIsLoading(false);

    };


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
        var uname = form.name;
        var phone = form.phone;
        var dob = form.dob;
        var address_line1 = form.address_line1;
        var address_area = form.address_area;
        var city = form.address_city;
        var pincode = form.pincode;
        var email = form.email;
        var token = window.localStorage.getItem("wtcptoken");
        fetch("http://localhost:5000/customer/profile", {
            method: "PUT",
            CrossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({
                email,
                uname,
                dob,
                phone,
                address_line1,
                address_area,
                city,
                pincode,
                token
            }),

        })
            .then((res) => res.json())
            .then((data) => {
                //console.log(data, "Profile");
                if (data.success == true) {
                    alert("Updated Successfully");
                    redirectNow();
                }
            });

    };

    useEffect(() => {
        fetchUserData();
    }, []);

    if (isLoading) return <div style={{ color: 'black' }}>Loading...</div>;
    else {
        return (

            <div><div>
                <Navbar />
                <body>
                    <div className="Main-container" style={{'padding-top' : '120px'}}>
                        <div className="container-login" style={{'width' : '500px'}}>


                            <div className="wrap-login">
                                <div className="topBottons_login">

                                </div>

                                <div className="login-pic">
                                    <img src={cat_anmi} alt="IMG" className="login-pic-img" />
                                </div>

                                <form className="login-form">
                                    <span className="login-form-title">My Profile</span>

                                    <div className="wrap-input">
                                    <label>Name:</label>
                                        <input type="text" required className="input" name="name" placeholder="Name"
                                            value={form.name} onChange={onFormInputChange} label="Name" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>


                                    <div className="wrap-input">
                                    <label>Email:</label>
                                        <input type="email" required disabled className="input" name="email" placeholder="Email"
                                            value={form.email} onChange={onFormInputChange} label="Email" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="wrap-input">
                                    <label>Password:</label> <br/>
                                    
                                        <Link to='/customer/changepassword'>
                                        <button className="login-form-btn">Change Password</button>
                                        </Link>
                                   
                                    </div>

                                    <div className="wrap-input">
                                    <label>Phone number:</label>
                                        <input type="tel" required className="input" name="phone" placeholder="Phone Number"
                                            value={form.phone} onChange={onFormInputChange} label="Phone" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="wrap-input">
                                    <label>Date:</label>
                                        <input type="date" required className="input" name="dob" placeholder="DOB"
                                            value={form.dob} onChange={onFormInputChange} label="DOB" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="wrap-input">
                                    <label>Landmark:</label>
                                        <input type="text" required className="input" name="address_line1" placeholder="Address Line 1"
                                            value={form.address_line1} onChange={onFormInputChange} label="Address Line 1" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="wrap-input">
                                    <label>Area:</label>
                                        <input type="text" required className="input" name="address_area" placeholder="Area"
                                            value={form.address_area} onChange={onFormInputChange} label="Area" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="wrap-input">
                                    <label>City:</label>
                                        <input type="text" required className="input" name="address_city" placeholder="City"
                                            value={form.address_city} onChange={onFormInputChange} label="City" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="wrap-input">
                                    <label>Pincode:</label>
                                        <input type="number" required className="input" name="pincode" placeholder="Pincode"
                                            value={form.pincode} onChange={onFormInputChange} label="Pincode" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="login-form-btn-container">
                                        <button className="login-form-btn" onClick={onSubmit}>Save</button>
                                    </div>

                                    

                                
                                   

                                </form>

                            </div>
                        </div>
                    </div>

                </body>

            </div></div>

        )
    }

}

export default UserProfile;












