import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ContactForm = () => {
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
  navigate(redirectTo ? redirectTo : "/");
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
              alert("Successful. We will contact you soon");
              redirectNow();
          }
      });

};

 
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
         
          <Button disabled text="VIA CALL +919898767654" icon={<FaPhoneAlt fontSize="24px" />} />
          <Button
          isOutline={true}
          text="VIA EMAIL support@petbazaar.com"
          icon={<HiMail fontSize="24px" />}
        />
        </div>
        

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input required type="text" name="name" value={form.name} onChange={onFormInputChange}/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Your Email</label>
            <input required type="email" name="email" value={form.email} onChange={onFormInputChange}/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
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

          <div>{name + " "  + email + " . "  + text}</div>
        </form>
      </div>
      {/* <div className={styles.contact_image}>
        <img src={contact} alt="contact image" />
      </div> */}
    </section>
  );
};

export default ContactForm;
