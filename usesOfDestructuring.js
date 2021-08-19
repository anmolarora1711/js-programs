// // 5 Interesting Uses of JavaScript Destructuring

// // 1. Swap variables

// // example without destructuring

// let a = 1;
// let b = 2;
// let temp;

// temp = a;
// a = b;
// b = temp;

// console.log(a); // 2
// console.log(b); // 1

// // example with destructuring

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a); // 2
// console.log(b); // 1

// // another example with destructuring

// let zero = 2;
// let one = 1;
// let two = 0;

// [zero, one, two] = [two, one, zero];

// console.log(zero, one, two); // 0 1 2

// // 2. Access array item

// // You have an array of items that potentially can be empty. You want to access the first, second, or nth item of the array, but if the item does not exist, get a default value.

// // example without destructuring

// const colors = [];
// let firstColor = "white";
// if (colors.length > 0) {
// 	firstColor = colors[0];
// }

// console.log(firstColor); // "white"

// // example with destructuring

// const colors = [];

// const [firstColor = "white"] = colors;

// console.log(firstColor); // "white"

// // If we want to access second element only

// const colors = [];

// const [, secondColor = "black"] = colors;

// console.log(secondColor);

// // 3. Immutable operations

// // example with destructuring

// const numbers = [1, 2, 3];

// const [, ...fooNumbers] = numbers;

// console.log(fooNumbers); // [2, 3]
// console.log(numbers); // [1, 2, 3]
// // numbers array is not muted

// // another example with destructuring

// const big = {
// 	foo: "value Foo",
// 	bar: "value Bar",
// };

// const { foo, ...small } = big;

// console.log(small); // { bar: 'value Bar' }
// console.log(big); // { foo: 'value Foo', bar: 'value Bar' }
// // The destructuring assignment in combination with object rest operator creates a new object small with all properties from big, only without foo.

// // 4. Destructuring iterables

// // Destructuring can be applied to any object that implements the iterable protocol.
// // Many native primitive types and objects are iterable: arrays, strings, typed arrays, sets, and maps.

// const str = "cheese";
// const [firstChar = ""] = str;
// console.log(firstChar); // 'c'

// another example with destructuring

// movies hold a list of movie objects. When destructuring movies, it would be great to get the movie title as a string. Let's implement a custom iterator:

const movies = {
	list: [
		{ title: "Heat" },
		{
			title: "Interstellar",
		},
	],
	[Symbol.iterator]() {
		let index = 0;
		return {
			next: () => {
				if (index < this.list.length) {
					const value = this.list[index++].title;
					return { value, done: false };
				}
				return { doen: true };
			},
		};
	},
};

const [firstMovieTitle] = movies;
console.log(firstMovieTitle); // 'Heat'
// movies object implements the iterable protocol by defining the Symbol.iterator method. The iterator iterates over the titles of movies.

// Conforming to an iterable protocol allows the destructuring of movies object into titles, specifically by reading the title of the first movie: const [firstMovieTitle] = movies.

// 5. Destructuring dynamic properties

// example with destructuring

const movie = { title: "Heat" };

const { title } = movie;

console.log(title);

// dynamic destructuring example

function greet(obj, nameProp) {
	const { [nameProp]: name = "Unknown" } = obj;
	return `Hello, ${name}`;
}

console.log(greet({ name: "Batman" }, "name"));
console.log(greet({}, "name"));
