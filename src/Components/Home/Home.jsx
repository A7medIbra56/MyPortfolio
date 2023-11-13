import "./Home.css";

export default function MyPortfolio() {
  return (
    <div>
      <div className=" home container-fluid">
        <div className="">
          <div className="col-md-12">
            <div className="mx-auto p-5">
              <h2 className="pt-3">welcome,</h2>
              <h2 className="pt-1">I'm Ahmed Ibrahim</h2>
              <h4 className="pt-5">
                I'm a front end Developer who design and develope responsive
                websites. My expertise is to Create and design websites
              </h4>
              <div className="cv">
                <a
                  href="https://drive.google.com/file/d/1SqemhF5-_oDjep5YnGADVvWtcKeRFnSo/view?usp=drive_link"
                  download="Ahmed Ibrahim-cv.pdf"
                >
                  <button className="download-button">
                    Download CV<i className="fa-solid fa-turn-down ms-2"></i>
                  </button>
                </a>
              </div>

              <div className="line-4">
                <hr />
              </div>
            
            </div>
          </div>
          <div className="col-md-12 pb-5">
          <div className="madeHome  mx-auto">
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
    </div>
  );
}
