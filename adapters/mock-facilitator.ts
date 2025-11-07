import { Facilitator, PaymentIntent, PaymentResult } from "../src/types";
import { nowIso, randomHex } from "../src/utils";

export const MockFacilitator: Facilitator = {
  name: "mock",
  async quote(intent: PaymentIntent) {
    const invoice = Math.random().toString(36).slice(2, 8).toUpperCase();
    return { invoice, amount: intent.amount };
  },
  async pay(intent: PaymentIntent): Promise<PaymentResult> {
    const { invoice } = await this.quote(intent);
    // simulate on-chain settle
    await new Promise(r => setTimeout(r, 250));
    return {
      ok: true,
      txHash: randomHex(64),
      receipt: {
        invoice,
        amount: intent.amount,
        network: (intent.network ?? "base") as any,
        settledAt: nowIso(),
      },
    };
  },
  async verify(_receiptHash: string) {
    // Always true in mock
    return true;
  },
};
export default MockFacilitator;
