export type Currency = "USD" | "USDC" | "ETH" | "SOL";
export type Network = "base" | "ethereum" | "solana" | "base-sepolia";

export interface PaymentIntent {
  endpoint: string;        // ex: "/api/data" or "https://api.example.com/data"
  amount: string;          // "0.01 USD"
  memo?: string;           // free text for invoices
  network?: Network;       // default: "base"
  facilitator?: string;    // adapter name, default: "mock"
  metadata?: Record<string, string>;
}

export interface PaymentResult {
  ok: boolean;
  txHash?: string;
  receipt?: {
    invoice: string;
    amount: string;
    network: Network;
    settledAt: string;
  };
  error?: string;
}

export interface Facilitator {
  name: string;
  quote(intent: PaymentIntent): Promise<{ invoice: string; amount: string }>;
  pay(intent: PaymentIntent): Promise<PaymentResult>;
  verify(receiptHash: string): Promise<boolean>;
}
