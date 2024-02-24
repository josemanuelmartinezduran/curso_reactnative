// var -> version antigua de js antes de es6
// --------------------------------------------
// const -> valor que no cambia se elige siempre
// let -> valor que si cambia 


//Definimos tres arreglos
const numeros = [5, 12, 8, 130, 44];
const animales = ['perro', 'gato', 'caballo'];
const frutas = ['manzana', 'pera', 'naranja', 'plátano'];

// Find devuelve el primer valor del arreglo que da 
// verdadero para la función evaluada
const encontrado = numeros.find(elemento => elemento > 8);
console.log(encontrado); // 12

//Map devuelve un arreglo con todos los valores del arreglo original afectados por 
//la funcion parámetro
// const numeros = [5, 12, 8, 130, 44];
function f(x){
    return x * x;
}
const cuadrados = numeros.map(f);
console.log(cuadrados); // [ 25, 144, 64, 16900, 1936 ]

//Funcion 'named' de la sintaxis es6
const f1 = (x) => {return x * x};
const cuadrados_dos = numeros.map(f1);
console.log(cuadrados_dos);

//Funcion anónima de la sintaxis es6
const cuadrados_tres = numeros.map(x => x * x);
console.log(cuadrados_tres);

console.log(numeros.map(x => x * x));

// La funcion filter devuelve un arreglo con todos los elementos
// que dan true para la función parámetro
// const numeros = [5,     12,    8,     130,  44     ];
//                 [false, true,  false, true, true   ] 
//                 [12,130, 44]

function g(x){
    if(x>10){
        return true;
    } else {
        return false
    }
}
console.log(g(10));
const filtrados = numeros.filter(g);
console.log("Ejemplo de filter")
console.log(filtrados); // [4, 5]

function g1(x){
    return (x>10);
}
const filtrados_dos = numeros.filter(g1);
console.log("Ejemplo de filter dos")
console.log(filtrados_dos); // [4, 5]

const g2 = (x) => x > 10;
const filtrados_tres = numeros.filter(g2);
console.log("Ejemplo de filter tres")
console.log(filtrados_tres); // [4, 5]

const filtrados_cuatro = numeros.filter((x) => x > 10);
console.log("Ejemplo de filter cuatro")
console.log(filtrados_cuatro); // [4, 5]

console.log(`Ejemplo de filter cinco ${numeros.filter(x => x > 10)}`)

//Sort altera el arreglo y lo devuelve ordenandolo de 
// manera secuencial a menos que 
// se le indique otra cosa
// const frutas = ['manzana', 'pera', 'naranja', 'plátano'];

console.log("Ejemplo de Sort");
const arreglo_dos = frutas.sort();
arreglo_dos.push("zapote")
console.log(arreglo_dos);
console.log(frutas); // ['manzana', 'naranja', 'pera', 'plátano']


// const numeros = [5,12,8,130,44];
console.log(numeros);
console.log(numeros.sort((a, b)=>{ return b - a}));

// const numeros = [5,12,8,130,44];
console.log("Reduce")
const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); // 10

console.log(numeros);
numeros.forEach((item, index, array) => {
    if(index%2==0)
        array[index] = item + 1
}); // Imprime el cuadrado de cada número
console.log(numeros);

animales.push('caballo');
animales.push('mono');
animales.push('tigre');
console.log(animales); // ['perro', 'gato', 'caballo']

const ultimo = animales.pop();
console.log(ultimo); // 'caballo'
console.log(animales); // ['perro', 'gato']


const algunosAnimales = "Hola Mundo".slice(1, 3);
console.log(algunosAnimales); // ['gato', 'caballo']

console.log(frutas);
console.log(frutas.includes('manzana')); // true
console.log(frutas.includes('banana')); // false
console.log(frutas.indexOf('pera'));