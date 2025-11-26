import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h4>Version 1.0.0</h4>
      {/* <a href="/">Go Back</a> */}
      <Link to="/" className="navlink">
        Go Back!
      </Link>
    </div>
  );
};

export default About;
