# Use Node.js 18 with Alpine
FROM node:18-alpine AS build

# Install dependencies for Alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy package.json และ package-lock.json และติดตั้ง dependencies
COPY package.json package-lock.json ./
RUN npm install  # หรือใช้ npm ci หากมี package-lock.json

# ติดตั้ง Next.js CLI เพื่อให้พร้อมใช้งาน
RUN npm install next

# Copy โค้ดทั้งหมดที่เหลือและ build
COPY . .
RUN npm run build

# Setup production stage
FROM node:18-alpine AS production

WORKDIR /app

# Copy build files จากขั้นตอนก่อนหน้า
COPY --from=build /app ./

EXPOSE 3000

ENV NODE_OPTIONS='--dns-result-order=ipv4first'

CMD ["npm", "run", "dev"]
