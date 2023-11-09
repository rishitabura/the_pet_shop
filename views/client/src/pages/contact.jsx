import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactHeader from "../components/ContactHeader/ContactHeader";
import Navbar from "../components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
