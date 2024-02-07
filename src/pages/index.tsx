import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";
import { TOKEN_TICKER } from "../../constants";

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>${TOKEN_TICKER} Home</title>
        <meta name="description" content={`$${TOKEN_TICKER} Home`} />
      </Head>
      <HomeView />
    </>
  );
};

export default Home;
