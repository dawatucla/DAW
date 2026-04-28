import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar.js";
import discordLogo from "../assets/social_logos/discord_logo_black.png";
import spotifyLogo from "../assets/social_logos/spotify_logo_black.png";
import instagramLogo from "../assets/social_logos/instagram_logo_black.png";
import emailLogo from "../assets/social_logos/email_logo_black.png";

function Connect() {
  return (
    <div>
      <Navbar />
      {/* Main content */}
      <div className="sub-body">
        <div className="socials">
          <a href="https://discord.gg/w8SgDXF5" target="_blank" rel="noopener noreferrer">
            <img src={discordLogo} alt="Discord" />
          </a>
          <a
            href="https://open.spotify.com/user/31z4qep7fk5wndxgbbwvl75lskt4?si=2a2aec4355c6449a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={spotifyLogo} alt="Spotify" />
          </a>
          <a href="https://www.instagram.com/dawatucla/" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" />
          </a>
          <a href="mailto:thedaw@g.ucla.edu">
            <img src={emailLogo} alt="Email" />
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
