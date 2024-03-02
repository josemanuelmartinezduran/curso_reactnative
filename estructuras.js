//Deep copy
const deepCopy = (array) => {
    const new_array = []
    array.forEach(element => {
        //Pregunta si es un arreglo
        if(element.length && typeof(element) == "object")
            new_array.push([...element])
        else
            new_array.push(element);
    });
    return new_array;
}

//Array
const arreglo = [[1,2,[1,2,3]], 32, "String", 1, 1.2456];
// Error
// arreglo = "Otra cosa"
// Error por que estoy reasignando 
// arreglo = [...arreglo]

//Hacer una copia del arreglo
const otro = deepCopy(arreglo);
otro[0].push(4);
console.log("Arreglo");
console.log(arreglo);
console.log("Otro");
console.log(otro);

//Asignación
//Hacer una función utilizando el
//es6 que haga una copia de un arreglo
//en donde en cada posición puede
//haber otro arreglo o no



