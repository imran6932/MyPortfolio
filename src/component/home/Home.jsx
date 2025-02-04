import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar";
// import ScrollToTop from "../layout/ScrollToTop";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      {/* <ScrollToTop></ScrollToTop> */}
      <div className="container-fluid home-container pb-4">
        <div className="row justify-content-evenly" id="home-content">
          <div className="col-sm-5" id="homecol1">
            <h1>
              Imran Ansari <br />
              Python Backend Developer
            </h1>
            <br />
            <p>
              Pythone backend Developer with 3 years of experience building
              scalable web application. Proficient in Django, database
              management, and cloud services. Recently expanding into full-stack
              development with React. Passionate about delivering
              high-performance, user-focused solutions.
            </p>
            <br />
            <div id="home-btn">
              <a
                href="/Imran_Ansari_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="col-sm-5 text-center mt-3 pt-3" id="skillcol1">
            <div className="text-center mt-5" id="img-circle">
              <img
                src="/Images/imran.jpg"
                id="profile-img"
                className="img-fluid"
                alt="profile pic"
              />
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="experience-container" id="experience-content">
        <div className="row justify-content-evenly">
          <div className="col-sm-5" id="experience-details">
            <h1 className="mt-4" id="heading">
              Experience
            </h1>
            <br />
            <h2 id="django">Django Developer</h2>
            <p>Relu Consultancy | October 2021-Present</p>

            <h2>Responsibility</h2>
            <ul className="mt-4">
              <li>
                Developed and maintaining Dynamic web application using Django.
              </li>
              <li>
                Managed database (MySQL, PostgreSQL), including schema design
                and performance optimization.
              </li>
              <li>
                Deployed and managed application on AWS, Linux, and Windows
                server environment
              </li>
              <li>
                Troubleshot application and server-side issues, ensuring high
                availability and smooth operations.
              </li>
              <li>Set up and optimized cloud services and infrastructure.</li>
            </ul>
          </div>

          <div className="col-sm-5 mt-4">
            <div className="text-center mt-5" id="img-circle"></div>
          </div>
        </div>
      </div>
      <hr />

      <div className="skill-container mb-5" id="skills-container">
        <h1 className="mt-2 text-center mt-2" id="heading">
          Skills
        </h1>
        <div className="row justify-content-evenly">
          <div className="col-sm-3 mt-4 skill-logo">
            <img src="/Images/python.png" alt="logo" />
          </div>
          <div className="col-sm-3 mt-4 skill-logo">
            <img src="/Images/django.png" alt="logo" />
          </div>
          <div className="col-sm-3 mt-4 skill-logo">
            <img src="/Images/drf.png" alt="logo" />
          </div>
          <div className="col-sm-3 mt-4 skill-logo">
            <img src="/Images/aws.png" alt="logo" />
          </div>

          <div className="col-sm-3 mt-4 skill-logo">
            <img src="/Images/docker.png" alt="logo" />
          </div>
          <div className="col-sm-3 mt-4 skill-logo">
            <img src="/Images/git.png" alt="logo" />
          </div>
        </div>
        {/* <br />
        <br /> */}
        <div className="row justify-content-evenly">
          <div className="col-sm-3 mt-4 skill-logo">
            <img src="/Images/html.png" alt="logo" />
          </div>
          <div className="col-sm-3 mt-4 skill-logo">
            <img src="/Images/css.png" alt="logo" />
          </div>
          <div className="col-sm-3 mt-4 skill-logo">
            <img src="/Images/Js.png" alt="logo" />
          </div>
          <div className="col-sm-3 mt-4 skill-logo">
            <img src="/Images/pgsql.png" alt="logo" />
          </div>
          <div className="col-sm-3 mt-4 skill-logo">
            <img src="/Images/postman.png" alt="logo" />
          </div>
          <div className="col-sm-3 mt-4 skill-logo">
            <img src="/Images/stripe.png" alt="logo" />
          </div>
        </div>
      </div>
      <hr />

      <div className="container-fluid pb-5" id="project-content">
        <h1 className="text-center mt-3 text-white">Projects</h1>
       
          <div className="row project-container">
            <div className="projectbox mt-5">
              <Link to="/triggify">
                <h4>Triggify</h4>
                <p>
                  Triggify is a LinkedIn automation tool that streamlines post
                  monitoring and engagement. Users can register, subscribe, and
                  set customizable triggers to automatically receive relevant
                  LinkedIn posts on their personalized dashboard.
                </p>
              </Link>
            </div>

            <div className="projectbox mt-5">
              <Link to="/nhai">
                <h4>NHAI Dashboard</h4>
                <p>
                  The NHAI web app is designed to track and manage road projects
                  across Maharashtra, providing role-based dashboards for key
                  stakeholders like CALA, district collectors, commissioners,
                  and principals.
                </p>
              </Link>
            </div>

            <div className="projectbox mt-5 imran2">
              <Link to="/shotlocker">
                <h4>Shotlocker</h4>
                <p>
                  Shotlocker is a mobile application designed to help golfers
                  track their scores and performance during rounds of golf.
                  Users can easily create a round, enter scores for individual
                  holes, and monitor their progress over time.
                </p>
              </Link>
            </div>

            <div className="projectbox mt-5 imran2">
              <Link to="/leasing-scraper">
                <h4>Leasing Scraper</h4>
                <p>
                  The Leasing Scraper is a powerful web application developed
                  for a client to monitor car leasing prices, both for their own
                  fleet and for their competitors. The app scrapes detailed data
                  from leasing.com
                </p>
              </Link>
            </div>
          </div>
       
      </div>
      <hr />
    </>
  );
}

export default Home;
