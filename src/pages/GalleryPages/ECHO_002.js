import { Link } from "react-router-dom";

function Echo002() {
  return (
    <div>
      <div className="gallery">
        {/* Back link */}
        <Link to="/gallery">
          <h1>BACK</h1>
        </Link>

        {/* Image grid */}
        <div className="images">
          <img src="/assets/ECHO_002_PHOTOS/RenderedImage-2.jpg" alt="" />
          <img src="/assets/ECHO_002_PHOTOS/P1010151.png" alt="" />
          <img src="/assets/ECHO_002_PHOTOS/P1010146.jpeg" alt="" />
          <img src="/assets/ECHO_002_PHOTOS/P1010145.jpeg" alt="" />
          <img src="/assets/ECHO_002_PHOTOS/P1010131.jpeg" alt="" />
          <img src="/assets/ECHO_002_PHOTOS/IMG_9284.jpg" alt="" />
          <img src="/assets/ECHO_002_PHOTOS/IMG_7843.jpg" alt="" />
          <img src="/assets/ECHO_002_PHOTOS/IMG_0273.jpeg" alt="" />
          <img src="/assets/ECHO_002_PHOTOS/FE895EDD-2E73-42F1-A44E-6B5742A5AA2E.jpeg" alt="" />
          <img src="/assets/ECHO_002_PHOTOS/82840E39-F8E2-48D9-A7D6-6E0384D233B7.jpeg" alt="" />
          <img src="/assets/ECHO_002_PHOTOS/61DD261E-180E-4062-8CB6-9275B8FD2758_1_102_o.jpeg" alt="" />
          <img src="/assets/ECHO_002_PHOTOS/0AF90392-5BE3-4CAE-A3AB-908E01FBD88E.jpeg" alt="" />
          <img src="/assets/ECHO_002_PHOTOS/06BCB3BE-F9C4-4BE8-A3D4-24CA620F0ECE.jpeg" alt="" />
          <img src="/assets/ECHO_002_PHOTOS/05F410A2-3144-425D-9C05-A80D03A0D110.jpeg" alt="" />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© DAW 2025</p>
      </footer>
    </div>
  );
}

export default Echo002;

