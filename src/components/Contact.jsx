import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      Contact page
      <Link to="/">Home</Link>
      <div className="form">
        <form>
          <div className="field">
            <label name="name">Username</label>
            <input type="text"></input>
          </div>

          <div className="field">
            <label name="email">Email</label>
            <input type="email"></input>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
