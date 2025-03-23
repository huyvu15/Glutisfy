import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Home2 from "./components/home2";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import About from "./components/About";
import Benefits from "./components/Benefit";
import Mint from "./components/Mint";
import FAQs from "./components/Faq";
import Footer1 from "./components/Footer1";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home2 />} /> 
          {/* <Route path="/home" element={<LandingPage />} />  */}
        </Routes>
        <About />
        <Mint  />
        <Benefits />
        <FAQs />
        <Footer1 /> {/* Hiển thị Footer dưới cùng của trang */}
      </div>
    </Router>
  );
}

export default App;
