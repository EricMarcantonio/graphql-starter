"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var data = {
    "beasts": [
        {
            "id": "md",
            "legs": 6,
            "binomial": "Musca domestica",
            "commonName": "housefly",
        },
        {
            "id": "nr",
            "legs": 8,
            "binomial": "Neriene radiata",
            "commonName": "filmy dome spider",
        },
        {
            "id": "cc",
            "legs": 2,
            "binomial": "Corvus corone",
            "commonName": "carrion crow",
        },
        {
            "id": "fc",
            "legs": 4,
            "binomial": "Felis catus",
            "commonName": "cat",
        }
    ]
};
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      type Beast {\n          id: ID\n          legs: Int\n          binomial: String\n          commonName: String\n      }\n  \n      type Query {\n          beasts: [Beast]\n      }\n  "], ["\n      type Beast {\n          id: ID\n          legs: Int\n          binomial: String\n          commonName: String\n      }\n  \n      type Query {\n          beasts: [Beast]\n      }\n  "])));
var resolvers = {
    Query: {
        // Returns array of all beasts.
        beasts: function () { return data.beasts; }
    }
};
var server = new apollo_server_1.ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
// The `listen` method launches a web server.
server.listen(4000);
var templateObject_1;
