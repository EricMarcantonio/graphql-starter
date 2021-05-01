import {ApolloServer} from "apollo-server";
import mongoose from "mongoose";

import {typeDefs} from "./Schema";
import {HandleGetAccounts, HandleGetTransactions, HandleGetCustomer} from './Routes'


mongoose
    .connect(`mongodb://${process.env.address || "127.0.0.1"}:27017/sample_analytics`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })

const resolvers = {
    Query: {
        account: HandleGetAccounts,
        transaction: HandleGetTransactions,
        customer: HandleGetCustomer
    },
};
const server = new ApolloServer({typeDefs, resolvers});

// The `listen` method launches a web server.
server
    .listen(4000)
    .then((info) => {
        console.log(info.address + info.port);

    })
    .catch((err) => {
        console.error(err);
    });
