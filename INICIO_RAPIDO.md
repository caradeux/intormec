# 🚀 Inicio Rápido - INTORMEC

## ⚡ Ejecutar el Proyecto

```bash
# 1. Instalar dependencias (ya hecho)
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir en navegador
# http://localhost:5173
```

---

## 🎨 Nuevas Características

### ✨ Lo que se agregó:

1. **Galería de Imágenes** 
   - 94 fotos de tus proyectos
   - Lightbox interactivo
   - Filtros por categoría

2. **Animaciones Modernas**
   - Parallax en Hero
   - Partículas flotantes
   - Efectos de scroll

3. **Efectos de Hover**
   - Tarjetas que se elevan
   - Iconos que rotan
   - Imágenes con zoom

4. **Navegación Mejorada**
   - Nueva sección "Galería"
   - Scroll suave
   - Menú actualizado

---

## 📂 Archivos Modificados

```
✅ src/App.tsx              - Agregada sección Galería
✅ src/components/Hero.tsx  - Parallax y animaciones
✅ src/components/Services.tsx - Efectos mejorados
✅ src/components/About.tsx - Animaciones de entrada
✅ src/components/Gallery.tsx - NUEVO componente
✅ src/index.css - Animaciones CSS personalizadas
```

---

## 🎯 Prueba Rápida

### 1. Hero Section
- Haz scroll → Ver parallax
- Hover en botones → Ver brillo

### 2. Servicios
- Scroll a la sección → Ver animación
- Hover en tarjetas → Ver elevación

### 3. Galería (NUEVA)
- Click en imagen → Abrir lightbox
- Usar flechas ← → para navegar
- Presionar ESC para cerrar
- Click en filtros → Ver categorías

### 4. Sobre Nosotros
- Hover en tarjetas → Ver efectos
- Hover en estadísticas → Ver escala

---

## 📱 Responsive

✅ Funciona perfecto en:
- 📱 Móviles
- 📱 Tablets
- 💻 Desktop
- 🖥️ Pantallas grandes

---

## 🎨 Personalización Rápida

### Cambiar colores:
```jsx
// Busca en los archivos:
className="bg-orange-600"
// Cambia por: bg-blue-600, bg-red-600, etc.
```

### Ajustar velocidad de animaciones:
```css
// En src/index.css
animation: slideInUp 0.6s ease-out;
// Cambia 0.6s por otro valor
```

---

## 📸 Optimizar Imágenes (Opcional)

```bash
# 1. Instalar herramienta
npm install sharp --save-dev

# 2. Ejecutar optimización
node optimize-images.js

# Esto reducirá el tamaño de las imágenes
# y mejorará la velocidad de carga
```

---

## 🐛 Solución de Problemas

### El servidor no inicia:
```bash
npm install
npm run dev
```

### Las imágenes no cargan:
- Verifica que estén en `src/imagenes/`
- Revisa los nombres de archivo

### Errores de TypeScript:
```bash
npm run build
# Los errores de tipo no afectan el funcionamiento
```

---

## 📚 Documentación Completa

- `MEJORAS.md` - Detalles técnicos completos
- `RESUMEN_MEJORAS.md` - Resumen de cambios
- `GUIA_VISUAL.md` - Guía visual de efectos
- `INICIO_RAPIDO.md` - Este archivo

---

## 🎉 ¡Listo!

Tu sitio está mejorado con:
- ✅ Galería profesional
- ✅ Animaciones modernas
- ✅ Efectos interactivos
- ✅ Diseño responsive
- ✅ Mejor experiencia de usuario

**Ejecuta `npm run dev` y disfruta! 🚀**

---

## 📞 Contacto del Proyecto

**INTORMEC S.p.A.**
- 📱 +56 9 8992 7030
- 📱 +56 9 8906 6778
- 📧 contacto@intormec.cl
- 📍 Puchuncaví, Región de Valparaíso

---

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview

# Verificar tipos
npm run typecheck

# Linter
npm run lint
```

---

**¡Éxito con tu sitio web! 💪**
