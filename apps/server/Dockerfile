FROM node:lts-alpine AS pruner

WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune --scope=server --docker

FROM node:lts-alpine AS installer

WORKDIR /app
COPY --from=pruner /app/out/json .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/turbo.json ./turbo.json
RUN npm install -g pnpm@8.15.6
RUN pnpm install --no-frozen-lockfile

FROM node:lts-alpine AS builder
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=pruner /app/out/full .
RUN npm install -g pnpm
RUN pnpm run build

FROM node:lts-alpine AS runner
WORKDIR /app
# it's should be access from the .env file
# ENV NODE_ENV=production
# ENV PORT=5000
# ENV DATABASE_URL=postgresql://neondb_owner:npg_7pDr4QXFfSEJ@ep-ancient-feather-a8kgzxle-pooler.eastus2.azure.neon.tech/neondb?sslmode=require
COPY --from=builder /app/ .

CMD ["node", "apps/server/dist/src/main"]