"use client";

import { OnchainKitProvider } from "@coinbase/onchainkit";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { ReactNode } from "react";
import { cookieStorage, createConfig, createStorage, http, WagmiProvider } from "wagmi";
import { arbitrum, base, mainnet, optimism, polygon } from "wagmi/chains";

import "@coinbase/onchainkit/styles.css";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import {
	coinbaseWallet,
	metaMaskWallet,
	rainbowWallet,
	walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

const queryClient = new QueryClient();

const connectors = connectorsForWallets(
	[
		{
			groupName: "Recommended",
			wallets: [rainbowWallet, walletConnectWallet],
		},
		{
			groupName: "Other Wallets",
			wallets: [rainbowWallet, metaMaskWallet, coinbaseWallet],
		},
	],
	{
		appName: "My RainbowKit App",
		projectId: process.env.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID as string,
	}
);

const wagmiConfig = createConfig({
	chains: [base, mainnet, polygon, optimism, arbitrum],
	connectors,
	storage: createStorage({
		storage: cookieStorage,
	}),
	ssr: true,
	transports: {
		[mainnet.id]: http(),
		[polygon.id]: http(),
		[optimism.id]: http(),
		[arbitrum.id]: http(),
		[base.id]: http(),
	},
});

function Providers({ children }: { children: ReactNode }) {
	return (
		<WagmiProvider config={wagmiConfig}>
			<QueryClientProvider client={queryClient}>
				<OnchainKitProvider apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY} chain={base}>
					<RainbowKitProvider modalSize="compact" theme={darkTheme()}>
						{children}
					</RainbowKitProvider>
				</OnchainKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}

export default Providers;
