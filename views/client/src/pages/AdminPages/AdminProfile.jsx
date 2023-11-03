/* eslint-disable react/jsx-no-duplicate-props */
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../styles/login.css'
import cat_anmi from "../../assets/img/cat_anim.jpg";
import AdminNavbar from "../../components/AdminNavbar";


const AdminProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [form, setForm] = useState({
        name: "",
        phone: "",
        dob: "",
        email: "",
        type: ""
        //paymentmethods
        //giftcards
    });

    const [isLoading, setIsLoading] = useState(null);


    const fetchData = async () => {
        setIsLoading(true);
        const token = window.localStorage.getItem("wtcptoken");
        console.log(token);
        fetch("http://localhost:5000/admin/fetchprofile", {
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
                var userdata = data.data;
                console.log(userdata);
                if ('Phone' in userdata) setForm((prevForm) => ({ ...prevForm, phone: userdata.Phone }));
                if ('DOB' in userdata) setForm((prevForm) => ({ ...prevForm, dob: userdata.DOB, }));
                if ('Type' in userdata) setForm((prevForm) => ({ ...prevForm, type: userdata.Type, }));
                setForm((prevForm) => ({ ...prevForm, email: userdata.Email, name: userdata.Name }));
            });

        setIsLoading(false);

    };


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
        var uname = form.name;
        const token = window.localStorage.getItem("wtcptoken");
        var phone = form.phone;
        var dob = form.dob;
        var email = form.email;
        fetch("http://localhost:5000/admin/profile", {
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
                token
            }),

        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "Profile");
                if (data.success == true) {
                    alert("Updated Successfully");
                    redirectNow();
                }
            });

    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) return <div style={{ color: 'black' }}>Loading...</div>;
    else {
        return (

            <div><div>
                <AdminNavbar />
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
                                        <input type="email" required className="input" name="email" placeholder="Email"
                                            value={form.email} onChange={onFormInputChange} label="Email" disabled />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
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
                                    <label>Date of Birth:</label>
                                        <input type="date" required className="input" name="dob" placeholder="DOB"
                                            value={form.dob} onChange={onFormInputChange} label="DOB" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="wrap-input">
                                    <label>Admin Type:</label>
                                        <input type="text" required className="input" name="type" placeholder="Type"
                                            value={form.type} onChange={onFormInputChange} label="Type" disabled />
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

export default AdminProfile;












