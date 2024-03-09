import React, { useState } from "react";
import axios from "axios";
import "./Admin.css";
const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/adminlogin",
        formData
      );
      localStorage.setItem("adminToken", response.data.token);

      window.location.href = "/admindashboard";
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Invalid credentials");
    }
  };

  return (
    <div className="admin-container">
      <div className="wrapper">
        <div>
          <h2 className="admin-heading">Admin Login</h2>
        </div>

        <div>
          <form className="admin-login-form" onSubmit={handleSubmit}>
            <input
              placeholder="Enter User name:"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <input
              placeholder="Enter Password"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div>
              <button className="admin-login" type="submit">
                Admin
              </button>
              {error && <div className="error">{error}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
