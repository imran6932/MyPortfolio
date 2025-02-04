import ProjectNavbar from "../../layout/ProjectNavbar";
import BackButton from "../../layout/BackButton";
import ScrollToTop from "../../layout/ScrollToTop";

const Nhai = () => {
  return (
    <>
      <ProjectNavbar></ProjectNavbar>
      <ScrollToTop></ScrollToTop>
      <div className="row justify-content-evenly main-project" >
        <div className="col-10">
            <h2 className="project-header">NHAI : Project Tracking Web App</h2>
            <p className="mt-4 project-description">The NHAI web app is designed to track and manage road projects across Maharashtra, providing role-based dashboards for key stakeholders like CALA, district collectors, commissioners, and principals. Each user role has access to relevant project data, with automated monthly progress reports and daily deadline reminders sent via email. The backend is built with Django REST Framework, using MySQL for data storage, and deployed on an Ubuntu server. Celery is used to schedule background tasks like report generation and email notifications.</p>
            <h2 className="mt-4 project-header" >Technical Stack:</h2>
            <ul className="mt-4 project-points">
                <li>Django REST Framework : For building a robust, scalable API to manage user authentication, project data, and reports.</li>
                <li>MySQL : A relational database used to store project details, user information, roles, and reports.</li>
                <li>Celery : Used for scheduling and running background tasks like automated report generation and deadline reminders.</li>
                <li>Scraping & Scheduling : Celery (automated daily scraping of LinkedIn posts based on user-defined triggers)</li>
                <li>Ubuntu Server : Hosting the application on a reliable and scalable Linux-based server.</li>
                <li>JWT (JSON Web Tokens) : For secure user authentication and role-based access control.</li>
                <li>SMTP : For sending automated emails (progress reports, deadline reminders) to users.</li>
            </ul>
            <h2 className="mt-4 project-header" >Key Features:</h2>
            <ul className="mt-4 project-points">
                <li>Role-Based Dashboards : Customized access for CALA, district collectors, commissioners, and principals.</li>
                <li>Project Tracking : Real-time monitoring of project progress, financials, and milestones.</li>
                <li>Monthly Reports : Automated report generation and email distribution to stakeholders.</li>
                <li>Deadline Reminders : Daily email reminders for CALAs about upcoming project deadlines.</li>
                <li>Email Notifications : Daily summaries of triggered posts sent via email.</li>
            </ul>
        </div>
    </div>
    <BackButton></BackButton>
    <hr></hr>
      
    </>
  );
};

export default Nhai;
