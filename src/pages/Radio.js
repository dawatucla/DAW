import React, { useState } from "react";
import Player from "../components/Player";

const SETLIST = [
  {
    title: "Chief Keef — Don't Know",
    url: "https://soundcloud.com/i-need-bandz/chief-keef-dont-know",
  },
  {
    title: "SpaceGhostPurrp — Friday (Remastered)",
    url: "https://soundcloud.com/sc0tt-ktown/spaceghostpurrp-friday-remasteredd",
  },
  {
    title: "Chief Keef — Ight Doe",
    url: "https://soundcloud.com/glo_gang_nation/chief-keef-ight-doe",
  },
  {
    title: "Young Thug — I Already Know",
    url: "https://soundcloud.com/jake-van-roekel-30861228/i-already-know-young-thug",
  },
];

export default function Radio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTrack = SETLIST[currentIndex];

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1>Radio Page</h1>
      <p style={{ opacity: 0.7, fontWeight: "lighter" }}>
        Hard coded songs from Soundcloud...
      </p>
      <div style={{ marginBottom: 20 }}>
        {SETLIST.map((track, index) => (
          <div
            key={track.url}
            onClick={() => setCurrentIndex(index)}
            style={{
              padding: "10px 12px",
              marginBottom: 8,
              cursor: "pointer",
              border: "1px solid #ddd",
              background:
                index === currentIndex ? "rgba(255,0,0,0.05)" : "white",
              borderColor: index === currentIndex ? "red" : "#ddd",
            }}
          >
            {track.title}
          </div>
        ))}
      </div>
      <Player
        url={currentTrack.url}
        options={{
          auto_play: false,
          visual: true,
          single_active: true,
          show_artwork: true,
          show_user: true,
          show_playcount: false,
          sharing: true,
          download: false,
          buying: false,
          color: "#111111",
        }}
      />
    </div>
  );
}
