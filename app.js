/**
 * Check if a object have a property named "id".
 * @param {Object} param0 Object
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