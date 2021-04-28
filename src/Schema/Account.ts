import { Schema, model, Document } from "mongoose";


export interface IAccount extends Document{
  _id: String;
  account_id: Number;
  limit: Number;
  products: [String];
}

export const AccountSchemaMongo = new Schema({
  account_id: Number,
  limit: Number,
  products: [String],
});

export const AccountModelMongo = model<IAccount>("accounts", AccountSchemaMongo);
