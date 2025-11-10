import { Link } from "react-router-dom";

function Echo005() {
  return (
    <div>
      <div className="gallery">
        {/* Back link */}
        <Link to="/gallery">
          <h1>BACK</h1>
        </Link>

        {/* Image grid */}
        <div className="images">
          <img src="/assets/ECHO_005_PHOTOS/DAW TAGABOW1.jpg" alt="" />
          <img src="/assets/ECHO_005_PHOTOS/DAW TAGABOW2.jpg" alt="" />
          <img src="/assets/ECHO_005_PHOTOS/DAW TAGABOW3.JPG" alt="" />
          <img src="/assets/ECHO_005_PHOTOS/DAW TAGABOW4.JPG" alt="" />
          <img src="/assets/ECHO_005_PHOTOS/DAW TAGABOW5.JPG" alt="" />
          <img src="/assets/ECHO_005_PHOTOS/DAW TAGABOW6.JPG" alt="" />
          <img src="/assets/ECHO_005_PHOTOS/DAW TAGABOW7.JPG" alt="" />
          <img src="/assets/ECHO_005_PHOTOS/DAW TAGABOW8.JPG" alt="" />
          <img src="/assets/ECHO_005_PHOTOS/DAW TAGABOW9.JPG" alt="" />
          <img src="/assets/ECHO_005_PHOTOS/DAW TAGABOW10.jpg" alt="" />
          <img src="/assets/ECHO_005_PHOTOS/DAW TAGABOW11.jpg" alt="" />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© DAW 2025</p>
      </footer>
    </div>
  );
}

export default Echo005;
