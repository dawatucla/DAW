// pages/Gallery/Gallery.jsx
import { Link, useRoutes } from "react-router-dom";
import AliceTheClub from "./GalleryPages/ALICE_THE_CLUB";
import Echo002 from "./GalleryPages/ECHO_002";
import Echo003 from "./GalleryPages/ECHO_003";
import Echo004 from "./GalleryPages/ECHO_004";
import Echo005 from "./GalleryPages/ECHO_005";
import Echo006 from "./GalleryPages/ECHO_006";
import FrostChildren from "./GalleryPages/FROST_CHILDREN";
import Jack from "./GalleryPages/JACK";
import Party001 from "./GalleryPages/PARTY_001";
import Party002 from "./GalleryPages/PARTY_002";
import PatchPlus from "./GalleryPages/PATCH_+";
import Ritual001 from "./GalleryPages/RITUAL_001";
import Ritual002 from "./GalleryPages/RITUAL_002";
import SecretAnniversary from "./GalleryPages/SECRET_ANNIVERSARY";

function GalleryList() {
  const items = [
    ["jack", "JACKZEBRA"],
    ["echo006", "ECHO 006"],
    ["patchplus", "PATCH +"],
    ["frostchildren", "FROST CHILDREN"],
    ["echo005", "ECHO 005"],
    ["alicetheclub", "ALICE THE CLUB"],
    ["ritual002", "RITUAL 002"],
    ["party002", "PARTY 002"],
    ["echo004", "ECHO 004"],
    ["party001", "PARTY 001"],
    ["echo003", "ECHO 003"],
    ["secretanniversary", "SECRET ANNIVERSARY"],
    ["echo002", "ECHO 002"],
    ["ritual001", "RITUAL 001"],
  ];
  return (
    <div className="sub-body">
      <div className="event-list">
        <h1>
          {items.map(([slug, label]) => (
            <span key={slug}>
              <Link to={slug}>{label}</Link>
              <br />
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}

export default function Gallery() {
  // Define all routes *relative* to /gallery here
  const element = useRoutes([
    { index: true, element: <GalleryList /> },           // /gallery
    { path: "jack", element: <Jack /> },                 // /gallery/jack
    { path: "echo006", element: <Echo006 /> },
    { path: "patchplus", element: <PatchPlus /> },
    { path: "frostchildren", element: <FrostChildren /> },
    { path: "echo005", element: <Echo005 /> },
    { path: "alicetheclub", element: <AliceTheClub /> },
    { path: "ritual002", element: <Ritual002 /> },
    { path: "party002", element: <Party002 /> },
    { path: "echo004", element: <Echo004 /> },
    { path: "party001", element: <Party001 /> },
    { path: "echo003", element: <Echo003 /> },
    { path: "secretanniversary", element: <SecretAnniversary /> },
    { path: "echo002", element: <Echo002 /> },
    { path: "ritual001", element: <Ritual001 /> },
  ]);

  return (
    <div>
      {/* Navbar lives once, above all children */}
      <div className="navbar">
        <Link to="/home">HOME</Link>
        <Link to="/connect">CONNECT</Link>
        <Link to="/events">EVENTS</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/blog">BLOG</Link>
      </div>

      {/* Child route renders here */}
      {element}

      <footer>
        <p>© DAW 2025</p>
      </footer>
    </div>
  );
}
