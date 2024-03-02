// Importamos el módulo fs para trabajar 
// con el sistema de archivos
const fs = require('fs'); 


// Leemos un archivo de manera asincrónica usando un callback
const a = fs.readFile('archivo.txt', 'utf8', (error, datos) => {
  if (error) {
    console.error('Error al leer el archivo:', error);
    return;
  }
  console.log('Contenido del archivo:', datos);
});

//console.log(a);
