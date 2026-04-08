import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rami Metry — Senior Web Developer | Fintech Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
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
            "linear-gradient(135deg, #0a0a0f 0%, #11121a 60%, #1a1530 100%)",
          color: "white",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Top: monogram */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: 4,
              color: "#94a3b8",
            }}
          >
            <span style={{ fontWeight: 700, color: "white" }}>RAMI</span>
            <span style={{ opacity: 0.4, margin: "0 12px" }}>|</span>
            <span style={{ fontWeight: 300, color: "white" }}>METRY</span>
          </div>
        </div>

        {/* Middle: name + role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 32,
              color: "#22d3ee",
              textTransform: "uppercase",
              letterSpacing: 6,
              marginBottom: 24,
            }}
          >
            Senior Web Developer · Fintech
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 800,
              lineHeight: 1.05,
              background: "linear-gradient(90deg, #a78bfa, #22d3ee)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Rami Metry
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 30,
              color: "#cbd5e1",
              maxWidth: 980,
              lineHeight: 1.4,
            }}
          >
            Building production-grade fintech platforms — digital wallets,
            reconciliation systems & multi-tenant payment gateways.
          </div>
        </div>

        {/* Bottom: domain */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#94a3b8",
          }}
        >
          <div>ramimetry.com</div>
          <div style={{ display: "flex", gap: 24 }}>
            <span>React</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Next.js</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>TypeScript</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Node.js</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
