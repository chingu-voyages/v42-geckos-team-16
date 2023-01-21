import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from './components/Login/Login';
import Header from "./components/navbarComponent/Header";
import { Products } from './components/Products/Products';

function App() {
    return (
        <>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </Router>
        </>

    );
}

export default App;
