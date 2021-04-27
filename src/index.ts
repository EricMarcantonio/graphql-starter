import { ApolloServer } from "apollo-server";
import { Mongoose } from "mongoose";

import { AccountModelMongo } from "./Schema";

const mongoose = new Mongoose();

mongoose
  .connect("mongodb://localhost:27017/sample_analytics", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then((e) => {
    AccountModelMongo.find({}).then((docs) => {
      console.log(docs);
    });
  }).catch((err) => {
    console.log(err)
  })

// const resolvers = {
//   Query: {
//     posts: () => null,
//   },
// };

// const typeDefs = null;

// const server = new ApolloServer({ typeDefs, resolvers });

// // The `listen` method launches a web server.
// server
//   .listen(4000)
//   .then((info) => {
//     console.log(info.address + info.port);

//   })
//   .catch((err) => {
//     console.error(err);
//   });
