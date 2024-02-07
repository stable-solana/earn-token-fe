import { FC } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useAutoConnect } from "../contexts/AutoConnectProvider";
import NetworkSwitcher from "./NetworkSwitcher";
import { appFont } from "styles/appFont";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton as WalletMultiButtonDynamic } from "./WalletMultiButton";
import { Button } from "./Button";
import Image from "next/image";
import AppLogo from "../assets/EARN_LOGO.png";
import { TOKEN_TICKER } from "../../constants";
// const WalletMultiButtonDynamic = dynamic(
//   async () =>
//     (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
//   { ssr: false }
// );

export const AppBar: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { publicKey } = useWallet();
  return (
    <>
      {/* NavBar / Header */}
      {/* <div className="navbar flex h-20 z-50 flex-row md:mb-2 shadow-lg bg-black text-neutral-content border-b border-zinc-600 bg-opacity-66"> */}
      <div className="flex-col items-center gap-4 mx-4 md:mx-8 lg:mx-16 flex z-50 lg:flex-row lg:mb-6 justify-between text-neutral-content mt-2 mb-12">
        {/* <div className="flex align-items-center justify-items gap-6"> */}
        <Button variant="arrow" href="/" className=" ">
          HOME
        </Button>
        <Image
          alt={`$${TOKEN_TICKER}`}
          src={AppLogo}
          className="max-lg:order-first h-[160px] w-[160px] lg:h-[120px] lg:w-[120px]"
        />
        <WalletMultiButtonDynamic className="" />

        {/* </div> */}
        {/* <label
            htmlFor="my-drawer"
            className="btn-gh items-center justify-between md:hidden mr-6"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <div className="HAMBURGER-ICON space-y-2.5 ml-5">
              <div
                className={`h-0.5 w-8 bg-purple-600 ${
                  isNavOpen ? "hidden" : ""
                }`}
              />
              <div
                className={`h-0.5 w-8 bg-purple-600 ${
                  isNavOpen ? "hidden" : ""
                }`}
              />
              <div
                className={`h-0.5 w-8 bg-purple-600 ${
                  isNavOpen ? "hidden" : ""
                }`}
              />
            </div>
            <div
              className={`absolute block h-0.5 w-8 animate-pulse bg-purple-600 ${
                isNavOpen ? "" : "hidden"
              }`}
              style={{ transform: "rotate(45deg)" }}
            ></div>
            <div
              className={`absolute block h-0.5 w-8 animate-pulse bg-purple-600 ${
                isNavOpen ? "" : "hidden"
              }`}
              style={{ transform: "rotate(135deg)" }}
            ></div>
          </label>
          <div>
            <span className="absolute block h-0.5 w-12 bg-zinc-600 rotate-90 right-14"></span>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="btn btn-square btn-ghost text-right mr-4"
            >
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box sm:w-52"
            >
              <li>
                <div className="form-control bg-opacity-100">
                  <label className="cursor-pointer label">
                    <a>Autoconnect</a>
                    <input
                      type="checkbox"
                      checked={autoConnect}
                      onChange={(e) => setAutoConnect(e.target.checked)}
                      className="toggle"
                    />
                  </label>
                  <NetworkSwitcher />
                </div>
              </li>
            </ul>
          </div> */}
      </div>
    </>
  );
};
