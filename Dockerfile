# Production image for the MBTI test (Next.js, `next start`).
# Replaces the Nixpacks build, which pinned Node 20 via nixpacks.toml.

FROM node:22.23.4-alpine

RUN mkdir -p /app && chown node:node /app
USER node
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY --chown=node:node package.json package-lock.json ./
RUN npm ci

COPY --chown=node:node . .

ENV NODE_ENV=production
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
