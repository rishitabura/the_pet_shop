/* eslint-disable react/jsx-no-duplicate-props */
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../styles/login.css'
import cat_anmi from "../../assets/img/cat_anim.jpg";
import AdminNavbar from "../../components/AdminNavbar";


const Admin_AddPet = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [form, setForm] = useState({
        name: "",
        year: "", 
        gender: "", 
        breed: "", 
        colour:"", 
        vaccinationStatus: "", 
        allergies:"",
        cost: "",
        category:""
        //paymentmethods
        //giftcards
    });

    const onFormInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const redirectNow = () => {
        const redirectTo = location.search.replace("?redirectTo=", "");
        navigate(redirectTo ? redirectTo : "/admin/viewCategories");
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        var name = form.name;
        var year = form.year;
        var gender = form.gender;
        var breed = form.breed;
        var colour = form.colour;
        var vaccinationStatus = form.vaccinationStatus;
        var allergies = form.allergies;
        var cost = form.cost;
        var category = form.category;
        fetch("http://localhost:5000/admin/addpet", {
            method: "POST",
            CrossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({
                name,
                year, 
                gender, 
                breed, 
                colour, 
                vaccinationStatus, 
                allergies,
                cost,
                category
            }),

        })
            .then((res) => res.json())
            .then((data) => {
               
                if (data.success == true) {
                    alert("Added Successfully");
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
                                    <span className="admin-form-title">Add Pet</span>

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
                                    <label>Year of Birth:</label>
                                        <input type="number" pattern="[0-9][0-9][0-9][0-9]" required className="input" name="year" placeholder="Year of Birth"
                                            value={form.year} onChange={onFormInputChange} label="year" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="admin-form-input">
                                    <label>Gender:</label>
                                        <input type="text" required className="input" name="gender" placeholder="Gender(M/F)"
                                            value={form.gender} onChange={onFormInputChange} label="Gender" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="admin-form-input">
                                    <label>Breed:</label>
                                        <input type="text" required className="input" name="breed" placeholder="Breed"
                                            value={form.breed} onChange={onFormInputChange} label="Breed" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="admin-form-input">
                                    <label>Colour:</label>
                                        <input type="text" required className="input" name="colour" placeholder="colour"
                                            value={form.colour} onChange={onFormInputChange} label="colour" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                            

                                    <div className="admin-form-input">
                                    <label> vaccinationStatus:</label>
                                        <input type="text" required className="input" name="vaccinationStatus" placeholder="vaccinationStatus"
                                            value={form.vaccinationStatus} onChange={onFormInputChange} label="vaccinationStatus" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="admin-form-input">
                                    <label>Allergies:</label>
                                        <input type="text" required className="input" name="allergies" placeholder="allergies"
                                            value={form.allergies} onChange={onFormInputChange} label="allergies" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="admin-form-input">
                                    <label>Cost:</label>
                                        <input type="text" required className="input" name="cost" placeholder="cost"
                                            value={form.cost} onChange={onFormInputChange} label="cost" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

                                    <div className="admin-form-input">
                                    <label>Category:</label>
                                        <input type="text" required className="input" name="category" placeholder="category"
                                            value={form.category} onChange={onFormInputChange} label="category" />
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

export default Admin_AddPet;












