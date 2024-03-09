import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../Utils/Navbar";
import Footer from "../../Utils/Footer";
import "./Contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccessMessage(null);

    try {
      await axios.post("http://localhost:8080/contact", formData);
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="contact-us">
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit} className="contact-form ">
            <div className="input-field">
              <input
                type="text"
                placeholder="Enter Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                placeholder="Enter email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                placeholder="Enter query"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></input>
            </div>
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            {error && <div className="error">{error}</div>}
            {successMessage && <div className="success">{successMessage}</div>}
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
