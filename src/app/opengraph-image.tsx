import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          padding: 72,
          position: "relative",
          overflow: "hidden",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* orange ambient glows */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: 280,
            backgroundColor: "rgba(249,115,22,0.16)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -240,
            left: -140,
            width: 520,
            height: 520,
            borderRadius: 260,
            backgroundColor: "rgba(249,115,22,0.08)",
          }}
        />
        {/* hairline frame */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        />

        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid rgba(249,115,22,0.45)",
              backgroundColor: "rgba(249,115,22,0.10)",
              borderRadius: 999,
              paddingLeft: 18,
              paddingRight: 18,
              paddingTop: 8,
              paddingBottom: 8,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: "#f97316",
              }}
            />
            <span
              style={{
                color: "#fdba74",
                fontSize: 22,
                letterSpacing: 4,
                fontWeight: 700,
              }}
            >
              RISKNOX
            </span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 22 }}>
            Cyber Risk Intelligence
          </span>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ color: "#ffffff", fontSize: 92, fontWeight: 800, lineHeight: 1 }}>
            Cyber risk,
          </div>
          <div style={{ color: "#f97316", fontSize: 92, fontWeight: 800, lineHeight: 1 }}>
            answered.
          </div>
          <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 30 }}>
            Attack surface · GRC · Risk quantification
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {["ISO 27001", "SOC 2", "DPDPA"].map((t) => (
              <span
                key={t}
                style={{
                  color: "#ffffff",
                  fontSize: 20,
                  border: "1px solid rgba(255,255,255,0.20)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderRadius: 999,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 6,
                  paddingBottom: 6,
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <span style={{ color: "#f97316", fontSize: 28, fontWeight: 700 }}>
            risknox.ai
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
