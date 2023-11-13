import React, { useState } from "react";
import "./Footer.css";
import porfile from'../photoprofile/ahmed2.png'

export default function Footer() {
  let [show, setShow] = useState(null);
  let [btn1, setBtn1] = useState(null);
  let [btn2, setBtn2] = useState("d-none");

  function WorkBtn1() {
    setShow("d-block");
    setBtn1("d-none");
    setBtn2("d-block");
  }
  function WorkBtn2() {
    setShow("d-none");
    setBtn1("d-block");
    setBtn2("d-none");
  }

  return (
    <div className="container footer">
      <div className="col-md-12 main ">
        <header>
        <div className="mt-5 d-flex justify-content-center align-items-center">
         <img className="w-50  p-2 ps-2 rounded-5" src={porfile} alt="ahmed"/>
         <h2>AHMED IBRAHIM</h2>
         </div>
      
        </header>
      </div>
      {/*btn Show*/}
      <div className={`down text-center mt-3 ${btn1}`}>
        <a
          href="#aboutme"
          onClick={() => {
            WorkBtn1();
          }}
        >
          <i className="fa fa-angle-double-down"></i>
          <br />
          Show Detials
        </a>
      </div>
      {/*btn hide*/}
      <div className={`down text-center mt-3 ${btn2}`}>
        <a
          href="#aboutme"
          onClick={() => {
            WorkBtn2();
          }}
        >
          <i className={`fa fa-angle-double-up`}></i>
          <br />
          Hide Detials
        </a>
      </div>
      <div id="#aboutme" className={`ShowHide ${show}`}>
        <div className="front">
          <h3>FRONT END DEVELOPER</h3>
        </div>
        <div  className={`smallScr `}>
        
          <div className="made">
            <div className="madeItem d-flex">
              <div>
              <i className="fa-solid fa-location-dot"></i>              </div>
              <div>
                <a href="tel:#">
                  <h6 className="p-2">Cairo, Egypt</h6>
                </a>
              </div>
            </div>
          </div>
          <div className="made">
            <div className="madeItem d-flex">
              <div>
              <i className="fa-brands fa-google"></i>
              </div>
              <div>
                <a href="mailto:ahmedibrhiam512@gmail.com">
                  <h6 className="p-2">ahmedibrhiam512@gmail.com</h6>
                </a>
              </div>
            </div>
          </div>
          <div className="made">
            <div className="madeItem d-flex">
              <div>
              <i className="fa-brands fa-linkedin"></i>
              </div>
              <div>
                <a href="linkedin.com/in/ahmed-ibrahim-🇵🇸-18ab26220">
                  <h6 className="p-2">Ahmed Ibrahim</h6>
                </a>
              </div>
            </div>
          </div>
          <div className="made">
            <div className="madeItem d-flex">
              <div>
              <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div>
                <a href="tel:01158031289">
                  <h6 className="p-2">+201158031289</h6>
                </a>
              </div>
            </div>
          </div>
          <div className="madeSO mx-auto g-2">
            <a href="mailto:ahmedibrhiam512@gmail.com">
            <i className="fa-brands fa-google"></i>
            </a>
            <a href="https://wa.me/01158031289">
            <i className="fa-brands fa-whatsapp"></i>
                        </a>
            <a href="http://linkedin.com/in/ahmed-ibrahim-18ab26220">
            <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="http://github.com/A7medIbra56">
            <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
