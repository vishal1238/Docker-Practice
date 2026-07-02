FROM node

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY index.js index.js



CMD [ "node","index.js" ]
#from node - base image
#copy source dist
#the lines are called is layers