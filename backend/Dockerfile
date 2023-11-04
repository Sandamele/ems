FROM node:16.17.0-bullseye-slim
ENV NODE_ENV production
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install
RUN npm install --save sequelize bcrypt cors jsonwebtoken
COPY . .

EXPOSE 5000

CMD ["npm","run", "build"]