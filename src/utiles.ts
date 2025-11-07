export const isBrowser = typeof window !== "undefined";
export const nowIso = () => new Date().toISOString();
export const randomHex = (len = 64) =>
  "0x" + Array.from({ length: len }, () => Math.floor(Math.random()*16).toString(16)).join("");
