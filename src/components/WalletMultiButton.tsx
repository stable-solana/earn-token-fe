import { useWallet } from "@solana/wallet-adapter-react";

import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  useWalletModal,
  WalletConnectButton,
  WalletIcon,
  WalletModalButton,
} from "@solana/wallet-adapter-react-ui";
import { appFont } from "styles/appFont";
import { Button, ButtonProps } from "./Button";
import { CSSProperties } from "react";

export const WalletMultiButton: FC<ButtonProps> = ({ children, ...props }) => {
  const { publicKey, wallet, disconnect } = useWallet();
  const { visible, setVisible } = useWalletModal();

  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);
  const content = useMemo(() => {
    if (children) return children;
    if (!wallet || !base58) return null;
    return base58.slice(0, 4) + ".." + base58.slice(-4);
  }, [children, wallet, base58]);

  const handleClick = useCallback(
    (event) => {
      if (!event.defaultPrevented) setVisible(!visible);
    },
    [setVisible, visible]
  );
  return (
    <>
      <style>
        {`
        .wallet-adapter-modal-wrapper *{
          font-family:${appFont.style.fontFamily};
        }
      `}
      </style>
      <Button
        style={{ pointerEvents: "auto", ...props.style } as CSSProperties}
        onClick={(!wallet && handleClick) || disconnect}
        variant="arrow"
        startIcon={wallet && <WalletIcon wallet={wallet} />}
        {...props}
      >
        <div>{!wallet ? "CONNECT" : content}</div>
      </Button>
    </>
  );
};
