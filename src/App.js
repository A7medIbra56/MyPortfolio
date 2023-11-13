import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import MySkill from "./Components/MySkill/MySkill";
import Contact from "./Components/Contact/Contact";
import Project from "./Components/Project/Project";
import NotFound from "./Components/NotFound/NotFound";
import ClipLoader from "react-spinners/ClipLoader";
import { useState, useEffect } from "react";
import MyPortfolio from "./Components/Home/Home";
import ButtonDarkMode from "./Components/ButtonDarkMode/ButtonDarkMode";

function App() {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="spinner-container">
          <ClipLoader color={"#FF5733"} loading={loading} size={100} />
        </div>
      ) : (
        <div className="container">
          <div className="res row">
            <div className="col-12 col-md-4 col-lg-4">
       
              <Footer />
            </div>
            
            <div className="col-12 col-md-8 col-lg-8">
              <div className="mt-1 d-flex justify-content-end align-items-end">
            <ButtonDarkMode/>
            </div>
              <Navbar> </Navbar>
              <div className="pt-1" >
                <Routes basename = 'Home' >
                  <Route path="" element={<MyPortfolio />} /> 
                  <Route path="/" element={<MyPortfolio />} />
                  <Route path="home" element={<MyPortfolio />} />
                  <Route path="about" element={<About />} />
                  <Route path="MYSkills" element={<MySkill />} />
                  <Route path="Contact" element={<Contact />} />
                  <Route path="Project" element={<Project />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
