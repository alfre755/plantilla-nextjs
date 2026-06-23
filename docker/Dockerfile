# Stage 1: Base - Configuración común
# Next.js 16 requiere Node.js 18.18+ (usamos Node 24 que es compatible)
FROM node:24-alpine AS base

#TODO: Revisar corepack para estandarizar que librerias y que no levantar
# Instalar pnpm globalmente
RUN corepack enable && corepack prepare pnpm@10.18.2 --activate

# Instalar netcat para wait_for_port en entrypoint
RUN apk add --no-cache netcat-openbsd
# Instalar libc6-compat para compatibilidad con módulos nativos
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Stage 2: Dependencies - Solo instalar dependencias
FROM base AS deps

# Copiar archivos de dependencias primero (para cache de Docker)
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias (incluyendo devDependencies para compilar)
RUN pnpm install --frozen-lockfile

# Stage 3: Builder - Compilar la aplicaciรณn
FROM base AS builder

# Copiar node_modules desde el stage deps
COPY --from=deps /app/node_modules ./node_modules
# ( COPY <origen> <destino>) para que se copien todos los archivos del proyecto, toma dockerignore en cuenta
COPY . . 

ENV NEXT_TELEMETRY_DISABLED=1
# Build the application with dummy values for env variables
ENV DATABASE_URL=postgresql://dummy:dummy@localhost:5432/dummy
ENV BETTER_AUTH_SECRET=dummy_secret_for_build
ENV BETTER_AUTH_URL=http://localhost:3000
ENV NEXT_PUBLIC_APP_URL=http://localhost:3000

# Compilar la aplicaciรณn Next.js
# Next.js 16 se instala automรกticamente desde package.json durante pnpm install
# El comando 'pnpm build' ejecuta 'next build' definido en package.json
RUN SKIP_ENV_VALIDATION=true pnpm build

# Stage 4: Production - Solo lo necesario para ejecutar
FROM base AS production
# (WORKDIR <directorio>) para establecer el directorio de trabajo con standalone solo toma lo necesario para ejecutar la aplicacion
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs


# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml ./
# Instalar dependencias de producción
RUN pnpm install --frozen-lockfile --prod

# Instalar solo drizzle-kit (necesario para migraciones en runtime)
# Está en devDependencies pero lo necesitamos en producción para ejecutar migraciones
RUN pnpm add drizzle-kit

# Copiar el build de Next.js desde el stage builder
COPY --from=builder /app/public ./public

# Copiar otros archivos necesarios para runtime (next/standalone)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

COPY --from=builder --chown=nextjs:nodejs /app/drizzle ./drizzle
COPY --from=builder --chown=nextjs:nodejs /app/drizzle.config.ts ./
COPY --from=builder --chown=nextjs:nodejs /app/tsconfig.json ./
COPY --from=builder --chown=nextjs:nodejs /app/src/db ./src/db

# Copiar entrypoint y hacerlo ejecutable (ANTES de cambiar de usuario)
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Cambiar al usuario no-root (DESPUÉS de instalar herramientas y copiar archivos)
USER nextjs

# Exponer el puerto
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Usar entrypoint en lugar de CMD directo
ENTRYPOINT ["/entrypoint.sh"]
CMD ["node", "server.js"]