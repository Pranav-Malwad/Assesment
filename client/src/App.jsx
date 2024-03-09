import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Admin from "./components/AdminLogin/Admin";
import AddProduct from "./components/pages/AddProduct";
import Store from "./components/pages/Store";
import AdminDashboard from "./Utils/AdminDashboard";

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Routes>
        {user && <Route path="/" exact element={<Main></Main>} />}
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/"
          exact
          element={<Navigate replace to="/login"></Navigate>}
        ></Route>

        {user && <Route path="/about" exact element={<About></About>} />}
        <Route
          path="/about"
          exact
          element={<Navigate replace to="/login"></Navigate>}
        ></Route>
        {user && <Route path="/contact" exact element={<Contact></Contact>} />}
        <Route
          path="/contact"
          exact
          element={<Navigate replace to="/login"></Navigate>}
        ></Route>
        {user && <Route path="/store" exact element={<Store></Store>} />}
        <Route
          path="/store"
          exact
          element={<Navigate replace to="/login"></Navigate>}
        ></Route>

        <Route path="/adminlogin" element={<Admin></Admin>} />

        <Route path="/admin/addproduct" element={<AddProduct></AddProduct>} />
        <Route
          path="/admindashboard"
          element={<AdminDashboard></AdminDashboard>}
        />
      </Routes>
    </>
  );
}

export default App;
