import ProjectNavbar from "../../layout/ProjectNavbar";
import BackButton from "../../layout/BackButton";
import ScrollToTop from "../../layout/ScrollToTop";

const Leasing = () => {
  return (
    <>
      <ProjectNavbar></ProjectNavbar>
      <ScrollToTop></ScrollToTop>
      <div className="row justify-content-evenly main-project">
          <div className="col-10">
          <h2 className="project-header">
            Leasing Scraper : Car Leasing Price Tracking Web App
          </h2>
          <p className="mt-4 project-description">
            The Leasing Scraper is a powerful web application developed for a
            client to monitor car leasing prices, both for their own fleet and
            for their competitors. The app scrapes detailed data from
            leasing.com on a daily basis, ensuring up-to-date pricing
            information is available at all times. Users can create watchlists
            of specific cars, track their price movements, and compare these
            cars using graphical visualizations. Additionally, the platform
            allows users to filter and compare cars based on leasing terms,
            companies, derivatives, and other criteria. The app sends daily
            summary emails and offers an intuitive dashboard for detailed
            analysis. The backend is built using Django REST Framework, data is
            scraped using Scrapy, and PostgreSQL is used for data storage, with
            Celery scheduling the scraper and handling email notifications.
          </p>

          <h2 className="mt-4 project-header">Technical Stack:</h2>
          <ul className="mt-4 project-points">
            <li>
              Backend : Django REST Framework (API endpoints, user
              authentication).
            </li>
            <li>
              Scrapy : Handles daily scraping of car leasing data from
              leasing.com, ensuring up-to-date pricing and market trends.
            </li>
            <li>
              PostgreSQL : Stores all car data, user information, watchlists,
              and historical price data in a structured, relational database.
            </li>
            <li>
              Scraping & Scheduling : Celery (automated daily scraping of
              LinkedIn posts based on user-defined triggers).
            </li>
            <li>
              Celery : Used to schedule the scraping tasks and send daily
              summary emails to users after the scraping process is complete.
            </li>
            <li>
              SMTP (Simple Mail Transfer Protocol) : Used for sending the daily
              summary emails to users, informing them of updates in car leasing
              data.
            </li>
            <li>
              Ubuntu Server : Hosting the application on a reliable and scalable
              Linux-based server.
            </li>
          </ul>

          <h2 className="mt-4 project-header">Key Features:</h2>
          <ul className="mt-4 project-points">
            <li>
              After the scraping process is completed, the system sends a daily
              summary email to the users, providing an overview of price
              changes, new cars added to the market, and other relevant updates.
              This helps the client stay informed without having to log in to
              the app every day.
            </li>
            <li>
              The web app allows users to filter cars based on specific criteria
              such as leasing term, company, derivatives, and more.
            </li>
            <li>
              This feature enables in-depth comparison of car listings, helping
              users analyze their fleet against competitors’ offerings based on
              a range of attributes.
            </li>
            <li>
              Users can create custom watchlists where they can add specific
              cars they want to monitor. This allows users to track the prices
              of chosen vehicles over time.
            </li>
            <li>
              Watchlists can be organized by different criteria such as car
              models, companies, and leasing terms, giving users flexibility in
              managing their focus cars.
            </li>
          </ul>
        </div>
      </div>
      <BackButton></BackButton>
      <hr></hr>
    </>
  );
};

export default Leasing;
