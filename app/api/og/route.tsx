import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "white",
          background: "#0a0a0f",
          width: "100%",
          borderRadius: "5px",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Prem Sagar | Full Stack Developer
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
