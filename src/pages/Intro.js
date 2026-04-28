import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar"
import dawLogo from "../assets/dawlogotransparent.png";

function Intro() {
  return (
    <div>
      <Navbar />
      <div className="sub-body">
        <div className="logo-container">
          <Link to="/home">
            <img
              src={dawLogo}
              alt="DAW Logo"
            />
          </Link>
        </div>
              <footer>
          <p>© DAW 2025</p>
        </footer>
      </div>
      </div>
  );
}

export default Intro;
