import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">YEONYLOG</div>
        <div className="links">
          <Link className="link" to="/?cat=development">
            <h6>DEVELOPMENT</h6>
          </Link>
          <Link className="link" to="/?cat=health">
            <h6>HEALTH</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <Link className="link" to="/?cat=culture">
            <h6>CULTURE</h6>
          </Link>
          <Link className="link" to="/?cat=animal">
            <h6>ANIMAL</h6>
          </Link>

          <span>Yeon</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
