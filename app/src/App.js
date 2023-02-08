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
import TestHome from "./components/Home/TestHome/TestHome";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Toaster />
                <Routes>
                    <Route path="/" element={<TestHome />} />
                    <Route path="/home" element={<TestHome />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/order" element={<Cart />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
