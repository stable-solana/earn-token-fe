import { FC } from "react";
import dynamic from "next/dynamic";
import { useNetworkConfiguration } from "../contexts/NetworkConfigurationProvider";

const NetworkSwitcher: FC = () => {
  const { networkConfiguration, setNetworkConfiguration } =
    useNetworkConfiguration();

  console.log(networkConfiguration);

  return process.env.NODE_ENV == "production" ? null : (
    <label className="cursor-pointer label max-w-[165px] mx-auto mt-auto">
      <a>Network</a>
      <select
        value={networkConfiguration}
        onChange={(e) => setNetworkConfiguration(e.target.value)}
        className="select max-w-xs ml-2"
      >
        <option value="mainnet-beta">main</option>
        <option value="devnet">dev</option>
        <option value="testnet">test</option>
      </select>
    </label>
  );
};

export default dynamic(() => Promise.resolve(NetworkSwitcher), {
  ssr: false,
});
