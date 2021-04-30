import os

os.system("docker build . -t graphql-node")
os.system("docker tag graphql-node:latest graphql-node:latest")
os.system("docker push graphql-node:latest")