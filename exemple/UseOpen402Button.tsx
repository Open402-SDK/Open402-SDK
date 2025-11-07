import React from "react";
import { payWithOpen402 } from "../../src";

export default function UseOpen402Button() {
  const onPay = async () => {
    const res = await payWithOpen402({
      endpoint: "/api/data",
      amount: "0.01 USD",
      facilitator: "mock",
      memo: "demo-react",
    });
    alert(res.ok ? `Paid ✔️ tx: ${res.txHash}` : `Error: ${res.error}`);
  };

  return <button onClick={onPay}>Pay 0.01 USD with Open402</button>;
}
