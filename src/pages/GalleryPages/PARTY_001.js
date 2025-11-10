
import { Link } from "react-router-dom";

function Party001() {
  return (
    <div>
      <div className="gallery">
        {/* Back link */}
        <Link to="/gallery">
          <h1>BACK</h1>
        </Link>

        {/* Image grid */}
        <div className="images">
          <img src="/assets/PARTY_001_PHOTOS/IMG_3994.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3990.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3989.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3988.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3981.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3969.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3955.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3947.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3930.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3928.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3924.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3919.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3910.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3898.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3877.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3849.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3840.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3839.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3831.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3810.jpeg" alt="" />
          <img src="/assets/PARTY_001_PHOTOS/IMG_3778.jpeg" alt="" />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© DAW 2025</p>
      </footer>
    </div>
  );
}

export default Party001;
