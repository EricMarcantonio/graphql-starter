import { Schema, model, Document } from "mongoose";
import {ITransaction} from "./transactions.schema";

// Interface
export interface IAccount extends Document{
  _id: String,
  account_id: Number,
  limit: Number,
  products: [String],
  transactions: [ITransaction]
}

const SAccount = new Schema<IAccount>({
  account_id: Number,
  limit: Number,
  products: [String],
  transactions: [] // ITransaction
});

export const MAccount = model<IAccount>("accounts", SAccount);