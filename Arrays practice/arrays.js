// array = variable like structure that can hold more than one value

let fruits = ['apple', 'banana', 'grapes', 'watermelon'];

// prints the array
console.log(fruits);

// index prints whuchever postion of the array I call = apple
console.log(fruits[0]);


// changes the item in array index 1 to plum
fruits[1] = 'plum';
console.log(fruits);

//ARRAY METHODS
// fruits.push adds an element to the end of an array
fruits.push('orange');
console.log(fruits);

// fruits.pop() removes the last element in an array and returns it
fruits.pop();
console.log(fruits);

// fruits.unshift adds elements to the beginning of an array
fruits.unshift('cake', 'burger')
console.log(fruits);

// fruits.shift() removes an element from the beginning
fruits.shift();
console.log(fruits)

// length finds the number of items in an array
let numOfFruits = fruits.length;
// finds the index of an item in an array
let index = fruits.indexOf('apple');

// Iterate through each item of an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

// Shortcut version
for (let fruit of fruits) {
    console.log(fruit)
}
console.log(fruits);
console.log(index);

// Sort through an array
fruits.sort();

//sort in reverse
fruits.sort().reverse();

// Challenge

// Given an array of numbers, return a new array where:

// All duplicate values are removed

// The remaining numbers are sorted in ascending order

// The solution must not mutate the original array

const challengeArray = [4, 2, 7, 2, 5, 4, 9, 1];

const newArray = [...new Set(challengeArray)];
console.log(newArray);

newArray.sort()
console.log(newArray);

