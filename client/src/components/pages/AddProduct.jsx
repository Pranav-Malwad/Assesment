import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";
import AdminDashboard from "../../Utils/AdminDashboard";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/admin/addproduct",
        formData
      );
      alert("Product Added Successfully!");
      console.log("Product added:", response.data);
      // Clear form after successful submission
      setFormData({
        name: "",
        description: "",
        price: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <AdminDashboard></AdminDashboard>
      <div className="main-container">
        <div className="container">
          <div className="form-container">
            <h2 className="heading">Add Product</h2>
            <form onSubmit={handleSubmit} className="form">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter Product Name"
                />
              </div>
              <div>
                <textarea
                  className="description-box"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Enter Product description"
                />
              </div>
              <div>
                <input
                  placeholder="Enter Price "
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  placeholder="Enter Product url"
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="btn-container">
                <button type="submit">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
