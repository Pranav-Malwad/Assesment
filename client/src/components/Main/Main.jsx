import React from "react";
import Navbar from "../../Utils/Navbar";
import Carasoule from "../../Utils/Carasoule";
import Footer from "../../Utils/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Main.css";
const Main = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showMoreInfoPopup, setShowMoreInfoPopup] = useState(false);
  const [showBuyNowPopup, setShowBuyNowPopup] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    cardholderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleMoreInfo = (product) => {
    setSelectedProduct(product);
    setShowMoreInfoPopup(true);
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowBuyNowPopup(true);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
    setShowMoreInfoPopup(false);
    setShowBuyNowPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/store",
        cardInfo
      );
      console.log(response.data);
      alert("Order Placed Successfully");
    } catch (error) {
      console.error("Error:", error.response.data);
    }

    console.log("Submitted Card Info:", cardInfo);
    setCardInfo({
      cardholderName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    });
    setShowBuyNowPopup(false);
  };
  return (
    <div>
      <Navbar></Navbar>
      <Carasoule></Carasoule>
      <div className="store-container">
        <div>
          <h2 className="store-heading">Featured Products</h2>
          <div className="cards-container">
            {products.map((product) => (
              <div key={product._id}>
                <div className="card">
                  <div className="img-holder">
                    {product.imageUrl && (
                      <img
                        className="card-img"
                        src={product.imageUrl}
                        alt={product.name}
                      />
                    )}
                  </div>
                  <div>
                    <h3>{product.name}</h3>
                  </div>
                  <div className="card-button-container">
                    <button
                      className="more-info"
                      onClick={() => handleMoreInfo(product)}
                    >
                      More Info
                    </button>
                    <button
                      className="buy-now"
                      onClick={() => handleBuyNow(product)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showMoreInfoPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={handleClosePopup}>
              close
            </button>
            <img src={selectedProduct?.imageUrl} alt="img" />
            <h2>{selectedProduct?.name}</h2>
            <p>Description: {selectedProduct?.description}</p>
            <p>Price:RS {selectedProduct?.price}</p>
          </div>
        </div>
      )}
      {showBuyNowPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={handleClosePopup}>
              Close
            </button>
            <h2>{selectedProduct?.name}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="cardholderName">Cardholder Name:</label>
                <input
                  type="text"
                  id="cardholderName"
                  name="cardholderName"
                  value={cardInfo.cardholderName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number:</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={cardInfo.cardNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="expiry">Expiry:</label>
                <input
                  type="date"
                  id="expiry"
                  name="expiry"
                  value={cardInfo.expiry}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV:</label>
                <input
                  type="password"
                  id="cvv"
                  name="cvv"
                  value={cardInfo.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="buy-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Main;
