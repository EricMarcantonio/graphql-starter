import { ApolloServer, gql } from "apollo-server";
import { HandleGetPost } from "./Routes";

const resolvers = {
  Query: {
    posts: HandleGetPost,
  },
};

const typeDefs = gql`
  type Post {
    userId: Int
    id: Int
    title: String
    body: String
  }

  type Query {
    posts(id: Int): [Post]
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server
  .listen(4000)
  .then((info) => {
    console.log(info.address + info.port);
  })
  .catch((err) => {
    console.error(err);
  });
