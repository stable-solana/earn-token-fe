import Image from "next/image";
import BgSvg from "../assets/stablesolana.svg";

export const AppBg = () => {
  return (
    <div className="flex w-full h-full z-0 absolute top-0 left-0">
      <Image
        priority
        src={BgSvg}
        className="w-full h-full object-cover"
        alt="$EARN"
      />
    </div>
  );
};
