import path from "path";

// Outside `public/` on purpose: KTP photos are sensitive and must only be
// reachable through the authenticated admin file route.
export const UPLOAD_DIR = path.join(process.cwd(), "uploads", "reseller");

export const MAX_UPLOAD_BYTES = 5 * 1024 * 1024; // 5 MB

export const IMAGE_EXTENSIONS: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
};

export const UPLOAD_NAME_PATTERN = /^[a-z0-9-]+\.(jpg|png|webp)$/;
