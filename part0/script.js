let firstName = 'Camilo';
let firstNameWithUppercase = firstName.toUpperCase();
// This convert my let in a new let with uppercase letter

const workingTime = ' is learning';

console.log(firstNameWithUppercase + workingTime);

let newArray = [];
let arrayBigger = newArray.concat(124);

console.log(arrayBigger);

let newObject = {
    name: 'Camilo',
    age: 23,
    hobbie: ['football', 'Rocket League']
};

const secondName = 'name';
console.log(newObject[secondName]);
console.log(newObject.hobbie[1]);

// In the next part i'm going to use a function in a variable

let functionVar = (param1, param2) => {
    return param1 * param2;
}
console.log(functionVar(3, 3));
// But i can use the parameters out of the function like i'm going to use now
let op1 = 5;
let op2 = 10;

console.log(functionVar(op1, op2));
