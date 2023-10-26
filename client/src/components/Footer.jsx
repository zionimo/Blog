import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="logo">YEONYLOG</div>
      <div className="links">
        <Link className="link">github</Link>
        <Link className="link">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;
