import { ILog } from "@/types";
import { deleteModel, model, models, Schema } from "mongoose";
import { z } from "zod";

const LogSchema = new Schema<z.infer<typeof ILog>>(
  {
    type: { type: String },
    userId: { type: Number },
    flag: { type: String },
    //@ts-ignore
    country: { type: String },
    playerNumber: { type: String },
    txType: { type: String },
    name: { type: String },
    amountsIn: { type: Number },
    amountsOut: { type: Number },
    seconds: { type: String },
    txFee: { type: Number },
    txLink: { type: String },
    txFeeInUsd: { type: Number },
    txHash: { type: String },
    chainId: { type: String },
    chainEmoji: { type: String },
    tokens: [],
    tokenIn: { type: Object },
    tokenOut: { type: Object },
    //@ts-ignore
    usdValue: { type: Number },
    reference: { type: String }
  },
  { timestamps: true },
);
if (models["logs"] != null) {
  deleteModel("logs");
}
export const Log = model("logs", LogSchema);
