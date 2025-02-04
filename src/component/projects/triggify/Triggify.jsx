import ProjectNavbar from "../../layout/ProjectNavbar";
import BackButton from "../../layout/BackButton";
import ScrollToTop from "../../layout/ScrollToTop";

const Triggify = () => {
  return (
    <>
      <ProjectNavbar></ProjectNavbar>
      <ScrollToTop></ScrollToTop>
      <div className="row justify-content-evenly main-project" >
        <div className="col-10">
            <h2 className="project-header">Triggify : LinkedIn Automation Tool</h2>
            <p className="mt-4 project-description">Triggify is a LinkedIn automation tool that streamlines post monitoring and engagement. Users can register, subscribe, and set customizable triggers to automatically receive relevant LinkedIn posts on their personalized dashboard. The platform also provides daily updates and email notifications to keep users informed and engaged.</p>

            <h2 className="mt-4 project-header" >Technical Stack:</h2>
            <ul className="mt-4 project-points">
                <li>Backend : Django REST Framework (API endpoints, user authentication, subscription management)</li>
                <li>Authentication : Google Login (easy and secure user sign-in)</li>
                <li>Database : PostgreSQL (stores user data, triggers, posts, and interactions)</li>
                <li>Scraping & Scheduling : Celery (automated daily scraping of LinkedIn posts based on user-defined triggers)</li>
                <li>Payment Gateway : Stripe (handles secure subscription payments)</li>
                <li>Deployment : AWS EC2 (scalable, high-availability infrastructure)</li>
            </ul>
            
            <h2 className="mt-4 project-header" >Key Features:</h2>
            <ul className="mt-4 project-points">
                <li>User Registration & Subscription : Sign up and subscribe to access automation features</li>
                <li>Trigger-Based Automation : Define triggers (keywords, hashtags, profiles) to display relevant posts on the dashboard.</li>
                <li>Post Interaction : Automatically like posts from the dashboard without visiting LinkedIn.</li>
                <li>Daily Updates : Dashboard refreshed daily with new content based on triggers.</li>
                <li>Email Notifications: Daily summaries of triggered posts sent via email.</li>
            </ul>
        </div>
    </div>
    <BackButton></BackButton>
    <hr className="margin-bottom"></hr>
      
    </>
  );
};

export default Triggify;
