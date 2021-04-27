import { Schema, model } from "mongoose";
import { gql } from "apollo-server";

export interface AccountInterface {
  _id: String;
  account_id: Number;
  limit: Number;
  products: [String];
}

export const AccountGQLType = gql`
  type Account {
    _id: ID
    account_id: Int
    limit: Int
    products: [String]
  }
`;

export const AccountSchemaMongo = new Schema({
  account_id: Number,
  limit: Number,
  products: [String],
}, {
  collection: 'accounts'
});

export const AccountModelMongo = model("accounts", AccountSchemaMongo);
