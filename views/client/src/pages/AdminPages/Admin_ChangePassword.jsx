/* eslint-disable react/jsx-no-duplicate-props */
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../styles/login.css'
import cat_anmi from "../../assets/img/cat_anim.jpg";
import AdminNavbar from "../../components/AdminNavbar";


const Admin_ChangePassword = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [form, setForm] = useState({
        oldpass: "",
        newpass: "",
        connewpass: "",
    });


    const onFormInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const redirectNow = () => {
        const redirectTo = location.search.replace("?redirectTo=", "");
        navigate(redirectTo ? redirectTo : "/admin/dashboard");
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        var oldpass = form.oldpass;
        var newpass = form.newpass;
        var connewpass = form.connewpass;
        const token = window.localStorage.getItem("wtcptoken");
        if (connewpass != newpass) alert("New Password and Confirm New Password does not match");
        else {
            fetch("http://localhost:5000/admin/changepassword", {
                method: "POST",
                CrossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },

                body: JSON.stringify({
                    oldpass,
                    newpass,
                    token
                }),

            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success == true) {
                        alert("Updated Successfully");
                        redirectNow();
                    }
                    else {
                        alert("Invalid Credentials");
                    }
                });
            }
        };

        return (

            <div><div>
                <AdminNavbar />
                <body>
                    <div className="Main-container" style={{ 'padding-top': '120px' }}>
                        <div className="container-login" style={{ 'width': '500px' }}>


                            <div className="wrap-login">
                                <div className="topBottons_login">

                                </div>

                                <div className="login-pic">
                                    <img src={cat_anmi} alt="IMG" className="login-pic-img" />
                                </div>

                                <form className="login-form">
                                    <span className="login-form-title">Change Password</span>

                                    <div className="wrap-input">
                                        <label>Old Password:</label>
                                        <input type="password" required className="input" name="oldpass" placeholder="Old Password"
                                            value={form.oldpass} onChange={onFormInputChange} label="Oldpass" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="wrap-input">
                                        <label>New Password:</label>
                                        <input type="password" required className="input" name="newpass" placeholder="New Password"
                                            value={form.newpass} onChange={onFormInputChange} label="NewPass" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="wrap-input">
                                        <label>Confirm New Password:</label>
                                        <input type="password" required className="input" name="connewpass" placeholder="Confirm Password"
                                            value={form.connewpass} onChange={onFormInputChange} label="Connewpass" />
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

export default Admin_ChangePassword;












