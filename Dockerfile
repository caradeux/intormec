# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar TODAS las dependencias (incluyendo devDependencies)
RUN npm ci --include=dev

# Copiar el resto del código (incluyendo server.js)
COPY . .

# Build de la aplicación
RUN npm run build

# Etapa 2: Producción con Node.js
FROM node:20-alpine

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar TODAS las dependencias (necesarias para el servidor)
RUN npm ci

# Copiar el build de Vite y el servidor desde el builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./server.js

# Exponer puerto 3000
EXPOSE 3000

# Variables de entorno por defecto
ENV NODE_ENV=production
ENV PORT=3000

# Comando de inicio
CMD ["node", "server.js"]
