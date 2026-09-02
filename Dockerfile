# Stage 1: Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Optional build argument for client-side Cloudflare Turnstile public site key
ARG VITE_TURNSTILE_SITE_KEY
ENV VITE_TURNSTILE_SITE_KEY=$VITE_TURNSTILE_SITE_KEY

# Install all dependencies for building
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build Vite frontend and compile backend bundle via esbuild
RUN npm run build

# Stage 2: Production runtime stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Install curl for container HEALTHCHECK
RUN apk add --no-cache curl

# Install only production dependencies
COPY package*.json ./
RUN npm install --omit=dev && npm cache clean --force

# Copy compiled frontend and bundled server from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public

# Run as non-root user for security
USER node

EXPOSE 3000

# Health check to monitor container status in Docker / Portainer / Reverse Proxy
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:${PORT}/api/health || exit 1

CMD ["node", "dist/server.cjs"]
