import { ImageResponse } from "next/og";

export const alt = "Panelex — Fabricantes de panel sándwich en Extremadura";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgDefault() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #1E1D4A 0%, #2D2C66 50%, #252620 100%)",
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 40 40">
            <polygon points="20,4 4,36 20,36" fill="#4D4C92" />
            <polygon points="20,4 36,36 20,36" fill="#E37C17" />
            <rect x="6" y="34" width="28" height="2" fill="#4D4C92" />
          </svg>
          <span
            style={{
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            PANELEX
          </span>
        </div>
        <span
          style={{
            marginTop: 40,
            fontSize: 88,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            maxWidth: 1000,
          }}
        >
          Panel sándwich hecho en{" "}
          <span style={{ color: "#7D7CC4" }}>Extremadura,</span> montado en
          toda Iberia.
        </span>
        <span
          style={{
            marginTop: 28,
            fontSize: 22,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 900,
          }}
        >
          Cubiertas, fachadas y chapa perfilada. Fabricación propia,
          asesoramiento técnico y entrega rápida.
        </span>
        <span
          style={{
            marginTop: 60,
            color: "#F4A04E",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.1em",
          }}
        >
          panelex.es
        </span>
      </div>
    ),
    { ...size }
  );
}
