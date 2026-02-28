import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar.js";

function Connect() {
  return (
    <div>
      <Navbar />
      {/* Main content */}
      <div className="sub-body">
        <div className="socials">
          <a href="https://discord.gg/w8SgDXF5" target="_blank" rel="noopener noreferrer">
            <img src="/assets/social_logos/discord_logo_black.png" alt="Discord" />
          </a>
          <a
            href="https://open.spotify.com/user/31z4qep7fk5wndxgbbwvl75lskt4?si=2a2aec4355c6449a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/social_logos/spotify_logo_black.png" alt="Spotify" />
          </a>
          <a href="https://www.instagram.com/dawatucla/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/social_logos/instagram_logo_black.png" alt="Instagram" />
          </a>
          <a href="mailto:thedaw@g.ucla.edu">
            <img src="/assets/social_logos/email_logo_black.png" alt="Email" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© DAW 2025</p>
      </footer>
    </div>
  );
}

export default Connect;
