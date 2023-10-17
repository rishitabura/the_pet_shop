/* eslint-disable react/jsx-no-duplicate-props */
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../styles/login.css'
import cat_anmi from "../../assets/img/cat_anim.jpg";
import AdminNavbar from "../../components/AdminNavbar";


const Admin_ViewPet = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const petcat =  location.state.petcat;
    const petid = location.state.petid;

    const [form, setForm] = useState({
        _id: "",
        name: "",
        year: "", 
        gender: "", 
        breed: "", 
        colour:"", 
        vaccinationStatus: "", 
        allergies:"",
        cost: "",
        category:""
    });

    const onFormInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const redirectNow = () => {
        const redirectTo = location.search.replace("?redirectTo=", "");
        navigate(redirectTo ? redirectTo : "/admin/getAllPets");
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        var id = form._id;
        var name = form.name;
        var year = form.year;
        var gender = form.gender;
        var breed = form.breed;
        var colour = form.colour;
        var vaccinationStatus = form.vaccinationStatus;
        var allergies = form.allergies;
        var cost = form.cost;
        var category = form.category;
        fetch("http://localhost:5000/admin/updatePet", {
            method: "POST",
            CrossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({
                id,
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
const fetchData = async () => {
        setIsLoading(true);
        fetch("http://localhost:5000/admin/viewPet", {
            method: "POST",
            CrossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({ 
                petid, petcat
            }),

        })
            .then((res) => res.json())
            .then((data) => {
                var petdata = data.data;
                setForm((prevForm) => ({ ...prevForm, _id: petdata._id, name: petdata.Name }));
            
            });

        setIsLoading(false);

    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) return <div style={{ color: 'black' }}>Loading...</div>;
    else {
    return (

            <div className="adminpages">
                <AdminNavbar />
            
                            <div className="admin-addpet">

                                <form className="admin-form">
                                    <span className="admin-form-title">View Pet</span>

                                    <div className="admin-form-input">
                                    <label>Id:</label>
                                        <input type="text" required className="input" name="_id" placeholder="_id" disabled
                                            value={form._id} onChange={onFormInputChange} label="Name" />
                                        <span className="focus-input"></span>
                                        <span className="symbol-input">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>

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
                

           

     

        )
    

}
}

export default Admin_ViewPet;












