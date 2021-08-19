// Array.forEach() method

// The forEach() method calls a function (a callback function) once for each array element.

const nums = [1, 2, 3, 4];
const newArr = [];
// forEach() method returns undefined value
nums.forEach((num) => {
	num = num + 10;
	newArr.push(num);
});

console.log(newArr);
