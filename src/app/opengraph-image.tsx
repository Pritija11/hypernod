export const dynamic = "force-static";
import { ImageResponse } from "next/og";
import { buildBrandImageElement, OG_SIZE } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "HyperNod — Infrastructure for what's next.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(await buildBrandImageElement(), { ...OG_SIZE });
}
