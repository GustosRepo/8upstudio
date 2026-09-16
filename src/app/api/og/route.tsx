import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || site.tagline;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#14100f",
          color: "#f7f3ec",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, letterSpacing: 4 }}>8UP</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 64, lineHeight: 1.1, maxWidth: 900 }}>
            {title}
          </div>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#ad8a86" }}>
            {site.tagline.toUpperCase()}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
