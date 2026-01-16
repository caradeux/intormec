# 🚀 Instrucciones de Despliegue INTORMEC

## ✅ Archivos Preparados

Todos los archivos necesarios han sido creados y subidos al repositorio:

- ✅ `Dockerfile` - Build multi-stage optimizado
- ✅ `nginx.conf` - Servidor web configurado
- ✅ `.dockerignore` - Optimización de build
- ✅ Código fuente completo con SEO y slider

---

## 📋 Pasos para Desplegar en Coolify

### 1. Acceder a Coolify
```
URL: http://localhost:8000
```

### 2. Navegar a la Aplicación
```
Projects → My first project → intormec
```

### 3. Configurar Network (IMPORTANTE)

En la pestaña **"Network"**:

**Ports Exposes:**
```
3000
```

**Ports Mappings:**
```
3004:3000
```

**Captura de referencia:**
- El campo "Ports Exposes" debe tener: `3000`
- El campo "Ports Mappings" debe tener: `3004:3000`

### 4. Verificar Source

En la pestaña **"Source"**:

```
Git Repository: caradeux/intormec
Git Branch: main
Build Pack: dockerfile
Dockerfile Location: /Dockerfile
```

### 5. Desplegar

1. Click en el botón **"Deploy"** o **"Restart"**
2. Esperar a que el build complete (puede tomar 2-5 minutos)
3. Monitorear los logs en tiempo real

### 6. Verificar Estado

Una vez completado:
- Estado debe mostrar: **"running:healthy"**
- Probar acceso local: `http://192.168.1.89:3004`

---

## 🔍 Verificación Post-Despliegue

### Verificar Contenedor
```bash
docker ps | grep intormec
```

### Ver Logs
```bash
docker logs -f <container_id>
```

### Probar Acceso Local
```bash
curl http://localhost:3004
curl http://192.168.1.89:3004
```

---

## ☁️ Configurar Cloudflare Tunnel

Una vez que la aplicación esté corriendo:

### 1. Acceder a Cloudflare Dashboard
```
https://one.dash.cloudflare.com/
```

### 2. Ir a Tunnels
```
Access → Tunnels → [Tu Tunnel]
```

### 3. Agregar Public Hostname

**Hostname:**
- Subdomain: (vacío para dominio raíz)
- Domain: `intormec.cl`
- Path: (vacío)

**Service:**
- Type: `HTTP` (NO HTTPS)
- URL: `http://192.168.1.89:3004`

### 4. Guardar y Probar
```
https://intormec.cl
```

---

## 📊 Puertos Asignados

| Aplicación | Puerto | Estado |
|------------|--------|--------|
| v0-asolux-website | 3001 | ✅ Running |
| sitio-imc | 3002 | ✅ Running |
| hh-catering-app | 3003 | ⚠️ Stopped |
| **intormec** | **3004** | 🔄 **Por desplegar** |

---

## 🛠️ Troubleshooting

### Si el build falla:

1. **Verificar logs en Coolify UI**
   - Ver errores específicos del build

2. **Verificar Dockerfile**
   - Debe estar en la raíz del repositorio
   - Verificar en GitHub: https://github.com/caradeux/intormec/blob/main/Dockerfile

3. **Verificar dependencias**
   - `package.json` debe tener todos los paquetes necesarios
   - `npm install` debe funcionar localmente

### Si el contenedor no inicia:

1. **Ver logs del contenedor:**
   ```bash
   docker logs <container_id>
   ```

2. **Verificar puerto 3000 interno:**
   - Nginx debe estar escuchando en puerto 3000
   - Verificar `nginx.conf`

3. **Verificar health check:**
   ```bash
   curl http://localhost:3004/health
   ```

### Si el puerto no responde:

1. **Verificar mapeo:**
   ```bash
   docker port <container_id>
   ```

2. **Verificar firewall:**
   ```bash
   sudo ufw status
   ```

3. **Verificar que 3004 no esté en uso:**
   ```bash
   netstat -tulpn | grep 3004
   ```

---

## 📞 Información de Contacto

**INTORMEC S.p.A.**
- 🌐 https://intormec.cl (una vez desplegado)
- 📧 contacto@intormec.cl
- 📱 +56 9 8992 7030
- 📍 Puchuncaví, Región de Valparaíso

---

## ✅ Checklist Final

- [ ] Acceder a Coolify UI
- [ ] Configurar Ports Mappings: `3004:3000`
- [ ] Verificar Dockerfile Location: `/Dockerfile`
- [ ] Iniciar despliegue
- [ ] Esperar a que complete (2-5 min)
- [ ] Verificar estado: "running:healthy"
- [ ] Probar acceso local: http://192.168.1.89:3004
- [ ] Configurar Cloudflare Tunnel
- [ ] Probar acceso público: https://intormec.cl
- [ ] Verificar todos los links del sitio
- [ ] Verificar slider de imágenes
- [ ] Verificar galería (94 imágenes)
- [ ] Verificar formulario de contacto
- [ ] Verificar responsive en móvil

---

**¡Listo para desplegar! 🚀**

Sigue los pasos en orden y la aplicación estará funcionando en minutos.
