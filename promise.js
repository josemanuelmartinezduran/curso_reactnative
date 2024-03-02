const fs = require('fs').promises; // Importamos la versión de promesas del módulo fs

const funcionPromesa = (n) => {
  if(n>0){
    return Promise.resolve(3);
  } else {
    return Promise.reject("Error no puedes usar negativos")
  }
}

funcionPromesa(-5).then((x) => {
  console.log(x);
}).catch(error => console.log(error));

// Leemos un archivo de manera asincrónica usando una promesa
fs.readFile('archvo.txt', 'utf8')
  .then(datos => {
    console.log('Contenido del archivo:', datos);
  })
  .catch(error => {
    console.error('Error al leer el archivo:', error);
  });
