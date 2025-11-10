import { Link } from "react-router-dom";

function Echo003() {
  return (
    <div>
      <div className="gallery">
        {/* Back link */}
        <Link to="/gallery">
          <h1>BACK</h1>
        </Link>

        {/* Image grid */}
        <div className="images">
          <img src="/assets/ECHO_003_PHOTOS/IMG_2941.jpeg" alt="" />
          <img src="/assets/ECHO_003_PHOTOS/IMG_2937.jpeg" alt="" />
          <img src="/assets/ECHO_003_PHOTOS/IMG_2926.jpeg" alt="" />
          <img src="/assets/ECHO_003_PHOTOS/IMG_2921.jpeg" alt="" />
          <img src="/assets/ECHO_003_PHOTOS/IMG_2913.jpeg" alt="" />
          <img src="/assets/ECHO_003_PHOTOS/IMG_2871.jpeg" alt="" />
          <img src="/assets/ECHO_003_PHOTOS/IMG_2842.jpeg" alt="" />
          <img src="/assets/ECHO_003_PHOTOS/IMG_2841.jpeg" alt="" />
          <img src="/assets/ECHO_003_PHOTOS/IMG_2834.jpeg" alt="" />
          <img src="/assets/ECHO_003_PHOTOS/IMG_2816.jpeg" alt="" />
          <img src="/assets/ECHO_003_PHOTOS/IMG_2787.jpeg" alt="" />
          <img src="/assets/ECHO_003_PHOTOS/IMG_2776.jpeg" alt="" />
          <img src="/assets/ECHO_003_PHOTOS/IMG_2769.jpeg" alt="" />
          <img src="/assets/ECHO_003_PHOTOS/IMG_2765.jpeg" alt="" />
          <img src="/assets/ECHO_003_PHOTOS/DSC03623.jpeg" alt="" />
          <img src="/assets/ECHO_003_PHOTOS/DSC03596.jpeg" alt="" />
          <img src="/assets/ECHO_003_PHOTOS/DSC03585.jpeg" alt="" />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© DAW 2025</p>
      </footer>
    </div>
  );
}

export default Echo003;
