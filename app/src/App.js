import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import Header from "./components/navbarComponent/Header";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Register } from "./components/Register/Register";
import { Products } from "./components/Products/Products";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
    return (
        <>
            <Header />
            <Router>
                <Toaster />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
