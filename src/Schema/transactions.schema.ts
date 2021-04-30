import {Document, model, Schema} from "mongoose";

export interface ISingleTransaction {
    date: Date,
    amount: Number,
    transaction_code: String,
    symbol: String,
    price: Number,
    total: Number
}

export interface ITransaction extends Document {
    _id: String,
    account_id: Number,
    transaction_count: Number,
    bucket_start_date: Date,
    bucket_end_date: Date,
    transactions: [ISingleTransaction]
}

const STransaction = new Schema<ITransaction>({
    account_id: Number,
    transaction_count: Number,
    bucket_start_date: Date,
    bucket_end_date: Date,
    transactions: []
})

export const MTransaction = model<ITransaction>("transactions", STransaction)