import { Input } from "components/Input";
import { ViewHeading } from "components/ViewHeading";
import { TOKEN_TICKER } from "../../../constants";
import { useState } from "react";
import { Button } from "components/Button";

export const SwapView = () => {
  const [amount, setAmount] = useState<string | number>(0);
  console.log(amount);
  const walletAmount = 120000;
  return (
    <>
      {/* <ViewHeading>
        Swap ${VESTED_REWARD_TICKER} for vested ${TOKEN_TICKER}
      </ViewHeading>
      <Input
        disabled
        value={amount.toString()}
        onChange={(e) => {
          const v = e.target.value;
          // Check if the input is a number or a number ending with a decimal point
          if (/^\d*\.?\d*$/.test(v) || v === "") {
            setAmount(v);
          } else {
            // If the input becomes invalid, we don't change the amount
            // This prevents reset to zero on invalid inputs like characters
            // You might show an error message or similar here
          }
        }}
      />
      <h2 className="text-2xl">
        Available: ${walletAmount.toLocaleString("en-US")} ${TOKEN_TICKER}
      </h2>
      <Button variant="outline" onClick={() => {}}>
        SWAP
      </Button> */}
    </>
  );
};
