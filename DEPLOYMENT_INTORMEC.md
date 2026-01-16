# 🚀 Despliegue INTORMEC en Coolify

## 📋 Información del Despliegue

**Fecha:** 16 de Enero, 2026  
**Estado:** ✅ En Progreso

---

## 🎯 Detalles de la Aplicación

| Parámetro | Valor |
|-----------|-------|
| **Nombre** | intormec |
| **UUID** | ps0kc8ww8g00kogwg00s0cs0 |
| **Descripción** | INTORMEC - Sitio web de obras civiles y construcción en Puchuncaví, Valparaíso |
| **Repositorio** | https://github.com/caradeux/intormec |
| **Rama** | main |
| **Framework** | React + Vite + TypeScript |
| **Build Pack** | Dockerfile |

---

## 🔌 Configuración de Puertos

### Puerto Asignado: **3004**

| Aplicación | Puerto Externo | Puerto Interno | Estado |
|------------|----------------|----------------|--------|
| v0-asolux-website | 3001 | 3000 | ✅ En uso |
| sitio-imc | 3002 | 8080 | ✅ En uso |
| hh-catering-app | 3003 | 8080 | ⚠️ Detenido |
| **intormec** | **3004** | **3000** | 🚀 Desplegando |

**Mapeo de Puertos:** `3004:3000`

---

## 🌐 URLs de Acceso

### Local (Red Interna)
```
http://192.168.1.89:3004
```

### Coolify (Desarrollo)
```
http://ps0kc8ww8g00kogwg00s0cs0.localhost.sslip.io
```

### Producción (Cloudflare Tunnel)
```
https://intormec.cl
```

---

## 🔐 Variables de Entorno

| Variable | Valor | UUID |
|----------|-------|------|
| NODE_ENV | production | j0k8kgco8gw080sog80ow0s0 |
| PORT | 3000 | nw0swo4woc0scokow4so8k0k |
| NEXT_TELEMETRY_DISABLED | 1 | bsgcccgg0sgkwcwcko488gk4 |

---

## 📦 Información del Servidor

| Parámetro | Valor |
|-----------|-------|
| **Servidor** | localhost |
| **UUID** | uw8w4s8sww88ss40ssc0gso4 |
| **IP** | host.docker.internal |
| **Red Docker** | coolify |
| **Proxy** | Traefik |

---

## 🔄 Información del Despliegue

| Parámetro | Valor |
|-----------|-------|
| **Deployment UUID** | tgwk4wgsoscc4os4g4cwgcww |
| **Estado** | in_progress |
| **Commit** | HEAD |
| **Force Rebuild** | true |
| **Fecha Inicio** | 2026-01-16T01:31:36.000000Z |

---

## ☁️ Configuración de Cloudflare Tunnel

### Pasos para Configurar el Tunnel:

1. **Acceder a Cloudflare Zero Trust Dashboard**
   - https://one.dash.cloudflare.com/

2. **Crear/Editar Tunnel**
   - Ir a: Access → Tunnels
   - Seleccionar el tunnel existente o crear uno nuevo

3. **Configurar Public Hostname**

   **Hostname:**
   - Subdomain: (vacío para dominio raíz)
   - Domain: `intormec.cl`
   - Path: (vacío)

   **Service:**
   - Type: `HTTP` (NO HTTPS)
   - URL: `http://192.168.1.89:3004`

4. **Guardar Configuración**

### ⚠️ Notas Importantes:

- ✅ Usar **HTTP** (no HTTPS) para la conexión del tunnel
- ✅ Usar la IP local del servidor: `192.168.1.89`
- ✅ Usar el puerto asignado: `3004`
- ✅ Cloudflare maneja HTTPS automáticamente para acceso público
- ✅ El certificado SSL es gestionado por Cloudflare

---

## 🔍 Comandos de Verificación

### Verificar que la aplicación está corriendo:
```bash
docker ps | grep intormec
```

### Ver logs de la aplicación:
```bash
docker logs -f <container_id>
```

### Verificar puerto accesible localmente:
```bash
curl http://localhost:3004
```

### Verificar desde la red local:
```bash
curl http://192.168.1.89:3004
```

### Listar todos los contenedores:
```bash
docker ps -a
```

---

## 📊 Resumen de Aplicaciones Desplegadas

| # | Aplicación | Puerto | Estado | Dominio |
|---|------------|--------|--------|---------|
| 1 | v0-asolux-website | 3001 | ✅ Running | asolux.cl |
| 2 | sitio-imc | 3002 | ✅ Running | imc.cl |
| 3 | hh-catering-app | 3003 | ⚠️ Stopped | - |
| 4 | **intormec** | **3004** | 🚀 **Deploying** | **intormec.cl** |

---

## 🎯 Próximos Pasos

### 1. Verificar Despliegue
- [ ] Esperar a que el despliegue termine
- [ ] Verificar logs del contenedor
- [ ] Probar acceso local: http://192.168.1.89:3004

### 2. Configurar Cloudflare Tunnel
- [ ] Acceder a Cloudflare Dashboard
- [ ] Configurar hostname: intormec.cl
- [ ] Configurar service: http://192.168.1.89:3004
- [ ] Guardar y activar

### 3. Validación Final
- [ ] Probar acceso público: https://intormec.cl
- [ ] Verificar todos los links del sitio
- [ ] Verificar imágenes carguen correctamente
- [ ] Verificar slider funcione
- [ ] Verificar formulario de contacto
- [ ] Verificar galería de imágenes
- [ ] Verificar responsive en móvil

---

## 🛠️ Troubleshooting

### Si la aplicación no inicia:

1. **Verificar logs:**
   ```bash
   docker logs <container_id>
   ```

2. **Verificar variables de entorno:**
   - Revisar en Coolify UI
   - Verificar que PORT=3000

3. **Verificar Dockerfile:**
   - Asegurar que expone puerto 3000
   - Verificar comando de inicio

4. **Reiniciar aplicación:**
   ```bash
   # Desde Coolify UI o:
   docker restart <container_id>
   ```

### Si el puerto no responde:

1. **Verificar mapeo de puertos:**
   ```bash
   docker port <container_id>
   ```

2. **Verificar firewall:**
   ```bash
   sudo ufw status
   ```

3. **Verificar que el puerto no esté en uso:**
   ```bash
   netstat -tulpn | grep 3004
   ```

---

## 📝 Notas Adicionales

### Características del Sitio:
- ✅ SEO optimizado con meta tags completos
- ✅ Schema.org structured data
- ✅ Slider profesional con 5 slides
- ✅ Galería de 94 imágenes con lazy loading
- ✅ 6 servicios destacados
- ✅ Formulario de contacto
- ✅ Responsive design completo
- ✅ Animaciones y efectos modernos

### Tecnologías:
- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.2
- Tailwind CSS 3.4.1
- Lucide React (iconos)

### Optimizaciones:
- Lazy loading de imágenes
- Code splitting
- Minificación automática
- Caché optimizado
- Intersection Observer para animaciones

---

## 📞 Información de Contacto

**INTORMEC S.p.A.**
- 🌐 https://intormec.cl
- 📧 contacto@intormec.cl
- 📱 +56 9 8992 7030
- 📱 +56 9 8906 6778
- 📍 Puchuncaví, Región de Valparaíso, Chile

---

## ✅ Checklist de Despliegue

- [x] Aplicación creada en Coolify
- [x] Puerto 3004 asignado (siguiente disponible)
- [x] Variables de entorno configuradas
- [x] Despliegue iniciado
- [ ] Despliegue completado
- [ ] Aplicación accesible localmente
- [ ] Cloudflare Tunnel configurado
- [ ] Sitio accesible públicamente
- [ ] Validación completa realizada

---

**Estado Actual:** ⚠️ Requiere configuración manual en Coolify

**Última Actualización:** 2026-01-16 01:33:28 UTC

---

## ⚠️ Problema Identificado

El despliegue automático falló. Se requiere configuración manual en Coolify UI.

### Archivos Creados:
- ✅ `Dockerfile` - Multi-stage build con Node 20 + Nginx
- ✅ `nginx.conf` - Configuración optimizada para puerto 3000
- ✅ `.dockerignore` - Optimización de build
- ✅ Todos los archivos subidos al repositorio

### Pasos para Completar el Despliegue Manualmente:

1. **Acceder a Coolify UI**
   - URL: http://localhost:8000 (o tu URL de Coolify)
   - Navegar a: Projects → My first project → intormec

2. **Configurar Ports Mappings**
   - En la sección "Network"
   - Ports Exposes: `3000`
   - Ports Mappings: `3004:3000`
   - Guardar cambios

3. **Verificar Dockerfile Location**
   - En "Source"
   - Dockerfile Location: `/Dockerfile` (raíz del proyecto)
   - Build Pack: `dockerfile`

4. **Desplegar**
   - Click en "Deploy" o "Restart"
   - Esperar a que el build complete
   - Verificar logs en tiempo real

5. **Verificar Estado**
   - Estado debe cambiar a "running:healthy"
   - Probar acceso: http://192.168.1.89:3004

---

## 📝 Configuración Requerida en Coolify UI

### Network Tab:
```
Ports Exposes: 3000
Ports Mappings: 3004:3000
```

### Source Tab:
```
Git Repository: caradeux/intormec
Git Branch: main
Build Pack: dockerfile
Dockerfile Location: /Dockerfile
```

### Environment Variables (ya configuradas):
```
NODE_ENV=production
PORT=3000
NEXT_TELEMETRY_DISABLED=1
```
