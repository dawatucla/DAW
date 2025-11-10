import { Link } from "react-router-dom";

function PatchPlus() {
  return (
    <div>
      <div className="gallery">
        {/* Back link */}
        <Link to="/gallery">
          <h1>BACK</h1>
        </Link>

        {/* Image grid */}
        <div className="images">
          <img src="/assets/PATCH_PHOTOS/Patch_1.jpg" alt="" />
          <img src="/assets/PATCH_PHOTOS/Patch_2.jpg" alt="" />
          <img src="/assets/PATCH_PHOTOS/Patch_3.jpg" alt="" />
          <img src="/assets/PATCH_PHOTOS/Patch_4.jpg" alt="" />
          <img src="/assets/PATCH_PHOTOS/Patch_5.jpg" alt="" />
          <img src="/assets/PATCH_PHOTOS/Patch_6.jpg" alt="" />
          <img src="/assets/PATCH_PHOTOS/Patch_7.jpg" alt="" />
          <img src="/assets/PATCH_PHOTOS/Patch_8.jpg" alt="" />
          <img src="/assets/PATCH_PHOTOS/Patch_9.jpg" alt="" />
          <img src="/assets/PATCH_PHOTOS/Patch_10.jpg" alt="" />
          <img src="/assets/PATCH_PHOTOS/Patch_11.jpg" alt="" />
          <img src="/assets/PATCH_PHOTOS/Patch_12.jpg" alt="" />
          <img src="/assets/PATCH_PHOTOS/Patch_13.jpg" alt="" />
          <img src="/assets/PATCH_PHOTOS/Patch_14.jpg" alt="" />
          <img src="/assets/PATCH_PHOTOS/Patch_15.jpg" alt="" />
          <img src="/assets/PATCH_PHOTOS/Patch_16.jpg" alt="" />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© DAW 2025</p>
      </footer>
    </div>
  );
}

export default PatchPlus;
