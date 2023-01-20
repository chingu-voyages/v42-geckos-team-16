import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import Header from "./components/navbarComponent/Header";

function App() {
    return (
        <>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
