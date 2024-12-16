import { z } from "zod";

// Define the Token schema
const IToken = z.object({
	name: z.string().nullable(),
	decimals: z.number(),
	symbol: z.string().nullable(),
	chainId: z.string(),
	priceUSD: z.string().nullable(),
	address: z.string(),
	createdAt: z.optional(z.date()),
	updatedAt: z.optional(z.date()),
});

// Define ILogPresale schema
const ILogPresale = z.object({
	type: z.literal("presale"),
	flag: z.string(),
	country: z.string(),
	playerNumber: z.string(),
	amountsIn: z.number(),
	seconds: z.string(),
	txFee: z.number(),
	txLink: z.string(),
	txFeeInUsd: z.number(),
	txHash: z.string(),
	chainId: z.string(),
	chainEmoji: z.string(),
	tokens: z.array(IToken),
	tokenIn: IToken,
	usdValue: z.number(),
	reference: z.string(),
	createdAt: z.optional(z.date()),
	updatedAt: z.optional(z.date()),
	__v: z.number(),
});

// Existing schemas
const ILogNewPlayer = z.object({
	type: z.literal("new-player"),
	userId: z.number(),
	flag: z.optional(z.string()),
	country: z.optional(z.string()),
	playerNumber: z.string(),
	createdAt: z.optional(z.date()),
	updatedAt: z.optional(z.date()),
});

const ILogETF = z.object({
	type: z.literal("etf"),
	txType: z.union([z.literal("sell"), z.literal("buy")]),
	name: z.string(),
	playerNumber: z.string(),
	userId: z.number(),
	flag: z.optional(z.string()),
	amountsIn: z.number(),
	amountsOut: z.number(),
	seconds: z.string(),
	txFee: z.number(),
	txFeeInUsd: z.number(),
	txLink: z.string(),
	txHash: z.string(),
	chainId: z.string(),
	chainEmoji: z.string(),
	tokens: z.array(IToken),
	createdAt: z.optional(z.date()),
	updatedAt: z.optional(z.date()),
});

const ILogSniper = z.object({
	type: z.literal("sniper"),
	txType: z.union([z.literal("sell"), z.literal("buy")]),
	amountsIn: z.number(),
	amountsOut: z.number(),
	tokenIn: IToken,
	tokenOut: IToken,
	seconds: z.string(),
	txFee: z.number(),
	txFeeInUsd: z.number(),
	txLink: z.string(),
	txHash: z.string(),
	chainId: z.string(),
	chainEmoji: z.string(),
	flag: z.string(),
	country: z.string(),
	playerNumber: z.string(),
	createdAt: z.optional(z.date()),
	updatedAt: z.optional(z.date()),
});
const ILogBridge = z.object({
	type: z.literal("bridge"),
	amountsIn: z.number(),
	amountsOut: z.number(),
	tokenIn: IToken,
	tokenOut: IToken,
	seconds: z.string(),
	txFee: z.number(),
	txFeeInUsd: z.number(),
	txLink: z.string(),
	txHash: z.string(),
	chainId: z.string(),
	chainEmoji: z.string(),
	flag: z.string(),
	country: z.string(),
	playerNumber: z.string(),
	createdAt: z.optional(z.date()),
	updatedAt: z.optional(z.date()),
});
const ILogBuySell = z.object({
	type: z.union([z.literal("trade-team"), z.literal("ai"), z.literal("pirate")]),
	txType: z.union([z.literal("sell"), z.literal("buy")]),
	amountsIn: z.number(),
	amountsOut: z.number(),
	tokenIn: IToken,
	tokenOut: IToken,
	seconds: z.string(),
	txFee: z.number(),
	txFeeInUsd: z.number(),
	txLink: z.string(),
	txHash: z.string(),
	chainId: z.string(),
	chainEmoji: z.string(),
	flag: z.string(),
	country: z.string(),
	playerNumber: z.string(),
	createdAt: z.optional(z.date()),
	updatedAt: z.optional(z.date()),
});

const ILogRewards = z.object({
	type: z.union([
		z.literal("payroll"),
		z.literal("reward"),
		z.literal("gift"),
		z.literal("presale"),
		z.literal("seriesa"),
		z.literal("manager"),
		z.literal("player"),
	]),
	playerNumber: z.string(),
	flag: z.string(),
	country: z.string(),
	amountsIn: z.number(),
	tokenIn: IToken,
	usdValue: z.number(),
	seconds: z.string(),
	txFee: z.number(),
	txFeeInUsd: z.number(),
	txLink: z.string(),
	txHash: z.string(),
	chainId: z.string(),
	chainEmoji: z.string(),
	reference: z.string(),
	createdAt: z.optional(z.date()),
	updatedAt: z.optional(z.date()),
});

const ILogSubsribe = z.object({
	type: z.literal("subscribe"),
	playerNumber: z.string(),
	flag: z.string(),
	country: z.string(),
	amountsIn: z.number(),
	tokenIn: IToken,
	usdValue: z.number(),
	seconds: z.string(),
	txFee: z.number(),
	txFeeInUsd: z.number(),
	txLink: z.string(),
	txHash: z.string(),
	chainId: z.string(),
	chainEmoji: z.string(),
	tier: z.union([z.literal("Standard"), z.literal("Super"), z.literal("Supreme")]),
	createdAt: z.optional(z.date()),
	updatedAt: z.optional(z.date()),
});

const ILogGameTapwar = z.object({
	type: z.literal("game-tapwar"),
	userId: z.number(),
	flag: z.string(),
	country: z.string(),
	playerNumber: z.string(),
	txType: z.union([z.null(), z.string()]).optional(),
	name: z.union([z.null(), z.string()]).optional(),
	amountsIn: z.union([z.null(), z.number()]).optional(),
	amountsOut: z.union([z.null(), z.number()]).optional(),
	seconds: z.string(),
	txFee: z.number(),
	txLink: z.string(),
	txFeeInUsd: z.union([z.null(), z.number()]).optional(),
	txHash: z.union([z.null(), z.string()]).optional(),
	chainId: z.string(),
	chainEmoji: z.string(),
	tokens: z.union([z.null(), z.array(IToken)]).optional(),
	tokenIn: z.union([z.null(), IToken]).optional(),
	tokenOut: z.union([z.null(), IToken]).optional(),
	usdValue: z.union([z.null(), z.number()]).optional(),
	reference: z.union([z.null(), z.string()]).optional(),
	createdAt: z.optional(z.date()),
	updatedAt: z.optional(z.date()),
});

// Combine all schemas into a union type
export const ILog = z.union([
	ILogNewPlayer,
	ILogETF,
	ILogSniper,
	ILogBuySell,
	ILogRewards,
	ILogSubsribe,
	ILogPresale, // Added ILogPresale here
	ILogGameTapwar,
	ILogBridge
]);

export type ETF = {
	name: string;
	"24hour_change": string;
	volume: string;
	marketCap: number;
	logo: string;
};
