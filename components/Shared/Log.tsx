import { utils } from "@/lib/utils";
import { ILog } from "@/types";
import Link from "next/link";
import emoji from "react-easy-emoji";
import { z } from "zod";

import TimeAgo from "./TimeAgo";

const Log = ({ log }: { log: z.infer<typeof ILog> }) => {
	return (
		<>
			{log?.type === "new-player" && (
				<>
					<div className="flex w-16 flex-grow items-center justify-center">
						<p>{emoji(`${log.flag}`)}</p>
					</div>
					<div className="w-20 flex-grow text-center">
						<p>{log.country}</p>
					</div>
					<div className="w-24 flex-grow text-center">
						<p>{log.playerNumber}</p>
					</div>
					<div className="flex w-52 flex-grow justify-center">
						<p className="flex items-center gap-1">New Player Joined {emoji("🥷")}</p>
					</div>
					<div className="w-72 flex-grow text-center xl:w-44">
						<p className="font-light text-white/30">-</p>
					</div>
					<div className="w-72 flex-grow text-center xl:w-44">
						<p className="font-light text-white/30">-</p>
					</div>
					<div className="w-32 flex-grow">
						<div className="flex items-center justify-center gap-1">{emoji("⛽️")}$0.00</div>
					</div>
					<div className="w-16 flex-grow">
						<div className="flex items-center justify-center gap-1">{emoji("✅")}1s</div>
					</div>
					<div className="w-32 flex-grow text-center">
						<p className="text-[#848489]">
							<TimeAgo date={log.createdAt} />
						</p>
					</div>
				</>
			)}

			{(log?.type === "ai" || log?.type === "trade-team" || log?.type === "pirate") && (
				<>
					<div className="flex w-16 flex-grow items-center justify-center">
						{emoji(`${log.flag}`)}
					</div>
					<div className="w-20 flex-grow text-center">{log.country}</div>
					<div className="w-20 flex-grow text-center">{log.playerNumber}</div>
					<div className="flex w-52 flex-grow justify-center">
						{log?.txType === "buy" ? (
							<p className="flex items-center gap-1 text-[#54acee]">
								{log?.type === "ai" && emoji("🤖 AI")}
								{log?.type === "pirate" ? emoji("☠️ 🟦 ") : emoji("🟦")}
								Buy Trade Slip
							</p>
						) : (
							<p className="flex items-center gap-1 text-[#dd2d44]">
								{log?.type === "ai" && emoji("🤖 AI")}
								{log?.type === "pirate" ? emoji("☠️ 🟥 ") : emoji("🟥")}
								Sell Trade Slip
							</p>
						)}
					</div>
					<div
						className={`w-72 flex-grow text-center xl:w-44 ${log?.txType === "sell" ? "text-[#dd2d44]" : "text-[#54acee]"}`}
					>
						<span>{utils.formatTokenSymbol(log.tokenIn?.symbol)} </span>
						<span>{`$${utils.formatNumber(utils.toEther(log.amountsIn, log.tokenIn.decimals) * parseFloat(log.tokenIn?.priceUSD ?? "1"), true)} `}</span>
						<span>{`[${utils.formatNumber(utils.toEther(log.amountsIn, log.tokenIn.decimals))}]`}</span>
					</div>
					<div
						className={`w-72 flex-grow text-center xl:w-44 ${log?.txType === "sell" ? "text-[#dd2d44]" : "text-[#54acee]"}`}
					>
						<span>{utils.formatTokenSymbol(log.tokenOut?.symbol)} </span>
						<span>{`$${utils.formatNumber(utils.toEther(log.amountsOut, log.tokenOut.decimals) * parseFloat(log.tokenOut?.priceUSD ?? "1"), true)} `}</span>
						<span>{`[${utils.formatNumber(utils.toEther(log.amountsOut, log.tokenOut.decimals))}]`}</span>
					</div>
					<div className="flex w-32 flex-grow items-center justify-center">
						<Link href={`${log.txLink}`} target="_blank">
							<p className="flex items-center gap-1">
								{emoji("⛽️")} ${utils.formatNumber(log.txFeeInUsd, true)}{" "}
								{emoji(`${log.chainEmoji}`)}
							</p>
						</Link>
					</div>
					<div className="flex w-16 flex-grow justify-center">
						<p className="flex items-center gap-1">
							{emoji("✅")}
							{log.seconds}s
						</p>
					</div>
					<div className="w-32 flex-grow text-center">
						<p className="text-[#848489]">
							<TimeAgo date={log.createdAt} />
						</p>
					</div>
				</>
			)}

			{log?.type === "sniper" && (
				<>
					<div className="flex w-16 flex-grow justify-center text-center">
						{emoji(log.flag ?? "")}
					</div>
					<div className="w-20 flex-grow text-center">{log.country}</div>
					<div className="w-20 flex-grow text-center">{log.playerNumber}</div>
					<div className="w-52 flex-grow text-center">
						<p className="flex items-center justify-center gap-1">
							{emoji(
								`🔫 Sniped ${utils.formatTokenSymbol(log.txType === "buy" ? `${log.tokenIn.symbol} 🟦` : `${log.tokenOut.symbol} 🟥`)}`
							)}
						</p>
					</div>
					<div className="w-72 flex-grow text-center xl:w-44">
						<span>{utils.formatTokenSymbol(log.tokenIn?.symbol)} </span>
						<span>{`$${utils.formatNumber(utils.toEther(log.amountsIn, log.tokenIn.decimals) * parseFloat(log.tokenIn?.priceUSD ?? "1"), true)} `}</span>
						<span>{`[${utils.formatNumber(utils.toEther(log.amountsIn, log.tokenIn.decimals))}]`}</span>
					</div>
					<div className="w-72 flex-grow text-center xl:w-44">
						<span>{utils.formatTokenSymbol(log.tokenOut?.symbol)} </span>
						<span>{`$${utils.formatNumber(utils.toEther(log.amountsOut, log.tokenOut.decimals) * parseFloat(log.tokenOut?.priceUSD ?? "1"), true)} `}</span>
						<span>{`[${utils.formatNumber(utils.toEther(log.amountsOut, log.tokenOut.decimals))}]`}</span>
					</div>
					<div className="flex w-32 flex-grow items-center justify-center">
						<Link href={`${log.txLink}`} target="_blank">
							<p className="flex items-center justify-center gap-1">
								{emoji("⛽️")} ${utils.formatNumber(log.txFeeInUsd, true)}{" "}
								{emoji(`${log.chainEmoji}`)}
							</p>
						</Link>
					</div>
					<div className="flex w-20 flex-grow justify-center">
						<p className="flex items-center gap-1">
							{emoji("✅")}
							{log.seconds}s
						</p>
					</div>
					<div className="w-32 flex-grow text-center">
						<p className="text-[#848489]">
							<TimeAgo date={log.createdAt} />
						</p>
					</div>
				</>
			)}

			{log?.type === "bridge" && (
				<>
					<div className="flex w-16 flex-grow justify-center text-center">
						{emoji(log.flag ?? "")}
					</div>
					<div className="w-20 flex-grow text-center">{log.country}</div>
					<div className="w-20 flex-grow text-center">{log.playerNumber}</div>
					<div className="w-52 flex-grow text-center">
						<p className="flex items-center justify-center gap-1">
							{emoji("⛩ Bridge")}
						</p>
					</div>
					<div className="w-72 flex-grow text-center xl:w-44">
						<span>{utils.formatTokenSymbol(log.tokenIn?.symbol)} </span>
						<span>{`$${utils.formatNumber(log.amountsIn * parseFloat(log.tokenIn?.priceUSD ?? "1"), true)} `}</span>
						<span>{`[${utils.formatNumber(log.amountsIn)}]`}</span>
					</div>
					<div className="w-72 flex-grow text-center xl:w-44">
						<span>{utils.formatTokenSymbol(log.tokenOut?.symbol)} </span>
						<span>{`$${utils.formatNumber(log.amountsOut* parseFloat(log.tokenOut?.priceUSD ?? "1"), true)} `}</span>
						<span>{`[${utils.formatNumber(log.amountsOut)}]`}</span>
					</div>
					<div className="flex w-32 flex-grow items-center justify-center">
						<Link href={`${log.txLink}`} target="_blank">
							<p className="flex items-center justify-center gap-1">
								{emoji("⛽️")} ${utils.formatNumber(log.txFeeInUsd, true)}{" "}
								{emoji(`${log.chainEmoji}`)}
							</p>
						</Link>
					</div>
					<div className="flex w-20 flex-grow justify-center">
						<p className="flex items-center gap-1">
							{emoji("✅")}
							{log.seconds}s
						</p>
					</div>
					<div className="w-32 flex-grow text-center">
						<p className="text-[#848489]">
							<TimeAgo date={log.createdAt} />
						</p>
					</div>
				</>
			)}
			{(log?.type === "manager" ||
				log?.type === "player" ||
				log?.type === "payroll" ||
				log?.type === "gift" ||
				log?.type === "seriesa" ||
				log?.type == "reward" ||
				log?.type === "presale") && (
					<>
						<div className="flex w-16 flex-grow items-center justify-center">
							<p>{emoji(`${log.flag}`)}</p>
						</div>
						<div className="w-20 flex-grow text-center">
							<p>{log.country}</p>
						</div>
						<div className="w-24 flex-grow text-center">
							<p>{log.playerNumber}</p>
						</div>
						<div className="flex w-52 flex-grow justify-center">
							<div className="flex items-center gap-1">
								{log?.type === "payroll" && emoji("💰")}
								{log?.type === "reward" && emoji("🏆")}
								{log?.type === "gift" && emoji("🎁")}
								{log?.type === "presale" ? (
									<>
										{emoji("🎟")}
										<span>{log?.type.toUpperCase()} Claim</span>
										{emoji("🔒")}
									</>
								) : (
									<span className="first-letter:uppercase">{`${log?.type} Claimed`}</span>
								)}
							</div>
						</div>
						<div className="w-72 flex-grow text-center xl:w-44">
							<span>{utils.formatTokenSymbol(log.tokenIn?.symbol)} </span>
							<span>{`$${utils.formatNumber(log.amountsIn * parseFloat(log.tokenIn?.priceUSD ?? "1"), true)} `}</span>
							<span>{`[${utils.formatNumber(log.amountsIn)}]`}</span>
						</div>
						<div className="w-72 flex-grow text-center xl:w-44">
							<p className="font-light text-white/30">-</p>
						</div>
						<div className="w-32 flex-grow text-center">
							<Link href={`${log.txLink}`} target="_blank">
								<p className="flex items-center justify-center gap-1">
									{emoji("⛽️")} ${utils.formatNumber(log.txFeeInUsd, true)}{" "}
									{emoji(`${log.chainEmoji}`)}
								</p>
							</Link>
						</div>
						<div className="flex w-20 flex-grow justify-center">
							<p className="flex items-center gap-1">
								{emoji("✅")}
								{log.seconds}s
							</p>
						</div>
						<div className="w-32 flex-grow text-center">
							<p className="text-[#848489]">
								<TimeAgo date={log.createdAt} />
							</p>
						</div>
					</>
				)}

			{log?.type === "subscribe" && (
				<>
					<div className="flex w-16 flex-grow items-center justify-center">
						<p>{emoji(`${log.flag}`)}</p>
					</div>
					<div className="w-20 flex-grow text-center">
						<p>{log.country}</p>
					</div>
					<div className="w-24 flex-grow text-center">
						<p>{log.playerNumber}</p>
					</div>
					<div className="flex w-52 flex-grow justify-center">
						<div className="flex items-center gap-1">
							{emoji("🧰 ")}
							<span className="first-letter:uppercase">Subscribed TWB Premium</span>
						</div>
					</div>
					<div className="w-72 flex-grow text-center xl:w-44">
						<span>{utils.formatTokenSymbol(log.tokenIn?.symbol)} </span>
						<span>{`$${utils.formatNumber(utils.toEther(log.amountsIn, log.tokenIn.decimals) * parseFloat(log.tokenIn?.priceUSD ?? "1"), true)} `}</span>
						<span>{`[${utils.formatNumber(utils.toEther(log.amountsIn, log.tokenIn.decimals))}]`}</span>
					</div>
					<div className="w-72 flex-grow text-center xl:w-44">
						<p className="font-light text-white/30">-</p>
					</div>
					<div className="w-32 flex-grow text-center">
						<Link href={`${log.txLink}`} target="_blank">
							<p className="flex items-center justify-center gap-1">
								{emoji("⛽️")} ${utils.formatNumber(log.txFeeInUsd, true)}{" "}
								{emoji(`${log.chainEmoji}`)}
							</p>
						</Link>
					</div>
					<div className="flex w-20 flex-grow justify-center">
						<p className="flex items-center gap-1">
							{emoji("✅")}
							{log.seconds}s
						</p>
					</div>
					<div className="w-32 flex-grow text-center">
						<p className="text-[#848489]">
							<TimeAgo date={log.createdAt} />
						</p>
					</div>
				</>
			)}

			{log?.type === "game-tapwar" && (
				<>
					<div className="flex w-16 flex-grow items-center justify-center">
						<p>{emoji(`${log.flag}`)}</p>
					</div>
					<div className="w-20 flex-grow text-center">
						<p>{log.country}</p>
					</div>
					<div className="w-24 flex-grow text-center">
						<p>{log.playerNumber}</p>
					</div>
					<div className="flex w-52 flex-grow justify-center">
						<div className="flex items-center gap-1">
							{emoji("👉👈")}
							<span className="first-letter:uppercase">Joined Tap of War</span>
						</div>
					</div>
					<div className="w-72 flex-grow text-center xl:w-44">
						<p className="font-light text-white/30">-</p>
					</div>
					<div className="w-72 flex-grow text-center xl:w-44">
						<p className="font-light text-white/30">-</p>
					</div>
					<div className="w-32 flex-grow">
						<Link href={`${log.txLink}`} target="_blank">
							<p className="flex items-center justify-center gap-1">
								{emoji("⛽️")} ${utils.formatNumber(log.txFeeInUsd ?? 0, true)}{" "}
								{emoji(`${log.chainEmoji}`)}
							</p>
						</Link>
					</div>
					<div className="w-16 flex-grow">
						<div className="flex items-center justify-center gap-1">{emoji("✅")}1s</div>
					</div>
					<div className="w-32 flex-grow text-center">
						<p className="text-[#848489]">
							<TimeAgo date={log.createdAt} />
						</p>
					</div>
				</>
			)}
		</>
	);
};
export default Log;
