import { Link } from "react-router-dom";

function FrostChildren() {
  return (
    <div>
      <div className="gallery">
        {/* Back link */}
        <Link to="/gallery">
          <h1>BACK</h1>
        </Link>

        {/* Image grid */}
        <div className="images">
          <img src="/assets/FROST_CHILDREN_PHOTOS/DAW FROSTCHILDREN1jpg.jpg" alt="" />
          <img src="/assets/FROST_CHILDREN_PHOTOS/DAW FROSTCHILDREN2.jpg" alt="" />
          <img src="/assets/FROST_CHILDREN_PHOTOS/DAW FROSTCHILDREN3jpg.jpg" alt="" />
          <img src="/assets/FROST_CHILDREN_PHOTOS/DAW FROSTCHILDREN4JPG.JPG" alt="" />
          <img src="/assets/FROST_CHILDREN_PHOTOS/DAW FROSTCHILDREN5.JPG" alt="" />
          <img src="/assets/FROST_CHILDREN_PHOTOS/DAW FROSTCHILDREN6.JPG" alt="" />
          <img src="/assets/FROST_CHILDREN_PHOTOS/DAW FROSTCHILDREN7.jpg" alt="" />
          <img src="/assets/FROST_CHILDREN_PHOTOS/DAW FROSTCHILDREN8.jpg" alt="" />
          <img src="/assets/FROST_CHILDREN_PHOTOS/DAW FROSTCHILDREN9.JPG" alt="" />
          <img src="/assets/FROST_CHILDREN_PHOTOS/DAW FROSTCHILDREN10.jpg" alt="" />
          <img src="/assets/FROST_CHILDREN_PHOTOS/DAW FROSTCHILDREN11.jpg" alt="" />
          <img src="/assets/FROST_CHILDREN_PHOTOS/DAW FROSTCHILDREN12.jpg" alt="" />
          <img src="/assets/FROST_CHILDREN_PHOTOS/DAW FROSTCHILDREN13.jpg" alt="" />
          <img src="/assets/FROST_CHILDREN_PHOTOS/DAW FROSTCHILDREN14.JPG" alt="" />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© DAW 2025</p>
      </footer>
    </div>
  );
}

export default FrostChildren;
