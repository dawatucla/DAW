import { Link } from "react-router-dom";

function Echo006() {
  return (
    <div>
      <div className="gallery">
        {/* Back link */}
        <Link to="/gallery">
          <h1>BACK</h1>
        </Link>

        {/* Image grid */}
        <div className="images">
          <img src="/assets/ECHO_006_PHOTOS/Lolina live.jpg" alt="" />
          <img src="/assets/ECHO_006_PHOTOS/Lolina fixed.jpg" alt="" />
          <img src="/assets/ECHO_006_PHOTOS/lolina 3.jpg" alt="" />
          <img src="/assets/ECHO_006_PHOTOS/Above venue.jpg" alt="" />
          <img src="/assets/ECHO_006_PHOTOS/Law 2.jpg" alt="" />
          <img src="/assets/ECHO_006_PHOTOS/Law 1.jpg" alt="" />
          <img src="/assets/ECHO_006_PHOTOS/Iris.jpg" alt="" />
          <img src="/assets/ECHO_006_PHOTOS/Iris live.jpg" alt="" />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© DAW 2025</p>
      </footer>
    </div>
  );
}

export default Echo006;
