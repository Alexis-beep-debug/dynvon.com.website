import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "dynvon — Prozessautomatisierung für kleine Unternehmen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          background:
            "linear-gradient(135deg, #f8f9fb 0%, #f0f1f5 100%)",
          fontFamily: "sans-serif",
          color: "#1a1a2e",
          position: "relative",
        }}
      >
        {/* Top: eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "22px",
            color: "#6366f1",
            textTransform: "uppercase",
            letterSpacing: "4px",
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background: "#6366f1",
            }}
          />
          Business Process Automation
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <div
            style={{
              fontSize: "82px",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1.05,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              gap: "18px",
            }}
          >
            <span>Buchhaltung &amp; Angebote</span>
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              automatisieren.
            </span>
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#6b7085",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Robuste Python-Systeme statt Zapier/Make — für kleine Unternehmen aus Nürnberg.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              }}
            />
            dynvon
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#6b7085",
              fontFamily: "monospace",
            }}
          >
            dynvon.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
