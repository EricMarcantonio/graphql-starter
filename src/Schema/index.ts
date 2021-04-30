import {gql} from "apollo-server";

export {IAccount, MAccount} from './account.schema'
export {ITransaction, ISingleTransaction, MTransaction} from './transactions.schema'
export {ICustomer, Itier_and_details, MCustomer} from './customer.schema'

export const typeDefs = gql`
    type Account {
        _id: ID
        account_id: Int
        limit: Int
        products: [String]
        transactions: [Transaction]
    }
    
    type SingleTransaction {
        date: Int,
        amount: Int
        transaction_code: String,
        symbol: String,
        price: Int,
        total: Int
    }
    
    type Transaction {
        _id: String,
        account_id: Int,
        transaction_count: Int,
        bucket_start_date: String,
        bucket_end_date: String,
        transactions: [SingleTransaction]
    }
    
    type Customer {
        username: String,
        name: String,
        address: String,
        birthdate: Int,
        email: String,
        accounts: [Int],
        tier_and_details: Object
        
    }
    
    scalar Object

    type Query {
        account(account_id: Int, products: String): [Account],
        transaction(account_id: Int): [Transaction],
        customer(_id: String, username: String, email: String, accounts: [Int]): [Customer]
    }
`
