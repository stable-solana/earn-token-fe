import { FC, PropsWithChildren } from "react";
import { REWARD_TICKER, TOKEN_TICKER } from "../../constants";

export const ViewHeading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="text-4xl text-center max-sm:max-w-[240px] ">{children}</h1>
  );
};
