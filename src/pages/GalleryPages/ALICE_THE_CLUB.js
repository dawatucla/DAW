import { Link } from "react-router-dom";

function AliceTheClub() {
  return (
    <div>
      <div className="gallery">
        {/* Back link */}
        <Link to="/gallery">
          <h1>BACK</h1>
        </Link>

        {/* Image grid */}
        <div className="images">
          <img src="/assets/ALICE_PHOTOS/alice-06.jpg" alt="" />
          <img src="/assets/ALICE_PHOTOS/alice-07.jpg" alt="" />
          <img src="/assets/ALICE_PHOTOS/alice-08.jpg" alt="" />
          <img src="/assets/ALICE_PHOTOS/alice-11.jpg" alt="" />
          <img src="/assets/ALICE_PHOTOS/alice-12.jpg" alt="" />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© DAW 2025</p>
      </footer>
    </div>
  );
}

export default AliceTheClub;
