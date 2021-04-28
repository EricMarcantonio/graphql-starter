import {getAccountById, getAllAccounts, getAccountsWithProductX} from '../Database'

interface IGetAccounts {
    account_id: Number,
    product: String
}
export const HandleGetAccounts = (parent: any, args: IGetAccounts, context: any, info: any) => {
    if (args.account_id !== undefined) return getAccountById(args.account_id)
    if (args.product !== undefined) return getAccountsWithProductX(args.product)
    return getAllAccounts()
}