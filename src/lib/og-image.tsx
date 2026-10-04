import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE } from "@/lib/constants";

export const OG_SIZE = { width: 1200, height: 630 };

export async function buildBrandImageElement() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/logo-mark.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "72px",
        background: "linear-gradient(135deg, #17151c 0%, #1237a6 100%)",
        color: "#fffaf4",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={88} height={88} alt="" />

        <span
          style={{
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {SITE.name}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#caff72",
          }}
        >
          Cloud Infrastructure · Digital Platforms · Technology Solutions
        </span>

        <span
          style={{
            marginTop: 20,
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          Infrastructure for what&apos;s next.
        </span>

        <span
          style={{
            marginTop: 24,
            fontSize: 26,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          A technology startup based in Kathmandu, Nepal
        </span>
      </div>
    </div>
  );
}
