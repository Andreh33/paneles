import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#252620",
        }}
      >
        <svg width="26" height="26" viewBox="0 0 40 40">
          <polygon points="20,4 4,36 20,36" fill="#4D4C92" />
          <polygon points="20,4 36,36 20,36" fill="#E37C17" />
          <rect x="6" y="34" width="28" height="2" fill="#4D4C92" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
