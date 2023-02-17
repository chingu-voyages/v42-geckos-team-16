import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import Header from "./components/navbarComponent/Header";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Register } from "./components/Register/Register";
import { Products } from "./components/Products/Products";
import { NotFound } from "./components/NotFound/NotFound";
import { Cart } from "./components/Cart/Cart";

import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import TestHome from "./components/Home/TestHome/TestHome";

import AddProductPage from "./components/AddProductPage/AddProductPage";

function App() {
  return (
    <>
      <Header />

      <Toaster />
      <Routes>
        <Route path="/home" element={<TestHome />} />
        <Route path="/" element={<TestHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/order" element={<Cart />} />
        <Route path="/add_products" element={<AddProductPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
