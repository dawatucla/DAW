import { Link } from "react-router-dom";

function Intro() {
  return (
    <div>
            <div class="navbar">
        <a href="../home/">HOME</a>
        <a href="../connect/">CONNECT</a>
        <a href="../events/">EVENTS</a>
        <a href="../gallery/">GALLERY</a>
        <a href="../blog/">BLOG</a>
    </div>
    <div className="sub-body">
      <div className="logo-container">
        <Link to="/home">
          <img
            src="/assets/dawlogotransparent.png"
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
