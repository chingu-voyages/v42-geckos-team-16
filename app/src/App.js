import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import Header from "./components/navbarComponent/Header";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Register } from "./components/Register/Register";
import { Products } from "./components/Products/Products";
import { NotFound } from "./components/NotFound/NotFound";
import { Cart } from "./components/Cart/Cart";
import Admin from "./components/Admin/Admin";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import TestHome from "./components/Home/TestHome/TestHome";
import Home from "./components/Home/Home";
import AddProductPage from "./components/AddProductPage/AddProductPage";
function App() {
  return (
    <>
      <Header />

      <Router>
        <Toaster />
        <Routes basename="/v42-geckos-team-16">
          <Route path="/" element={<TestHome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/order" element={<Cart />} />
          <Route path="/add_products" element={<AddProductPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
