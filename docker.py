import os

os.system("docker build . -t graphql-node")
os.system('docker run -it -p 4000:4000 -e "address=10.0.0.230" graphql-node')