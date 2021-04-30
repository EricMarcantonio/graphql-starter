import {getAllTransactions, getTransactionByAccountId} from '../Database'

interface IGetTransaction {
    account_id: Number
}

export const HandleGetTransactions = (parent: any, args: IGetTransaction, context: any, info: any) => {
    if (args.account_id !== undefined) return getTransactionByAccountId(args.account_id)
    else return getAllTransactions()
}