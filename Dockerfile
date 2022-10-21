FROM node:gallium-alpine
WORKDIR /src

COPY package.json .

RUN npm i

RUN npm install nodemon -g --quiet

COPY . . 

EXPOSE 8001

CMD ["npm", "run", "dev"]