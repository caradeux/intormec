# Configuración de Email para Formulario de Contacto

## Variables de Entorno Requeridas en Coolify

Para que el formulario de contacto funcione correctamente, debes configurar las siguientes variables de entorno en Coolify:

### 1. Acceder a la Configuración de Variables de Entorno

1. Ve a Coolify Dashboard
2. Selecciona la aplicación **intormec**
3. Ve a la pestaña **Environment Variables**

### 2. Agregar las Siguientes Variables

```
SMTP_HOST=reseller14.prodns.cl
SMTP_PORT=465
SMTP_USER=contacto@intormec.cl
SMTP_PASSWORD=Intormec2026#
```

### 3. Configuración Detallada

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `SMTP_HOST` | `reseller14.prodns.cl` | Servidor SMTP del hosting |
| `SMTP_PORT` | `465` | Puerto SMTP seguro (SSL/TLS) |
| `SMTP_USER` | `contacto@intormec.cl` | Usuario del correo (email completo) |
| `SMTP_PASSWORD` | `Intormec2026#` | Contraseña del correo |

### 4. Guardar y Redesplegar

Después de agregar las variables de entorno:

1. Haz clic en **Save**
2. Haz clic en **Restart** o **Redeploy** para que los cambios surtan efecto

### 5. Verificar Funcionamiento

1. Accede al sitio web: https://intormec.cl
2. Ve a la sección de **Contacto**
3. Llena el formulario con datos de prueba
4. Envía el mensaje
5. Verifica que llegue un correo a `contacto@intormec.cl`

## Características del Sistema de Correo

### Formato del Correo

Los correos enviados desde el formulario incluyen:

- **Asunto**: "Nuevo mensaje de contacto - [Servicio seleccionado]"
- **De**: "Formulario Web INTORMEC" <contacto@intormec.cl>
- **Para**: contacto@intormec.cl
- **Responder a**: Email del cliente que envió el formulario

### Contenido del Correo

El correo incluye:
- Nombre completo del cliente
- Email del cliente (con enlace para responder)
- Teléfono del cliente (con enlace para llamar)
- Servicio de interés (si fue seleccionado)
- Mensaje completo
- Fecha y hora del envío (zona horaria de Chile)

### Diseño del Correo

- HTML responsive con diseño profesional
- Colores corporativos de INTORMEC (naranja y gris)
- Versión de texto plano como fallback
- Enlaces directos para responder o llamar

## Seguridad

### Medidas Implementadas

1. **Validación de Datos**:
   - Validación de formato de email
   - Campos obligatorios verificados
   - Sanitización de entrada

2. **Variables de Entorno**:
   - Contraseña NO está en el código fuente
   - Se configura solo en Coolify (servidor)
   - No es accesible desde el navegador

3. **Protección contra Spam**:
   - Rate limiting en el servidor
   - Validación de campos requeridos
   - Formato HTML seguro

## Solución de Problemas

### El formulario no envía correos

1. **Verificar variables de entorno**:
   ```bash
   # En Coolify, verifica que todas las variables estén configuradas
   ```

2. **Verificar logs del contenedor**:
   ```bash
   docker logs [container_id]
   ```

3. **Verificar conectividad SMTP**:
   - Puerto 465 debe estar abierto
   - Servidor SMTP debe ser accesible desde el contenedor

### Los correos llegan a spam

1. Configura SPF, DKIM y DMARC en tu dominio
2. Verifica que el servidor SMTP tenga buena reputación
3. Usa un servicio de email transaccional (opcional)

### Error "Authentication failed"

1. Verifica que la contraseña sea correcta
2. Verifica que el usuario sea el email completo
3. Verifica que la cuenta de correo esté activa

## Alternativas Futuras

Si deseas mejorar el sistema de correo, considera:

1. **SendGrid** o **Mailgun**: Servicios especializados en email transaccional
2. **Amazon SES**: Servicio de AWS para envío de correos
3. **Resend**: Servicio moderno para desarrolladores

Estos servicios ofrecen:
- Mejor deliverability (menos spam)
- Analytics de correos
- Templates avanzados
- APIs más robustas

## Soporte

Para cualquier problema con el sistema de correo:
- Revisa los logs en Coolify
- Verifica la configuración SMTP
- Contacta al proveedor de hosting si hay problemas de conectividad
