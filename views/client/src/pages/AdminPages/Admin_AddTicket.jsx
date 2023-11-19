import Button from "../../components/Button/Button";
import styles from "../../components/ContactForm/Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";

const Admin_AddTicket = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("TYCSA GROUP 18 : ");
  const [email, setEmail] = useState("edisemester5@gmail.com");
  const [text, setText] = useState("Reach out to us");

  const [form, setForm] = useState({
    name: "",
    email: "",
    text: "",
    //paymentmethods
    //giftcards
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
  var name = form.name;
  var email = form.email;
  var text = form.text;
  fetch("http://localhost:5000/admin/customersupport/add", {
      method: "POST",
      CrossDomain: true,
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify({
          email,
          name,
          text
      }),

  })
      .then((res) => res.json())
      .then((data) => {
          //console.log(data, "Profile");
          if (data.success == true) {
              alert("Successful");
              redirectNow();
          }
      });

};

 
  return (
    <div>
    <AdminNavbar />
    <div className="adminpages">
    <section className={styles.container}>
      <div className={styles.contact_form}>
      <h1>Customer Support Add Ticket</h1>
      <h3>Please fill out this form if a customer reached out via call or email</h3>

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Customer Name</label>
            <input required type="text" name="name" value={form.name} onChange={onFormInputChange}/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Customer Email</label>
            <input required type="email" name="email" value={form.email} onChange={onFormInputChange}/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Customer Query</label>
            <textarea required name="text" rows="8" value={form.text} onChange={onFormInputChange}/>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>

          
        </form>
      </div>
      {/* <div className={styles.contact_image}>
        <img src={contact} alt="contact image" />
      </div> */}
    </section>
    </div></div>
  );
};

export default Admin_AddTicket;
