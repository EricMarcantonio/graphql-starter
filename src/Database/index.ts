import {MAccount, MTransaction,MCustomer} from "../Schema";


export const getAllAccounts = () => {
    return MAccount.find({}).then((docs) => {
        return docs
    })
}

export const getAccountById = (account_id: Number) => {
    return MAccount.find({account_id}).then((doc) => {
        return doc
    })
}

export const getAccountsWithProductX = (product: String) => {
    return MAccount.find({products: {$all: [product]}}).then((doc) => {
        return doc
    })
}

export const getCustomerById = (_id: String) => {
    return MCustomer.find({_id}).then((docs) => {
        return docs
    })
}

export const getCustomerByEmail = (email: String) => {
    return MCustomer.find({email}).then((docs) => {
        return docs
    })
}

export const getCustomerByUsername = (username: String) => {
    return MCustomer.find({username}).then((docs) => {
        return docs
    })
}

export const getCustomerWithAccount = (account: [Number]) => {
    return MCustomer.find({accounts: {$all: account}}).then((docs) => {
        return docs
    })
}

export const getAllCustomers = () => {
    return MCustomer.find({}).then((docs) => {
        return docs;
    })
}

export const getTransactionByAccountId = (account_id: Number) => {
    return MTransaction.find({account_id}).then((docs) => {
        return docs
    })
}

export const getAllTransactions = () => {
    return MTransaction.find({}).then((docs) => {
        return docs
    })
}