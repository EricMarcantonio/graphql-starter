import { Schema, model, Document } from 'mongoose';

export interface Itier_and_details {
    tier: String,
    benefits: [String],
    active: Boolean,
    id: String
}

export interface ICustomer extends Document{
    _id: String,
    username: String,
    name: String,
    address: String,
    birthdate: Date,
    email: String,
    accounts: [Number],
    tier_and_details: Object
}

export const SCustomer = new Schema<ICustomer>({
    username: String,
    name: String,
    address: String,
    birthdate: Date,
    email: String,
    accounts: [Number],
    tier_and_details: Object
})

export const MCustomer = model<ICustomer>("customers", SCustomer)