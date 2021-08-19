// Sorting an Array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits);

// Reversing an Array
// reverse()
// first sort the elements of array then reverse the order of the elements with reverse() method

fruits.reverse();

console.log(fruits);

// Numeric Sort

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
	return a - b;
});

console.log(points);

// same trick to sort an array descending

points.sort(function (a, b) {
	return b - a;
});

console.log(points);
