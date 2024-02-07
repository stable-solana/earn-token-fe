import type { FC, ChangeEventHandler, CSSProperties } from "react";
import { appFont } from "styles/appFont";

export type InputProps = {
  className?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  style?: CSSProperties;
  tabIndex?: number;
  type?: string;
  value?: string | number;
};

const inputClasses =
  "h-[80px] text-right bg-opacity-60 text-accent w-[300px] sm:w-[320px] md:w-[400px] lg:min-w-[360px] xl:min-w-[500px] border-2 text-3xl relative rounded-full flex items-center transition-all py-4 px-24 justify-center hover:shadow-[0px_-0px_8px_2px_white] " +
  appFont.className;

export const Input: FC<InputProps> = (props) => {
  const inputCx = inputClasses.concat(
    (props.disabled && " opacity-30 text-opacity-30 pointer-events-none ") ||
      " "
  );

  return (
    <input
      className={`${inputCx + " " + props.className || inputCx}`}
      disabled={props.disabled}
      style={{ textWrap: "nowrap", ...props.style } as CSSProperties}
      tabIndex={props.tabIndex || 0}
      type={props.type || "text"}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
