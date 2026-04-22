import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RanCoPar — Ran Coding Partner",
    short_name: "RanCoPar",
    description: "Web development partnership based in Kerala, India.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F3EE",
    theme_color: "#0E1116",
    orientation: "portrait",
    categories: ["business", "productivity"],
    lang: "en-IN",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
