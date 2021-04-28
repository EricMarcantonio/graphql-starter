import {gql} from "apollo-server";

export {IAccount, AccountModelMongo, AccountSchemaMongo} from './Account'

export const typeDefs = gql`
    type Account {
        _id: ID
        account_id: Int
        limit: Int
        products: [String]
    }

    type Query {
        account(account_id: Int, products: String): [Account]
    }
`
