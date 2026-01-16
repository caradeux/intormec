# 🔧 INTORMEC - Sitio Web Corporativo

![Version](https://img.shields.io/badge/version-2.0-orange)
![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)

Sitio web profesional para INTORMEC S.p.A., empresa especializada en soluciones metalmecánicas en Puchuncaví, Región de Valparaíso.

## ✨ Características

### 🎨 Diseño Moderno
- Animaciones suaves y profesionales
- Efectos parallax y partículas flotantes
- Transiciones elegantes entre secciones
- Diseño responsive perfecto

### 🖼️ Galería Interactiva
- 94 imágenes de proyectos
- Lightbox con navegación por teclado
- Filtros por categoría
- Lazy loading para mejor rendimiento

### 🎯 Secciones
- **Hero**: Presentación con efectos visuales
- **Servicios**: 7 servicios con animaciones
- **Galería**: Showcase de proyectos
- **Nosotros**: Historia y valores
- **Contacto**: Formulario y datos

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📂 Estructura del Proyecto

```
intormec/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Hero con parallax
│   │   ├── Services.tsx      # Servicios animados
│   │   ├── Gallery.tsx       # Galería interactiva
│   │   ├── About.tsx         # Sobre nosotros
│   │   ├── Contact.tsx       # Formulario contacto
│   │   └── Footer.tsx        # Pie de página
│   ├── imagenes/             # 94 imágenes de proyectos
│   ├── App.tsx               # Componente principal
│   ├── index.css             # Estilos y animaciones
│   └── main.tsx              # Punto de entrada
├── public/                   # Archivos estáticos
└── docs/                     # Documentación
```

## 🎨 Tecnologías

- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilos utility-first
- **Vite** - Build tool
- **Lucide React** - Iconos

## 📚 Documentación

- [INICIO_RAPIDO.md](INICIO_RAPIDO.md) - Guía de inicio
- [MEJORAS.md](MEJORAS.md) - Detalles técnicos
- [GUIA_VISUAL.md](GUIA_VISUAL.md) - Guía de efectos
- [RESUMEN_EJECUTIVO.md](RESUMEN_EJECUTIVO.md) - Resumen ejecutivo
- [CHECKLIST.md](CHECKLIST.md) - Lista de verificación

## 🎯 Características Principales

### Animaciones
- ✅ Parallax en Hero
- ✅ Partículas flotantes
- ✅ Scroll animations
- ✅ Hover effects
- ✅ Transiciones suaves

### Galería
- ✅ Lightbox interactivo
- ✅ Navegación con teclado
- ✅ Filtros por categoría
- ✅ Lazy loading
- ✅ Responsive design

### Optimizaciones
- ✅ Intersection Observer
- ✅ GPU acceleration
- ✅ Lazy loading
- ✅ Code splitting
- ✅ Performance optimizado

## 📱 Responsive

- ✅ Mobile (< 640px)
- ✅ Tablet (640px - 1024px)
- ✅ Desktop (> 1024px)
- ✅ Large screens (> 1536px)

## 🔧 Scripts Disponibles

```bash
npm run dev        # Desarrollo
npm run build      # Producción
npm run preview    # Vista previa
npm run lint       # Linter
npm run typecheck  # Verificar tipos
```

## 🖼️ Optimización de Imágenes

```bash
# Instalar herramienta
npm install sharp --save-dev

# Ejecutar optimización
node optimize-images.js
```

## 🎨 Personalización

### Cambiar Colores
```jsx
// Busca en los componentes:
className="bg-orange-600"
// Cambia por: bg-blue-600, bg-red-600, etc.
```

### Ajustar Animaciones
```css
// En src/index.css
animation: slideInUp 0.6s ease-out;
// Cambia 0.6s por otro valor
```

### Agregar Imágenes
```bash
# Copia imágenes a:
src/imagenes/
# Se cargarán automáticamente
```

## 📞 Contacto

**INTORMEC S.p.A.**
- 📱 +56 9 8992 7030
- 📱 +56 9 8906 6778
- 📧 contacto@intormec.cl
- 📍 Puchuncaví, Región de Valparaíso

## 📄 Licencia

Proyecto privado - INTORMEC S.p.A. © 2026

## 🙏 Créditos

- Diseño y desarrollo: Kiro AI
- Imágenes: INTORMEC S.p.A.
- Iconos: Lucide React
- Framework: React + Vite

---

**¡Sitio web profesional listo para impresionar! 🚀**
