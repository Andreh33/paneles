import { ImageResponse } from "next/og";

export const alt = "Panelex — Painel sandwich para Portugal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#252620",
          color: "white",
          padding: 72,
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 38, color: "#f4a04e" }}>
          PANELEX · PORTUGAL
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 82,
            lineHeight: 1.08,
            fontWeight: 700,
          }}
        >
          Painel sandwich.
          <br />À medida da sua obra.
        </div>
        <div style={{ display: "flex", fontSize: 29, color: "#deded9" }}>
          Coberturas · Fachadas · Fertelha · Fornecimento direto da fábrica
        </div>
      </div>
    ),
    size,
  );
}
