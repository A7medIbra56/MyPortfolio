import React from "react";
import "./MySkill.css";

export default function MySkill() {
  return (
    <div className="mySkill">
      <ul className="skills-list group ">
        <li className="skill">
          <i  id="HTML" className="bx bxl-html5"></i>
          <p>HTML</p>
        </li>
        <li  className="skill">
          <i id="Css3" className="bx bxl-css3"></i>
          <p>Css3</p>
        </li>
        <li className="skill">
          <i id="Javascript" className="bx bxl-javascript"></i>
          <p>Javascript</p>
        </li>
        <li className="skill">
          <i id="typescript" className="bx bxl-typescript"></i>
          <p>Typescript</p>
        </li>
        <li className="skill">
          <i id="Sass" className="bx bxl-sass"></i>
          <p>Sass</p>
        </li>
        <li className="skill">
          <i id="React" className="bx bxl-react"></i>
          <p>React.Js</p>
        </li>
        <li className="skill">
          <i id="Bootstrap" className="bx bxl-bootstrap"></i>
          <p>Bootstrap</p>
        </li>
        <li className="skill">
          <i id="Tailwind" className="bx bxl-tailwind-css"></i>
          <p>Tailwind-css</p>
        </li>
        <li className="skill">
          <i id="Redux" className="bx bxl-redux"></i>
          <p>Redux</p>
        </li>
        <li className="skill">
          <i id="Git" className="bx bxl-git"></i>
          <p>Git</p>
        </li>
        <li className="skill">
          <i id="Github" className="bx bxl-github"></i>
          <p>Github</p>
        </li>
      </ul>
      <div className='madeHome  mx-auto mt-3 pb-4'>
               <a href="mailto:ahmedibrhiam512@gmail.com"><ion-icon className='me-2' name="logo-google"> </ion-icon></a>
                <a href="https://wa.me/01158031289"><ion-icon name="logo-whatsapp"></ion-icon></a>
                <a href="http://linkedin.com/in/ahmed-ibrahim-18ab26220"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="http://github.com/A7medIbra56"><ion-icon name="logo-github"></ion-icon></a>  
              </div>
    </div>
  );
}
