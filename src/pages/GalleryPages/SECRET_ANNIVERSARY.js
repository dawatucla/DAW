import { Link } from "react-router-dom";

function SecretAnniversary() {
  return (
    <div>
      {/* Gallery navigation */}
      <div className="gallery">
        <Link to="/gallery">
          <h1>BACK</h1>
        </Link>

        {/* Image grid */}
        <div className="images">
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/FCBACFB5-77F8-4E43-9628-07DFEF643B8F.jpeg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/DC5965D8-C08D-4BD0-9A2B-5E898F84710F.jpeg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/C8214D31-9CF8-48C6-BA2E-4129E2087B89.jpeg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/BDD7BE54-06A9-4890-AADC-926258E0B6F0.jpeg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/_R1A1902.jpg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/_R1A1867.jpg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/_R1A1830.jpg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/_R1A1788.jpg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/_R1A1775.jpg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/_R1A1750.jpg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/_R1A1706.jpg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/_R1A1681.jpg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/_R1A1498.jpg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/_R1A1471.jpg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/_R1A1459.jpg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/_R1A1443.jpg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/_R1A1370.jpg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/865D35AC-5855-40B4-92ED-6C3E5AA06EA7_1_201_a.jpeg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/7C126A06-A1F3-4994-B9CD-02BE50681597.jpeg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/5ABE2962-0D68-42D0-9C4E-D24040C156B9_1_201_a.jpeg" alt="" />
          <img src="/assets/SECRET_ANNIVERSARY_PHOTOS/3A57340E-D6A7-4A54-937B-8E3B062F69AE.jpeg" alt="" />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© DAW 2025</p>
      </footer>
    </div>
  );
}

export default SecretAnniversary;
