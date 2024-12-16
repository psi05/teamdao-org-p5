"use client";
import Log from "@/components/Shared/Log";
import PageTransition from "@/components/Shared/PageTransition";
import MobileMenu from "@/components/Shared/Sidebar/MobileMenu";
import DexData from "@/lib/Dex/dexPairs";
import LogInfo from "@/lib/Logs/logs";
import { AnimatePresence, motion } from "framer-motion";
import emoji from "react-easy-emoji";

export default function Page() {
	const { logData, logDataLoading, logDataError } = LogInfo();
	const { dexPairs, dexPairsLoading, dexPairsError } = DexData();

	return (
		<>
			<PageTransition>
				<section>
					<div className="main-container relative py-20">
						<div className="no-scrollbar h-[calc(100vh-150px)] w-full overflow-y-auto">
							<div className="inline-table w-full pr-3.5 xl:pr-0">
								<div className="sticky top-0 z-10">
									<div className="translucent">
										<div className="flex w-full items-center justify-between rounded-xl border border-teamdao_green py-3">
											<div className="w-16 flex-grow text-center">
												<p className="text-sm font-medium">FLAG</p>
											</div>
											<div className="w-20 flex-grow text-center">
												<p className="text-sm font-medium">COUNTRY</p>
											</div>
											<div className="w-24 flex-grow text-center">
												<p className="text-sm font-medium">PLAYER #</p>
											</div>
											<div className="w-52 flex-grow text-center">
												<p className="text-sm font-medium">TRANSACTIONS</p>
											</div>
											<div className="w-72 flex-grow text-center xl:w-44">
												<p className="flex items-center justify-center gap-0.5 text-sm font-medium">
													{emoji("↘️ IN")}
												</p>
											</div>
											<div className="w-72 flex-grow text-center xl:w-44">
												<p className="flex items-center justify-center gap-0.5 text-sm font-medium">
													{emoji("↗️ OUT")}
												</p>
											</div>
											<div className="w-32 flex-grow text-center">
												<p className="text-sm font-medium">GAS</p>
											</div>
											<div className="w-16 flex-grow text-center">
												<p className="text-sm font-medium">SPEED</p>
											</div>
											<div className="w-32 flex-grow text-center">
												<p className="text-sm font-medium">AGE</p>
											</div>
										</div>
									</div>
								</div>

								<div className="mt-3 w-full">
									{logDataLoading ? (
										<p className="text-center">Loading</p>
									) : logDataError ? (
										<p className="text-center">Error getting transactions</p>
									) : (
										<AnimatePresence>
											<div
												className="no-scrollbar w-full overflow-x-auto"
												style={{ maxWidth: "100%" }}
											>
												{logData.logs.length > 0 ? (
													logData.logs.map((log, index) => (
														<motion.div
															key={index}
															initial={{ opacity: 0, y: -20 }}
															animate={{ opacity: 1, y: 0 }}
															exit={{ opacity: 0, y: 20 }}
															className={`flex items-center justify-between rounded-xl py-1.5 text-white/90 ${
																index % 2 === 0
																	? "bg-gray-500/20"
																	: "bg-transparent"
															} w-full`}
														>
															<Log log={log} />
														</motion.div>
													))
												) : (
													<p>No logs available</p>
												)}
											</div>
										</AnimatePresence>
									)}
								</div>
							</div>
						</div>
					</div>

					<MobileMenu />
				</section>
			</PageTransition>
		</>
	);
}
