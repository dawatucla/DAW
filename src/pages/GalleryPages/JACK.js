import { Link } from "react-router-dom";

function Jack() {
  return (
    <div>
      <div className="gallery">
        {/* Back link */}
        <Link to="/gallery">
          <h1>BACK</h1>
        </Link>

        {/* Image grid */}
        <div className="images">
          <img src="/assets/JACK_PHOTOS/lor1.jpg" alt="" />
          <img src="/assets/JACK_PHOTOS/lor2.jpg" alt="" />
          <img src="/assets/JACK_PHOTOS/jack_aura.jpg" alt="" />
          <img src="/assets/JACK_PHOTOS/portrait1.jpg" alt="" />
          <img src="/assets/JACK_PHOTOS/people2.jpeg" alt="" />
          <img src="/assets/JACK_PHOTOS/portrait2.jpg" alt="" />
          <img src="/assets/JACK_PHOTOS/lucy.jpg" alt="" />
          <img src="/assets/JACK_PHOTOS/kuru.jpg" alt="" />
          <img src="/assets/JACK_PHOTOS/izi_isa.jpg" alt="" />
          <img src="/assets/JACK_PHOTOS/people1.jpeg" alt="" />
          <img src="/assets/JACK_PHOTOS/jack2.jpg" alt="" />
          <img src="/assets/JACK_PHOTOS/jack3.jpg" alt="" />
          <img src="/assets/JACK_PHOTOS/jack4.jpg" alt="" />
          <img src="/assets/JACK_PHOTOS/harto.jpg" alt="" />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© DAW 2025</p>
      </footer>
    </div>
  );
}

export default Jack;
