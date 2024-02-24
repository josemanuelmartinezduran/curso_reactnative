const fs = require('fs'); // Importamos el módulo fs para trabajar con el sistema de archivos

// Leemos un archivo de manera asincrónica usando un callback
fs.readFile('archivo.txt', 'utf8', (error, datos) => {
  if (error) {
    console.error('Error al leer el archivo:', error);
    return;
  }
  console.log('Contenido del archivo:', datos);
});
