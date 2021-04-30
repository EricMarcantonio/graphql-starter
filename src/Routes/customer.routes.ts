import {getCustomerByEmail, getCustomerById, getCustomerWithAccount, getAllCustomers, getCustomerByUsername} from '../Database'

interface IGetCustomer {
    _id?: String,
    username?: String,
    email?: String,
    accounts?: [Number]
}

export const HandleGetCustomer = (parent: any, args: IGetCustomer, context: any, info: any) => {
    if (args._id !== undefined) return getCustomerById(args._id)
    if (args.email !== undefined) return getCustomerByEmail(args.email)
    if (args.accounts !== undefined) return getCustomerWithAccount(args.accounts)
    if (args.username !== undefined) return getCustomerByUsername(args.username)
    else return getAllCustomers()
}