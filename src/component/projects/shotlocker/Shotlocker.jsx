import ProjectNavbar from "../../layout/ProjectNavbar";
import BackButton from "../../layout/BackButton";
import ScrollToTop from "../../layout/ScrollToTop";

const Shotlocker = () => {
  return (
    <>
      <ProjectNavbar></ProjectNavbar>
      <ScrollToTop></ScrollToTop>
      <div className="row justify-content-evenly main-project">
        <div className="col-10">
            <h2 className="project-header">Shotlocker : Golf Score Tracking System</h2>
            <p className="mt-4 project-description">Shotlocker is a mobile application designed to help golfers track their scores and performance during rounds of golf. Users can easily create a round, enter scores for individual holes, and monitor their progress over time. Users can register or log in using Google or Apple social login options for a smooth, secure onboarding process. The backend is built using Django REST Framework, with MySQL as the database for reliable storage and retrieval of user data and golf scores.</p>

            <h2 className="mt-4 project-header" >Technical Stack:</h2>
            <ul className="mt-4 project-points">
                <li>Django REST Framework (DRF) is used for the backend, enabling the development of RESTful APIs that handle user authentication, score entry, round creation, and data retrieval.</li>
                <li>Integration of Google and Apple social login for a seamless user experience during registration and login.</li>
                <li>MySQL is used as the database management system to store user information, golf rounds, scores, and subscription details.</li>
                <li>Users can purchase monthly or yearly subscriptions via secure payment gateways, with subscription details managed in the MySQL database.</li>
                <li>Payment Gateway : Stripe (handles secure subscription payments)</li>
                <li>Ubuntu Server : Hosting the application on a reliable and scalable Linux-based server.</li>
            </ul>
            
            <h2 className="mt-4 project-header" >Key Features:</h2>
            <ul className="mt-4 project-points">
                <li>Users can register or log in via Google or Apple accounts, providing a fast and secure authentication method.</li>
                <li>Users can create a new round by specifying details like the course name, date, and number of holes.</li>
                <li>For each hole in the round, users can enter their shots, keeping a hole-by-hole record of their performance. This allows users to track their scoring across different rounds and golf courses.</li>
            </ul>
        </div>
    </div>
    <BackButton></BackButton>
    <hr></hr>
      
    </>
  );
};

export default Shotlocker;
