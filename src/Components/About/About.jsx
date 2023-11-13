import "./About.css";

export default function About() {
  return (
    <div className="resume">
      <div className="resume_item resume_about">
        <div className="title">
          <p className="bold">About us</p>
        </div>
        <p>
          I am a professional front-end developer, specializing in designing and
          developing attractive and responsive web user interfaces. I have
          extensive experience in transforming web designs into user interface
          pages and excellent user experiences. I work professionally with
          modern web technologies such as HTML5, CSS3, JavaScript, and
          frameworks like React.
        </p>
        <p>
          I have strong skills in SEO optimization and performance tuning to
          achieve the best results in search engines. I also focus on
          understanding clients' needs and project requirements, ensuring their
          accurate and efficient implementation.
        </p>
        <p>
          Thanks to my skills and experience, I work as part of a development
          team or can work independently on various projects. If you need a
          professional front-end developer to enhance your web presence or
          develop a new project, I am here to help you achieve your online
          goals.
        </p>
      </div>
      <div className="resume_item resume_education">
        <div className="title d-flex">
          <i className="fa-solid fa-graduation-cap"></i> <h4>Education</h4>
        </div>
        <ul>
          <div className="educ">
            <div className="date">2019 - 2023</div>
            <div className="info">
              <p className="semi-bold">
                Bachelor’s Degree in Computer Science{" "}
              </p>
              <p>
                Faculty of Computers and Information Systems <br /> Modern
                Academy in Maadi University <br />
                Major: Computer Science Minor: Information Systems <br />
                GPA: Good <br />
                Graduation project: Excellent{" "}
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
