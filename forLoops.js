// // Different kinds of loops in js:

// // 1. for - loops through a block of code a number of times
// // 2. for/in - loops through the properties of an object
// // 3. for/of - loops through the values of an iterable object
// // 4. while - loops through a block of code while a specified codition is true
// // 5. do/while - also loops through a block of code while a specified condition is true

// // 1. for loop :

// // example1:

// let sum = 0;
// for (let i = 0; i < 5; i++) {
// 	sum += i + 1;
// }
// console.log(sum); // 15

// // example2:

// let cars = [1, 2, 3, 4];
// for (let i = 0, len = cars.length, text = ""; i < len; i++) {
// 	text += "a";
// 	console.log(text);
// }

// // example3:

// let i = 2;
// let len = cars.length;
// let text = "";
// for (; i < len; i++) {
// 	text += "b";
// }
// console.log(text);

// // example4:

// let fruits = ["apple", "mango", "pomegranate", "guava", "lichi"];
// let k = 0;
// let length = fruits.length;
// let str = "";
// for (; k < length; ) {
// 	str += fruits[k];
// 	k++;
// }
// console.log(str);

// // example5:

// let fruits = ["apple", "mango", "pomegranate", "guava", "lichi"];
// let length = fruits.length;
// let str = "";
// for (let i = 0; ; i++) {
// 	str += fruits[i];
// 	if (i == length - 1) {
// 		break;
// 	}
// }
// console.log(str);

// // 2. For In loop :

// // for in statement loops through the properties of an Object

// // example1:

// const person = { fname: "John", lname: "Doe", age: 25 };
// let text = "";
// for (let x in person) {
// 	text += person[x];
// }
// console.log(text);

// // For In over Arrays

// const nums = [45, 4, 9];
// let txt = "";
// for (let x in nums) {
// 	txt += nums[x];
// }
// console.log(txt);

// // Do not use for in over an Array if the index order is important.

// // The index order is implementation-dependent, and array values may not be accessed in the order you expect.

// // It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

// // 3. For Of loop :

// // The for of statement loops through the values of an iterable object.

// // It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

// // example1:

// const arr = [1, 2, 3, 4];
// let text = "";
// for (let i of arr) {
// 	text += i;
// }
// console.log(text);

// // example2:

// let language = "JavaScript";
// let str = "";
// for (let i of language) {
// 	str += i;
// }
// console.log(str);

// // 4. While loop :

// // while loop loops through a block of code as long as a specified condition is true.

// // example1:

// let i = 0;
// while (i < 2) {
// 	console.log(i);
// 	i++;
// }

// // 5. Do While loop :

// // do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// // example1:

// let i = 0;
// let text = "";

// do {
// 	console.log("The number is " + i);
// 	i++;
// } while (i < 10);
