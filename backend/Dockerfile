FROM node:20-slim AS builder

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

# Install all dependencies (including devDeps for build + seeding)
COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci

# Copy source and build
COPY . .
RUN npx prisma generate
RUN npm run build

# Production image
FROM node:20-slim

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

# Copy package files and install ALL deps (needed for ts-node seed)
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Copy compiled output
COPY --from=builder /app/dist ./dist

# Copy prisma (schema + seed source + generated client)
COPY --from=builder /app/prisma ./prisma

# Copy tsconfig for ts-node to use during seeding
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Copy src so ts-node can resolve imports if needed
COPY --from=builder /app/src ./src

EXPOSE 4001

# Run migrations then start
CMD ["sh", "-c", "npx prisma db push && npm run start:prod"]
