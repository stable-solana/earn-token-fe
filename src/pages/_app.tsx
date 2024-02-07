import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { ContextProvider } from "../contexts/ContextProvider";
import { AppBar } from "../components/AppBar";
import { ContentContainer } from "../components/ContentContainer";
import { Footer } from "../components/Footer";
import Notifications from "../components/Notification";
import { appFont } from "styles/appFont";
import { AppBg } from "components/AppBg";
import NetworkSwitcher from "components/NetworkSwitcher";
import { TOKEN_TICKER } from "../../constants";
require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>${TOKEN_TICKER} Dapp</title>
      </Head>
      <ContextProvider>
        <div
          className={
            "flex flex-col relative h-screen z-50" + " " + appFont.className
          }
        >
          <Notifications />
          <AppBar />
          <ContentContainer>
            <Component {...pageProps} />
          </ContentContainer>
          {/* <Footer /> */}
          <NetworkSwitcher />
        </div>
      </ContextProvider>
      <AppBg />
    </>
  );
};

export default App;
