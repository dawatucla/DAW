//things to fix: iframe css, can we get load speeds to be faster? load speed is kind of buns rn

import React, { useEffect, useMemo, useRef, useState } from "react";

function loadSoundCloudWidgetScript() {
  return new Promise((resolve, reject) => {
    if (window.SC && window.SC.Widget) return resolve(window.SC);

    const existing = document.querySelector('script[data-sc-widget="true"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(window.SC));
      existing.addEventListener("error", reject);
      return;
    }

    const s = document.createElement("script");
    s.src = "https://w.soundcloud.com/player/api.js";
    s.async = true;
    s.dataset.scWidget = "true";
    s.onload = () => resolve(window.SC);
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

async function getEmbedSrcFromOEmbed(soundcloudUrl, { maxheight = 400 } = {}) {
  const endpoint = new URL("https://soundcloud.com/oembed");
  endpoint.searchParams.set("format", "json");
  endpoint.searchParams.set("url", soundcloudUrl);
  endpoint.searchParams.set("maxheight", String(maxheight));

  const res = await fetch(endpoint.toString());
  if (!res.ok) throw new Error(`oEmbed failed: ${res.status}`);
  const data = await res.json();
  const match = String(data.html).match(/src="([^"]+)"/i);
  return match[1];
}

export default function Player({
  url,
  height = 400,
  options = {
    auto_play: false,
    show_artwork: true,
    show_user: true,
    show_playcount: false,
    sharing: true,
    download: false,
    buying: false,
    color: "#111111",
  },
}) {
  const iframeRef = useRef(null);
  const widgetRef = useRef(null);
  const [embedSrc, setEmbedSrc] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState("");
  const paramString = useMemo(() => {
    const p = new URLSearchParams();
    for (const [k, v] of Object.entries(options || {})) {
      if (v === undefined || v === null) continue;
      p.set(k, String(v));
    }
    return p.toString();
  }, [options]);

  useEffect(() => {
    let cancelled = false;
    setError("");
    setIsReady(false);
    setEmbedSrc(null);

    (async () => {
      if (!url) return;
      const src = await getEmbedSrcFromOEmbed(url, { maxheight: height });
      const u = new URL(src);
      const extra = new URLSearchParams(paramString);
      extra.forEach((value, key) => u.searchParams.set(key, value));
      if (!cancelled) setEmbedSrc(u.toString());
    })();

    return () => {
      cancelled = true;
    };
  }, [url, height, paramString]);

  useEffect(() => {
    let didCancel = false;

    (async () => {
      if (!embedSrc) return;
      await loadSoundCloudWidgetScript();
      if (didCancel) return;
      const iframeEl = iframeRef.current;
      if (!iframeEl) return;
      const widget = window.SC.Widget(iframeEl);
      widgetRef.current = widget;
      widget.bind(window.SC.Widget.Events.READY, () => {
        setIsReady(true);
      });
      const onPlay = () => console.log("successfully played...");
      const onPause = () => console.log("successfully paused...");
      widget.bind(window.SC.Widget.Events.PLAY, onPlay);
      widget.bind(window.SC.Widget.Events.PAUSE, onPause);
    })();

    return () => {
      didCancel = true;
      try {
        const w = widgetRef.current;
        if (w && window.SC?.Widget?.Events) {
          w.unbind(window.SC.Widget.Events.READY);
          w.unbind(window.SC.Widget.Events.PLAY);
          w.unbind(window.SC.Widget.Events.PAUSE);
        }
      } catch {}
      widgetRef.current = null;
    };
  }, [embedSrc]);

  function handlePlay() {
    widgetRef.current?.play();
  }

  function handlePause() {
    widgetRef.current?.pause();
  }

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {embedSrc ? (
        <iframe
          ref={iframeRef}
          title="SoundCloud Player"
          width="100%"
          height={height}
          scrolling="no"
          frameBorder="no"
          allow="autoplay; encrypted-media"
          src={embedSrc}
        />
      ) : (
        <div style={{ padding: 12, opacity: 0.7 }}>loading…</div>
      )}

      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <button onClick={handlePlay} disabled={!isReady}>
          Play
        </button>
        <button onClick={handlePause} disabled={!isReady}>
          Pause
        </button>

        <span style={{ opacity: 0.7 }}>
          {isReady ? "no errors..." : "loading…"}
        </span>
      </div>
    </div>
  );
}
