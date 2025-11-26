import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2025</p>
      {/* <a href="/about">About us!</a> */}
      <Link to="/about" className="navlink">
        About
      </Link>
    </footer>
  );
};

export default Footer;
