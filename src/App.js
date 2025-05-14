import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Achievement from "./components/Achievement/Achievement";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/my-portfolio/" element={<Home />} />
        <Route exact path="/my-portfolio/about" element={<About />} />
        <Route exact path="/my-portfolio/work" element={<Portfolio />} />
        <Route exact path="/my-portfolio/achievement" element={<Achievement />} />
        <Route exact path="/my-portfolio/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
