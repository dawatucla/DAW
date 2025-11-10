import { Link } from "react-router-dom";

function Ritual002() {
  return (
    <div>
      <div className="gallery">
        {/* Back button */}
        <Link to="/gallery">
          <h1>BACK</h1>
        </Link>

        {/* Image grid */}
        <div className="images">
          <img src="/assets/RITUAL_002_PHOTOS/IMG_1142-2.jpeg" alt="" />
          <img src="/assets/RITUAL_002_PHOTOS/IMG_1071-2.jpeg" alt="" />
          <img src="/assets/RITUAL_002_PHOTOS/IMG_1064-2-2.jpg" alt="" />
          <img src="/assets/RITUAL_002_PHOTOS/IMG_1042-2.jpeg" alt="" />
          <img src="/assets/RITUAL_002_PHOTOS/IMG_1027-2.jpeg" alt="" />
          <img src="/assets/RITUAL_002_PHOTOS/IMG_1022-2.jpg" alt="" />
          <img src="/assets/RITUAL_002_PHOTOS/IMG_1016-2.jpg" alt="" />
          <img src="/assets/RITUAL_002_PHOTOS/IMG_1010-2.jpeg" alt="" />
          <img src="/assets/RITUAL_002_PHOTOS/IMG_1008-2.jpeg" alt="" />
          <img src="/assets/RITUAL_002_PHOTOS/IMG_0996-4.jpeg" alt="" />
          <img src="/assets/RITUAL_002_PHOTOS/IMG_0989-2.jpeg" alt="" />
          <img src="/assets/RITUAL_002_PHOTOS/IMG_0977-2.jpeg" alt="" />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© DAW 2025</p>
      </footer>
    </div>
  );
}

export default Ritual002;
