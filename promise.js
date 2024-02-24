const fs = require('fs').promises; // Importamos la versión de promesas del módulo fs

// Leemos un archivo de manera asincrónica usando una promesa
fs.readFile('archivo.txt', 'utf8')
  .then(datos => {
    console.log('Contenido del archivo:', datos);
  })
  .catch(error => {
    console.error('Error al leer el archivo:', error);
  });
