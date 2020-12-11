/**
 * Check if a object have a property named "id".
 * @param {Object} object - Object
 */
const hasId = ({id}) =>  !(id === undefined);

const house = {
    id: 4,
    price: 45000,
    meters: 450
}

const people = {
    name: "Juan",
    age: 67
}

console.log(house);
console.log("Have property id?", hasId(house));
console.log(people);
console.log("Have property id?", hasId(people));

console.log("****************************************************************")
/*******************************************************************************************************************/
/**
 * Return the fist element of an array.
 * @param {Array} array - array
 */
const head = ([firstElement, ...restElements]) => firstElement;

const arrayOfNumbers = [1,2,3,4,5];
const arrayOfStrings = ["one","two","three"];
const arrayOfObjects = [house, people];

console.log(arrayOfNumbers)
console.log("The first element is:", head(arrayOfNumbers));
console.log(arrayOfStrings);
console.log("The first element is:",head(arrayOfStrings));
console.log(arrayOfObjects);
console.log("The first element is:",head(arrayOfObjects));

console.log("****************************************************************")
/*******************************************************************************************************************/

/**
 * Return a new array that contains all elements of the array except the first. 
 * @param {Array} array - array
 */
const tail = ([firstElement, ...restElements]) => restElements;

console.log(arrayOfNumbers)
console.log("New array without the first element:", tail(arrayOfNumbers));
console.log(arrayOfStrings);
console.log("New array without the first element:",tail(arrayOfStrings));
console.log(arrayOfObjects);
console.log("New array without the first element:",tail(arrayOfObjects));

console.log("****************************************************************")
/*******************************************************************************************************************/

/**
 * Return a new array with the first element of given array, in the last position.
 * @param {Array} array - array
 */
const swapFirstToLast = ([firstElement, ...restElements]) => {
    restElements.push(firstElement);;
    return restElements;
}

console.log(arrayOfNumbers)
console.log("New array with the first element at the end:", swapFirstToLast(arrayOfNumbers));
console.log(arrayOfStrings);
console.log("New array with the first element at the end:",swapFirstToLast(arrayOfStrings));
console.log(arrayOfObjects);
console.log("New array with the first element at the end:",swapFirstToLast(arrayOfObjects));

console.log("****************************************************************")
/*******************************************************************************************************************/

/**
 * Return a new object without the id property.
 * @param {Object} object - object
 */
const excludeId = ({id, ...restProperties}) => {
    return restProperties;
}

const pet = {
    id:87,
    animal: "dog",
    name: "Tomy"
}

console.log(house);
console.log("New object without id property:", excludeId(house));
console.log(people);
console.log("New object without id property:", excludeId(people));
console.log(pet);
console.log("New object without id property:", excludeId(pet));

console.log("************************************************************")
/*******************************************************************************************************************/

/**
 * Retrun a new array with words starting with "A" or "a".
 * @param {Array} array - Array
 */
const wordsStartingWithA = array => array.filter(element => element[0] === "a" || element[0] === "A");

const arrayOfNames = ["Rosa", "Ana", "Joana", "Andrea", "Antonio", "Juan"];
const arrayOfFruits =["apple", "banana", "avocado", "pears", "apricots"];

console.log(arrayOfNames);
console.log("New array with words starting with 'A':", wordsStartingWithA(arrayOfNames));
console.log(arrayOfStrings);
console.log("New array with words starting with 'A':", wordsStartingWithA(arrayOfStrings));
console.log(arrayOfFruits);
console.log("New array with words starting with 'A':", wordsStartingWithA(arrayOfFruits));

console.log("************************************************************")
/*******************************************************************************************************************/
/**
 * Admit multiple strings and return a new string concatenating and separated with "|". 
 * @param  {...String} args - Multiples strings
 */
const concat = (...args) => args.join("|");

console.log("Tipo", "Casos", "Resultado");
console.log("New string:", concat("Tipo", "Casos", "Resultado"));
console.log("días", "meses", "años");
console.log("New string:", concat("días", "meses", "años"));

console.log("*******************************************************")
/********************************************************************/
/**
 * Given an array of numbers returns a new array with all elements multiplied by the multiplier.
 * @param {Number[]} arr - Array of numbers
 * @param {Number} x - Multiplier
 */
const multArray = (arr, x) => {
    return arr
    .map(element => element*x)
}

const multiplier = 3;
console.log(arrayOfNumbers, "*", multiplier, "=", multArray(arrayOfNumbers, multiplier));

console.log("*******************************************************")
/********************************************************************/

/**
 * EXTRA EXERCICES
 * 
 */
//


/*
swapFirstSecond
Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido
intercambiado por el segundo.
TIP: No modifiques el array de entrada original.
longest
Implementa una función longest tal que admita multiples strings como argumento de entrada así como un carácter
cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.
TIP: No utilices bucles. No accedas al primer carácter con corchetes ([]).
searchInStringV1
Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter, devuelva
cuantas veces aparece dicho carácter en el string.
TIP: No utilices bucles.
TIP: Convierte el string a un array mediante Array.from() .
searchInStringV2
Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2 , encontrando otra alternativa sin usar
reduce .
TIP: No utilices bucles.
TIP: Convierte el string a un array mediante Array.from() .
sortCharacters
Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas
alfabéticamente.
TIP: No utilices bucles. No modifiques el string original de entrada.
TIP: Convierte el string a un array mediante Array.from() .
shout
Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras
concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.
TIP: No utilices bucles.
Lista de la compra
Dada la siguiente lista de la compra:
const shoppingCart = [
{ category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
{ category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
{ category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
{ category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
{ category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
{ category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
{ category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];
A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
B. Ordena la lista de más a menos unidades.
C. Obtén el subtotal gastado en droguería.
D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
TIP: No utilices bucles.
*/