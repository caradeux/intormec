// Script para optimizar imágenes
// Instalar: npm install sharp --save-dev
// Ejecutar: node optimize-images.js

const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'src', 'imagenes');
const outputDir = path.join(__dirname, 'public', 'gallery');

// Crear directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('📸 Optimizador de imágenes para INTORMEC');
console.log('=========================================\n');

// Listar todas las imágenes
const images = fs.readdirSync(imageDir).filter(file => 
  file.toLowerCase().endsWith('.jpg') || 
  file.toLowerCase().endsWith('.jpeg') || 
  file.toLowerCase().endsWith('.png')
);

console.log(`✅ Encontradas ${images.length} imágenes`);
console.log('\nPara optimizar las imágenes, ejecuta:');
console.log('npm install sharp --save-dev');
console.log('\nLuego descomenta el código de optimización en este archivo.\n');

// Descomentar para usar sharp (requiere instalación)
/*
const sharp = require('sharp');

async function optimizeImages() {
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const inputPath = path.join(imageDir, image);
    const outputPath = path.join(outputDir, image);
    
    try {
      await sharp(inputPath)
        .resize(1200, 800, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .jpeg({ quality: 85, progressive: true })
        .toFile(outputPath);
      
      console.log(`✓ Optimizada: ${image}`);
    } catch (error) {
      console.error(`✗ Error con ${image}:`, error.message);
    }
  }
  
  console.log('\n✅ Optimización completada!');
}

optimizeImages();
*/
