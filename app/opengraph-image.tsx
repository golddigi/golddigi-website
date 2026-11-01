import { ImageResponse } from "next/og";

export const alt = "Golddigi — websites, Google Business Profile and automation services, based in Bhiwadi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 72, background: "#f7f6f2", color: "#203f35", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", fontSize: 48, fontWeight: 700 }}>golddigi<span style={{ color: "#b63619" }}>.</span></div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 64, lineHeight: 1.15, letterSpacing: -2 }}>
        <div>Business websites.</div>
        <div>Google Business Profile.</div>
        <div style={{ color: "#b63619" }}>Practical automations.</div>
      </div>
      <div style={{ display: "flex", fontSize: 26 }}>Based in Bhiwadi · Available remotely</div>
    </div>,
    size,
  );
}
