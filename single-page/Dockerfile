# Use Node.js 18 with Alpine 
FROM node:18-alpine AS build 
 
RUN apk add --no-cache libc6-compat 
 
WORKDIR /app 
 
COPY package.json package-lock.json ./ 
 
RUN npm install 
 
COPY . . 
 
RUN npm run build 
 
RUN npm install -g fantasticon 
 
FROM node:18-alpine AS production 
 
WORKDIR /app 
 
COPY --from=build /app ./ 
 
EXPOSE 3000 
 
ENV NODE_OPTIONS='--dns-result-order=ipv4first' 
 
CMD ["npm", "start"]