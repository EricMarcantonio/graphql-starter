import {ApolloServer, gql} from "apollo-server";
import mongoose from "mongoose";

import {AccountModelMongo, IAccount, typeDefs} from "./Schema";


mongoose
    .connect("mongodb://localhost:27017/sample_analytics", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })




const HandleGetAccounts = async (parent: any, args: IAccount, context: any, info: any) => {
    if (args.account_id) {
        return AccountModelMongo.find({account_id: args.account_id}).then((doc) => {
            return doc
        })
    } else if (args.products) {
        return AccountModelMongo.find({products: {$all: [args.products]}}).then((doc) => {
            return doc
        })
    } else {
        return AccountModelMongo.find({}).then((docs) => {
            return docs
        })
    }
}
const resolvers = {
    Query: {
        account: HandleGetAccounts,
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
