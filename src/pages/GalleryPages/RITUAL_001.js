import { Link } from "react-router-dom";

function Ritual001() {
  return (
    <div>
      <div className="gallery">
        {/* Back link */}
        <Link to="/gallery">
          <h1>BACK</h1>
        </Link>

        {/* Image grid */}
        <div className="images">
          <img src="/assets/RITUAL_001_PHOTOS/_R1A3315.jpg" alt="" />
          <img src="/assets/RITUAL_001_PHOTOS/_R1A3248.jpg" alt="" />
          <img src="/assets/RITUAL_001_PHOTOS/_R1A3224.jpg" alt="" />
          <img src="/assets/RITUAL_001_PHOTOS/_R1A3190.jpg" alt="" />
          <img src="/assets/RITUAL_001_PHOTOS/_R1A3139.jpg" alt="" />
          <img src="/assets/RITUAL_001_PHOTOS/_R1A3135.jpg" alt="" />
          <img src="/assets/RITUAL_001_PHOTOS/_R1A3109.jpg" alt="" />
          <img src="/assets/RITUAL_001_PHOTOS/_R1A3102.jpg" alt="" />
          <img src="/assets/RITUAL_001_PHOTOS/_R1A3060.jpg" alt="" />
          <img src="/assets/RITUAL_001_PHOTOS/_R1A3039.jpg" alt="" />
          <img src="/assets/RITUAL_001_PHOTOS/_R1A3035.jpg" alt="" />
          <img src="/assets/RITUAL_001_PHOTOS/_R1A3011.jpg" alt="" />
          <img src="/assets/RITUAL_001_PHOTOS/_R1A2987.jpg" alt="" />
          <img src="/assets/RITUAL_001_PHOTOS/_R1A2956.jpg" alt="" />
          <img src="/assets/RITUAL_001_PHOTOS/_R1A2926.jpg" alt="" />
          <img src="/assets/RITUAL_001_PHOTOS/_R1A2874.jpg" alt="" />
          <img src="/assets/RITUAL_001_PHOTOS/_R1A2868.jpg" alt="" />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© DAW 2025</p>
      </footer>
    </div>
  );
}

export default Ritual001;
