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
console.log("¿Tiene la propiedad 'id'?", hasId(house));
console.log(people);
console.log("¿Tiene la propiedad 'id'?", hasId(people));

console.log("**********************************************************")
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
console.log("El primer elemento es:", head(arrayOfNumbers));
console.log(arrayOfStrings);
console.log("El primer elemento es:",head(arrayOfStrings));
console.log(arrayOfObjects);
console.log("El primer elemento es:",head(arrayOfObjects));

console.log("****************************************************************")
/*******************************************************************************************************************/

/**
 * Return a new array that contains all elements of the array except the first. 
 * @param {Array} array - array
 */
const tail = ([firstElement, ...restElements]) => restElements;

console.log(arrayOfNumbers)
console.log("Nuevo array sin el primer elemento:", tail(arrayOfNumbers));
console.log(arrayOfStrings);
console.log("Nuevo array sin el primer elemento:",tail(arrayOfStrings));
console.log(arrayOfObjects);
console.log("Nuevo array sin el primer elemento:",tail(arrayOfObjects));

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
console.log("Array nuevo con el primer elemento en el final:", swapFirstToLast(arrayOfNumbers));
console.log(arrayOfStrings);
console.log("Array nuevo con el primer elemento en el final:",swapFirstToLast(arrayOfStrings));
console.log(arrayOfObjects);
console.log("Array nuevo con el primer elemento en el final:",swapFirstToLast(arrayOfObjects));

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
console.log("Objecto nuevo sin la propiedad 'id':", excludeId(house));
console.log(people);
console.log("Objecto nuevo sin la propiedad 'id':", excludeId(people));
console.log(pet);
console.log("Objecto nuevo sin la propiedad 'id':", excludeId(pet));

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
console.log("Nuevo array de palabras que empiezan por 'A':", wordsStartingWithA(arrayOfNames));
console.log(arrayOfStrings);
console.log("Nuevo array de palabras que empiezan por 'A':", wordsStartingWithA(arrayOfStrings));
console.log(arrayOfFruits);
console.log("Nuevo array de palabras que empiezan por 'a':", wordsStartingWithA(arrayOfFruits));

console.log("************************************************************")
/*******************************************************************************************************************/
/**
 * Admit multiple strings and return a new string concatenating and separated with "|". 
 * @param  {...String} args - Multiples strings
 */
const concat = (...args) => args.join("|");

console.log("Tipo", "Casos", "Resultado");
console.log("Nuevo string:", concat("Tipo", "Casos", "Resultado"));
console.log("días", "meses", "años");
console.log("Nuevo string:", concat("días", "meses", "años"));

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

/**
 * Given an array return a new array with first and second elements swaped. 
 * @param {Array} array
 */
const swapFirstSecond = ([firstElement, secondElement, ...allOtherElements]) => {
    return [secondElement,firstElement, ...allOtherElements];
}

console.log(arrayOfNames);
console.log("Array nuevo con el primer y segundo elemento intercanviados:", swapFirstSecond(arrayOfNames));
console.log(arrayOfStrings);
console.log("Array nuevo con el primer y segundo elemento intercanviados:", swapFirstSecond(arrayOfStrings));
console.log(arrayOfFruits);
console.log("Array nuevo con el primer y segundo elemento intercanviados:", swapFirstSecond(arrayOfFruits));

console.log("*******************************************************")
/********************************************************************/
/**
 * Check if every string starts by the character given.
 * @param {String} char - a character
 * @param  {...String} strings - multiple strings
 */
const firstEqual = (char, ...strings) => {
    return strings
    .every(([firstChar, ...allOtherChar]) => firstChar === char);
}

const char = "B";

console.log("¿", "apple", "banana", "avocado", "pears", "apricots", "empiezan por el carácter", char, "?", firstEqual(char, "apple", "banana", "avocado", "pears", "apricots"));

console.log("¿","Banana", "Boy", "Button", "empiezan por el carácter", char, "?", firstEqual(char, "Banana", "Boy", "Button"));

console.log("*******************************************************")
/********************************************************************/
/**
 * Given multiple arrays, return the longest.
 * @param  {...Array} arrays 
 */
const longest = (...arrays) => {
    arrays.sort((a,b) => b.length - a.length);
    [longestArray, ...allOtherArrays] = arrays;
    return longestArray;
}

const longestArrayEver = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 8, 3, 2, 7, 9, 5, 0, 2, 8, 8, 4, 1, 9, 7, 1, 6, 9, 3, 9, 9, 3, 7, 5, 1, 0, 5, 8, 2, 0, 9, 7, 4, 9, 4, 4, 5, 9, 2, 3, 0, 7, 8, 1, 6, 4, 0, 6, 2, 8, 6, 2, 0, 8, 9, 9, 8, 6, 2, 8, 0, 3, 4, 8, 2, 5, 3, 4, 2, 1, 1, 7, 0, 6, 7, 9, 8, 2, 1, 4];
console.log("Dados los siguientes arrays:", arrayOfObjects, arrayOfNames, longestArrayEver, arrayOfFruits);
console.log("el array mas largo es:", longest(arrayOfFruits, arrayOfNames, arrayOfObjects, longestArrayEver));

console.log("*******************************************************")
/********************************************************************/
/**
 * Given a character and a string, return the number of times the character appears in the string.
 * @param {String} string
 * @param {String} char - character
 */
const searchInStringV1 = (string, char) => {
    return Array.from(string)
    .reduce((acc,character) => acc + (character === char? 1 : 0), 0);
}

const word = "electroencefalografista";
const vowels = ["a", "e", "i", "o", "u"];

vowels.map(vowel => {
    console.log(`¿Cuántas veces aparece el carácter "${vowel}" en "${word}"?: ${searchInStringV1(word, vowel)}`);
})

console.log("*******************************************************")
/********************************************************************/

/**
 * Given a character and a string, return the number of times the character appears in the string.
 * Without using Array.reduce().
 * @param {String} string
 * @param {String} char - character
 */
const searchInStringV2 = (string, char) => {
    return Array.from(string)
    .filter(character => character === char)
    .length;
}

vowels.map(vowel => {
    console.log(`¿Cuántas veces aparece el carácter "${vowel}" en "${word}"?: ${searchInStringV2(word, vowel)}`);
})

console.log("*******************************************************")
/********************************************************************/
/**
 * Given a string, return all their letters alphabetically sorted.
 * @param {String} string 
 */
const sortCharacters = string => {
    const copyOfString = [...string];
    return copyOfString
    .sort()
    .join("");
}

const wordWithAllVowels = "eunoia";

console.log("Dada la palabra", word);
console.log("sus letras ordenadas son:",sortCharacters(word));
console.log("Dada la palabra",wordWithAllVowels);
console.log("sus letras ordenadas son:", sortCharacters(wordWithAllVowels));

console.log("*******************************************************")
/********************************************************************/
/**
 * Return all strings joined in a new string in uppercase and separed by "!".
 * @param  {...String} strings - The words you want shout.
 */
const shout = (...strings) => {
    return strings
    .map(string => string.toUpperCase())
    .join("!") 
    + "!";
}

console.log("Si me dan","hello", "world","but","shouting", "grito", shout("hello", "world","but","shouting"))

console.log("*******************************************************")
/********************************************************************/


const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

//A. Obtain a new list with a new property "IVA" (21% taxes) applied 
// to each product.
/**
 * Add the property IVA to each object of the array. 
 * IVA = element.price*0.21
 * @param {Object[]} shoppingCart 
 */
const addIva = shoppingCart => {
    return shoppingCart.
    map(element => ({
        ...element,
        iva : element.price*0.21
    }))
}

const shoppingCartWithIva = addIva(shoppingCart);
console.log("Datos iniciales")
console.log("shoppingCart", shoppingCart);

console.log("-----------------------------------------------");
console.log("A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.");

//B. Sort descendingly by units
console.log("B. Ordena la lista de más a menos unidades.")

shoppingCartWithIva.sort((a,b) => b.units - a.units);
console.log("shoppingCartWithIva", shoppingCartWithIva);
console.log("-----------------------------------------------");

//C. Obtain the subtotal spended in "Droguería"
const subtotalDrugstore = shoppingCartWithIva
.filter(element => element.category === "Droguería")
.reduce((total,element) => {
    total += element.price*element.units;
    return total;
}, 0);

console.log("C. Obtén el subtotal gastado en droguería.")

console.log("Subtotal 'Drogería'", subtotalDrugstore, "€");
console.log("-----------------------------------------------");

//D. Show the list in console following format and 
// sorted by category
//Format: "Producto -> Precio Total €".

const sortByCategory = (a,b) => {
    if (a.category > b.category) {
      return 1;
    }
    if (a.category < b.category) {
      return -1;
    }
    // a must be equal to b
    return 0;
}

const printShoppingCart = shoppingCart => {
    console.log(shoppingCart
    .sort(sortByCategory)
    .map(element => element.category)
    .filter((value, index, self) => self.indexOf(value) === index)
    .join(" >> "))

    console.log("Producto -> Precio Total €")

    shoppingCart
    .sort(sortByCategory)
    .map(element => {
        console.log(element.product, "->",element.price*element.units, "€");
    })
}

console.log("D. Obtén la lista por consola en formato 'Producto -> Precio Total €' y ordenada por categoría.")
printShoppingCart(shoppingCart);