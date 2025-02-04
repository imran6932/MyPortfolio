import { NavLink } from "react-router-dom";

const BackButton = () => {
  return (
    <>
      <div className="text-center back-button">
        <NavLink to="/#project-content">
          <button>Back</button>
        </NavLink>
      </div>
    </>
  );
};

export default BackButton;
