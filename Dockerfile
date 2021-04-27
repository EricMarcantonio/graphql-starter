FROM node:14

WORKDIR /usr/graphql-node

COPY src .

COPY package.json .

COPY tsconfig.json .

COPY yarn.lock .

RUN npm install

RUN npm run build

EXPOSE 4000

CMD ["node", "lib"]

