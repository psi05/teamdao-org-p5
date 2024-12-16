import { Address, Avatar, EthBalance, Identity, Name } from "@coinbase/onchainkit/identity";
import {
	ConnectWallet,
	ConnectWalletText,
	Wallet,
	WalletDropdown,
	WalletDropdownDisconnect,
	WalletDropdownLink,
} from "@coinbase/onchainkit/wallet";
import { Wallet2Icon } from "lucide-react";
import Image from "next/image";

export default function ConnectWalletBTN() {
	return (
		<div>
			<Wallet>
				<ConnectWallet
					className="flex h-[45px] items-center border-2 border-teamdao_green bg-black text-white outline-none transition-all duration-200 ease-in-out hover:bg-black active:scale-105"
					// @ts-expect-error: must be corrected properly
					withWalletAggregator
				>
					<ConnectWalletText className="font-teamdao leading-[15px] text-white">
						<div className="flex items-center space-x-2">
							<Wallet2Icon />
							<span className="mt-0.5 select-none tracking-widest">Connect</span>
						</div>
					</ConnectWalletText>
					<div className="flex items-center space-x-2">
						<Image src="/logo.png" alt="TeamDAO Logo" width={24} height={24} />
						<Name className="mt-1 font-teamdao text-xl font-light tracking-wider text-teamdao_green" />
					</div>
				</ConnectWallet>
				<WalletDropdown>
					<Identity
						className="px-4 pb-2 pt-3 duration-200 ease-in-out hover:bg-teamdao_green_dark"
						hasCopyAddressOnClick
					>
						<Avatar />
						<Name />
						<Address />
						<EthBalance />
					</Identity>
					<WalletDropdownLink
						className="duration-200 ease-in-out hover:bg-teamdao_green_dark"
						icon="wallet"
						href="https://t.me/TEAMwalletBot/app"
					>
						Wallet
					</WalletDropdownLink>
					<WalletDropdownDisconnect className="duration-200 ease-in-out hover:bg-teamdao_green_dark" />
				</WalletDropdown>
			</Wallet>
		</div>
	);
}
