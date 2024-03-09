require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const Product = require("./models/product");
const Contact = require("./models/contact");
const Purchase = require("./models/purchase");
const { User } = require("./models/user");
const { connectDB } = require("./connection");

// middlewares
app.use(express.json());
app.use(cors());

// product display on home page

app.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// admin add product
app.post("/admin/addproduct", async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;

    if (!name || !description || !price || !imageUrl) {
      return res.status(400).json({
        error: "Please provide name, description, and price for the product.",
      });
    }

    const product = new Product({
      name,
      description,
      price,
      imageUrl,
    });

    await product.save();

    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// display all the products on store page

app.get("/store", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// purchase created

app.post("/store", async (req, res) => {
  try {
    const { cardholderName, cardNumber, expiry, cvv } = req.body;

    const newPurchase = new Purchase({
      cardholderName,
      cardNumber,
      expiry,
      cvv,
    });

    await newPurchase.save();

    res
      .status(201)
      .json({ success: true, message: "Purchase data saved successfully" });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to save purchase data",
      error: error.message,
    });
  }
});

// contact route

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({
      name,
      email,
      message,
    });
    await newContact.save();
    res.status(201).json({ message: "Contact us data saved successfully" });
  } catch (error) {
    console.error("Error saving contact us data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// admin login

const jwt = require("jsonwebtoken");
const secretKey = "secretkey123";

const adminCredentials = {
  username: "admin",
  password: "admin123",
};

app.post("/adminlogin", (req, res) => {
  const { username, password } = req.body;

  if (
    username === adminCredentials.username &&
    password === adminCredentials.password
  ) {
    const token = jwt.sign({ username: username }, secretKey, {
      expiresIn: "1h",
    });
    res.json({ token: token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.admin = decoded;
    next();
  });
};

// log out for admin
app.post("/admindashboard", verifyToken, (req, res) => {
  res.json({ message: "Logout successful" });
});

// middlewares route
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;

// db connection
connectDB("mongodb://127.0.0.1:27017/user-auth");

app.listen(port, () => {
  console.log(`app is listening on the port ${port}`);
});
