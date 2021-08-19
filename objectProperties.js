// Object properties in JavaScript

// Properties define the state of an object in JavaScript.

// 1. Kinds of Properties

// i) Named data properties
// ii) Named accessor properties
// iii) Internal properties

// 1.1 Named data properties("properties")
// “Normal” properties of objects map string names to values.

var obj = {
	prop: 123,
};

console.log(obj.prop); // read
console.log(obj["prop"]); // read

// 1.2 Named accessor properties
// Alternatively, getting and setting a property value can be handled via functions. Those functions are called accessor functions. A function that handles getting is called a getter. A function that handles setting is called a setter.

var obj = {
	get prop() {
		return "Getter";
	},
	set prop(value) {
		console.log("Setter: " + value);
	},
};

console.log(obj.prop);
console.log((obj.prop = 123));
// console.log(obj.prop()); // Error: obj.prop is not a function
// console.log(obj.prop(111)) // Error: obj.prop is not a function

// 1.3 Internal properties
// Some properties are only used by the specificationl. They are called "internal", because they are not directly accessible via the language, but they do influence its behavior.Internal properties have special names that are written in double square brackets. Two examples:
// 1. The internal property [[Prototype]] points to the prototype of an object. It can be read via Object.getPrototypeOf(). Its value can only be set by creating a new object that has a given prototype, e.g. via Object.create() or __proto__.
// 2. The internal property [[Extensible]] determines whether or not one can add properties to an object. It can be read via Object.isExtensible(). It can be set false via Object.preventExtensions(). Once false, it cannot be become true again.
