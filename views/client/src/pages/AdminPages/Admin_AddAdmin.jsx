/* eslint-disable react/jsx-no-duplicate-props */
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../styles/login.css'
import cat_anmi from "../../assets/img/cat_anim.jpg";
import AdminNavbar from "../../components/AdminNavbar";


const Admin_AddAdmin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [form, setForm] = useState({
        name: "",
        email: ""
    });

    const onFormInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const redirectNow = () => {
        const redirectTo = location.search.replace("?redirectTo=", "");
        navigate(redirectTo ? redirectTo : "/admin/manageadmins");
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        var uname = form.name;
        var email = form.email;
        var type = "Admin";
        const token = window.localStorage.getItem("wtcptoken");
        fetch("http://localhost:5000/admin/registerNewAdmin", {
            method: "POST",
            CrossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({
                uname,
                token,
                email,
                type
            }),

        })
            .then((res) => res.json())
            .then((data) => {
               
                if (data.success == true) {
                    alert("Added Successfully. Default Password is admin123");
                    redirectNow();
                }
            });

    };

        return (

            <div>
                <AdminNavbar />
                <div className="adminpages">
                            <div className="admin-addpet">

                                <form className="admin-form">
                                    <span className="admin-form-title">Register Admin</span>

                                    <div className="admin-form-input">
                                    <label>Name:</label>
                                        <input type="text" required className="input" name="name" placeholder="Name"
                                            value={form.name} onChange={onFormInputChange} label="Name" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>


                                    <div className="admin-form-input">
                                    <label>Email:</label>
                                        <input type="email" required className="input" name="email" placeholder="Email"
                                            value={form.email} onChange={onFormInputChange} label="year" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>


                                    <div className="admin-form-input">
                                        <button className="admin-table-button" onClick={onSubmit}>Save</button>
                                    </div>

                                </form>

                            </div>
                        </div>
                        </div>

           

     

        )
    

}

export default Admin_AddAdmin;












