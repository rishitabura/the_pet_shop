/* eslint-disable react/jsx-no-duplicate-props */
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import '../../styles/login.css';
import cat_anmi from "../../assets/img/cat_anim.jpg";
import AdminNavbar from "../../components/AdminNavbar";

const Admin_Pet_View = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { petcat, pid } = useParams();
    const [isLoading, setIsLoading] = useState(null);
    const [base64Image, setBase64Image] = useState(null);
    const imageSource = `data:image/jpeg;base64, ${base64Image}`;

    const [form, setForm] = useState({
        name: "",
        gender: "",
        colour: "",
        weight: "",
        height: "",
        cost: "",
        available: "",
        features: "",
        category: "",
        tags: "",
        imgname: ""
    });
    const [file, setFile] = useState(null);
    const [fileurl, setFileurl] = useState(null);

    const onFormInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    function handleFileChange(e) {
        console.log(e.target.files);
        setFile(e.target.files[0]);
        setFileurl(URL.createObjectURL(e.target.files[0]));
    }

    const redirectNow = () => {
        const redirectTo = location.search.replace("?redirectTo=", "");
        navigate(redirectTo ? redirectTo : "/admin/pets/viewCategories");
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('gender', form.gender);
        formData.append('colour', form.colour);
        formData.append('weight', form.weight);
        formData.append('height', form.height);
        formData.append('cost', form.cost);
        formData.append('available', form.available);
        formData.append('features', form.features);
        formData.append('category', form.category);
        formData.append('tags', form.tags);
        if(file) formData.append('file', file);
        else{
            formData.append('filebase64', base64Image);
            formData.append('filename', form.imgname);
            //console.log("need to submit old file");
        }
        if (form.category != petcat) {
            // delete from original category
            fetch(`http://localhost:5000/admin/pet/${petcat}/${pid}/delete`, {
                method: "POST",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success === true) {
                        //alert("Deleted Successfully");
                        //redirectNow();
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
            // add to new category
            fetch(`http://localhost:5000/admin/pet/add`, {
                method: "POST",
                body: formData,
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success === true) {
                        alert("Edited Successfully. Category is changed");
                        redirectNow();
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });

        }
        else{
        fetch(`http://localhost:5000/admin/pet/${petcat}/${pid}/update`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success === true) {
                    alert("Added Successfully");
                    redirectNow();
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        }
    };


    const fetchData = async () => {
        setIsLoading(true);

        fetch(`http://localhost:5000/admin/pet/${petcat}/${pid}/view`, {
            method: "POST",
            CrossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

        })
            .then((res) => res.json())
            .then((data) => {
                //console.log(data.data);
                setBase64Image(data.data.Image);
                setForm((prevForm) => ({
                    ...prevForm,
                    name: data.data.Name,
                    gender: data.data.Gender,
                    colour: data.data.Colour,
                    height: data.data.Height,
                    weight: data.data.Weight,
                    cost: data.data.Cost,
                    available: data.data.Available,
                    features: data.data.Features,
                    category: petcat,
                    tags: data.data.Tags,
                    imgname: data.data.Imagename
                }));

            });

        setIsLoading(false);

    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) return <div style={{ color: 'black' }}>Loading...</div>;
    else {
        return (

            <div>
                <AdminNavbar />
                <div className="adminpages">
                    <div className="admin-addpet">

                        <form className="admin-form" encType="multipart/form-data">
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
                                <label>Gender:</label>
                                <input type="text" required className="input" name="gender" placeholder="Gender(M/F)"
                                    value={form.gender} onChange={onFormInputChange} label="Gender" />
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
                                <label>Height:</label>
                                <input type="text" required className="input" name="height" placeholder="Height Range in inches"
                                    value={form.height} onChange={onFormInputChange} label="Height" />
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>


                            <div className="admin-form-input">
                                <label>Weight:</label>
                                <input type="text" required className="input" name="weight" placeholder="Weight Range in kg"
                                    value={form.weight} onChange={onFormInputChange} label="Weight" />
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="admin-form-input">
                                <label>Available Quantity:</label>
                                <input type="number" required className="input" name="available" placeholder="Available Quantity"
                                    value={form.available} onChange={onFormInputChange} label="Available" />
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="admin-form-input">
                                <label>Features:</label>
                                <textarea required className="input" name="features" placeholder="Features"
                                    value={form.features} onChange={onFormInputChange} label="Features" />
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="admin-form-input">
                                <label>Cost:</label>
                                <input type="number" required className="input" name="cost" placeholder="cost"
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
                                <label>Tags:</label>
                                <input type="text" required className="input" name="tags" placeholder="tags"
                                    value={form.tags} onChange={onFormInputChange} label="tags" />
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <label>Old Image:</label>
                            <div style={{ overflow: "contain" }}>
                                <img width="600" height={base64Image ? "400" : "0"} src={imageSource} alt="Old Image" />
                            </div>

                            <input type="file" name="file" id="file" onChange={handleFileChange} />

                            <div style={{ overflow: "contain" }}>
                                <img width="600" height={file ? "400" : "0"} src={fileurl} />
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

}

export default Admin_Pet_View;












