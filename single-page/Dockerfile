# Use Node.js 18 with Alpine
FROM node:22 AS build


WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install


COPY . .
RUN npm install next
RUN npm run build

# RUN npm install -g fantasticon

FROM node:22 AS production

WORKDIR /app

COPY --from=build /app ./

EXPOSE 3000

ENV NODE_OPTIONS='--dns-result-order=ipv4first'

CMD ["npm", "run", "dev"]
