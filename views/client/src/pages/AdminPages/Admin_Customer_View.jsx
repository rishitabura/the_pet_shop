/* eslint-disable react/jsx-no-duplicate-props */
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import '../../styles/login.css';
import cat_anmi from "../../assets/img/cat_anim.jpg";
import AdminNavbar from "../../components/AdminNavbar";

const Admin_Customer_View = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { cid } = useParams();
    const [isLoading, setIsLoading] = useState(null);
    //const [base64Image, setBase64Image] = useState(null);
    //const imageSource = `data:image/jpeg;base64, ${base64Image}`;

    const [form, setForm] = useState({
        id:"",
        name: "",
        email: "",
        phone: "",
        address_line1: "",
        address_area: "",
        city: "",
        pincode: ""
    });

    const fetchData = async () => {
        setIsLoading(true);

        fetch(`http://localhost:5000/admin/customers/${cid}`, {
            method: "GET",
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
                setForm((prevForm) => ({
                    ...prevForm,
                    id: data.data._id,
                    name: data.data.Name,
                    email: data.data.Email,
                    phone: data.data.Phone,
                    address_line1: data.data.Address_line1,
                    address_area: data.data.Address_area,
                    city: data.data.City,
                    pincode: data.data.Pincode
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
                            <span className="admin-form-title">View Customer</span>

                            <Link to={`/admin/customers/${form.id}/orders/`}>
                                        <button className="admin-petcat-button">
                                            View Orders
                                        </button>
                                </Link>

                            <div className="admin-form-input">
                                <label>Customer ID:</label>
                                <input type="text" required className="input" name="id" 
                                    value={form.id} disabled />
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="admin-form-input">
                                <label>Name:</label>
                                <input type="text" required className="input" name="name" 
                                    value={form.name} disabled  />
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="admin-form-input">
                                <label>Email:</label>
                                <input type="text" required className="input" name="email" 
                                    value={form.email} disabled  />
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="admin-form-input">
                                <label>Phone:</label>
                                <input type="text" required className="input" name="phone" 
                                    value={form.phone} disabled  />
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="admin-form-input">
                                <label>Address :</label>
                                <input type="text" required className="input" name="address_line1" 
                                    value={form.address_line1} disabled  />
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="admin-form-input">
                                <label>Area :</label>
                                <input type="text" required className="input" name="address_area" 
                                    value={form.address_area} disabled  />
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="admin-form-input">
                                <label>City :</label>
                                <input type="text" required className="input" name="city" 
                                    value={form.city} disabled  />
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="admin-form-input">
                                <label>Pincode :</label>
                                <input type="text" required className="input" name="pincode" 
                                    value={form.pincode} disabled  />
                                <span className="focus-input"></span>
                                <span className="symbol-input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

        )
    }

}

export default Admin_Customer_View;












