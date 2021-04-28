import mongoose from "mongoose";
import {AccountModelMongo} from "../Schema";


export const getAllAccounts = () => {
    return AccountModelMongo.find({}).then((docs) => {
        return docs
    })
}

export const getAccountById = (account_id: Number) => {
    return AccountModelMongo.find({ account_id }).then((doc) => {
        return doc
    })
}

export const getAccountsWithProductX = (product: String) => {
    return AccountModelMongo.find({products: {$all: [product]}}).then((doc) => {
        return doc
    })
}