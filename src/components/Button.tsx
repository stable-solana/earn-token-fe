import type {
  CSSProperties,
  FC,
  MouseEventHandler,
  PropsWithChildren,
  ReactElement,
} from "react";
import Image from "next/image";
import { appFont } from "styles/appFont";
import RArrow from "../assets/rArrow.svg";
import Link from "next/link";

export type ButtonProps = PropsWithChildren<{
  className?: string;
  disabled?: boolean;
  endIcon?: ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  startIcon?: ReactElement;
  style?: CSSProperties;
  tabIndex?: number;
  variant?: "arrow" | "outline";
  href?: string;
}>;

const btnClasses =
  "h-[80px] w-[300px] sm:w-[320px] md:w-[400px] lg:min-w-[360px] xl:min-w-[500px] border-2 text-3xl relative rounded-full flex items-center transition-all py-4 px-24 justify-center hover:shadow-[0px_-0px_8px_2px_white] " +
  appFont.className;
const outlineCx =
  " border-opacity-30 hover:border-opacity-100 border-1 hover:border-2 border-white";
const arrowCx =
  "bg-accent  border-transparent hover:border-white pl-6 sm:pl-20 md:pl-24 pr-2";
export const Button: FC<ButtonProps> = ({ variant = "outline", ...props }) => {
  const btnCx = btnClasses.concat(
    (props.disabled && " opacity-30 text-opacity-30 pointer-events-none ") ||
      " ",
    variant == "outline" ? outlineCx : arrowCx
  );
  const Comp = props.href ? Link : "button";
  return (
    <Comp
      className={`${btnCx + " " + props.className || btnCx}`}
      disabled={props.disabled}
      style={{ textWrap: "nowrap", ...props.style } as CSSProperties}
      tabIndex={props.tabIndex || 0}
      type="button"
      href={props.href}
      onClick={
        Comp == "button"
          ? (props.onClick as MouseEventHandler<HTMLAnchorElement> &
              MouseEventHandler<HTMLButtonElement>)
          : null
      }
    >
      {props.startIcon && (
        <i className="wallet-adapter-button-start-icon absolute left-10 max-[640px]:hidden">
          {props.startIcon}
        </i>
      )}
      <div
        className={
          variant == "arrow" && props.startIcon
            ? "ml-auto md:mr-auto"
            : "ml-auto sm:mr-auto"
        }
      >
        {props.children}
      </div>
      {variant == "arrow" && (
        <Image
          src={RArrow}
          width={64}
          alt="right_arrowcan"
          className="ml-auto sm:ml-2 md:ml-4 max-w-[4rem]"
        />
      )}
    </Comp>
  );
};
