// Minimal verification mock (placeholder for real x402 receipt verification)
export async function verifyOpen402Receipt(receiptHash: string): Promise<boolean> {
  return /^0x[a-f0-9]+$/i.test(receiptHash);
}
