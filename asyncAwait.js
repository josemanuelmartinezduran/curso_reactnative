const fs = require('fs').promises; // Importamos la versión de promesas del módulo fs

async function leerArchivo() {
  try {
    const datos = await fs.readFile('archivo.txt', 'utf8');
    console.log('Contenido del archivo:', datos);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
  }
}

leerArchivo(); // Llamamos a la función para leer el archivo
