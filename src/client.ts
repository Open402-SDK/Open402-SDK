import { PaymentIntent, PaymentResult } from "./types";
import { getFacilitator } from "./facilitator";

export async function payWithOpen402(intent: PaymentIntent): Promise<PaymentResult> {
  if (!intent.endpoint) throw new Error("endpoint is required");
  if (!intent.amount) throw new Error("amount is required");
  const facilitator = getFacilitator(intent.facilitator);
  return facilitator.pay(intent);
}
