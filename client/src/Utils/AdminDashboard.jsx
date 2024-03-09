import React from "react";
import axios from "axios";
import "./AdminDashboard.css";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8080/admindashboard", null, {
        headers: {
          Authorization: localStorage.getItem("adminToken"),
        },
      });
      localStorage.removeItem("adminToken");

      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <h2 className="admin-dashboard">Welcome to the Admin Dashboard</h2>

      <div className="admin-nav">
        <nav>
          <ul>
            <li>
              <Link to="/admin/addproduct" style={{ textDecoration: "none" }}>
                add product
              </Link>
            </li>
            <li>Update Product</li>
            <li>Delete Product</li>
            <li>
              <button className="admin-logout" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminDashboard;
