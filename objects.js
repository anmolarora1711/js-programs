// // creating an object in js

// // method 1
// let user1 = new Object(); //  "object constructor" syntax

// // method 2
// let user2 = {}; // "object literal" syntax

// // literals and properties
// let user = {
// 	name: "John",
// 	age: 30,
// };

// // Accessing the object's properties
// console.log(user.name);
// console.log(user.age);

// // Adding properties to the object
// user.isAdmin = true;
// user.newProperty; //this property will not be added to the object because it is not initialized
// console.log(user);

// // Removing a property
// delete user.age;
// console.log(user);

// // Creating multiword property names in object
// let user = {
// 	name: "John",
// 	age: 30,
// 	"likes birds": true, // multiword property name must be quoted
// };

// // Accessing multiword named property
// console.log(user["likes birds"]);

// // Last property of the object may end with a comma
// let user = {
//     name: "John",
//     age: 25,
// }

// let user2 = {
//     name: "Jane",
// }

// Square brackets

// // this would give a syntax error
// user.likes birds = true;

// let user = {};
// // set
// user["likes birds"] = true;
// // get
// console.log(user["likes birds"]);
// // delete
// delete user["likes birds"];
// console.log(user);

// let key = "likes birds";
// // same as user["likes birds"] = false;
// user[key] = false;
// console.log(user);

// //  Dot notation cannot be used in a similar way which is shown above
// let user = {
// 	name: "John",
// 	age: 25,
// };
// let key = "name";
// console.log(user.key);

// // Computed properties

// // We can use square brackets in an object literal, when creating an object. That's called computed properties.
// let fruit = "apple";
// let bag = {
// 	[fruit]: 5,
// 	[fruit + "Computers"]: 10,
// };

// console.log(bag);

// // Property value shorthand
// function makeUser(name, age) {
// 	return {
// 		name: name,
// 		age: age,
// 	};
// }
// let user = makeUser("John", 25);
// console.log(user.name);

// // Above code shorthand
// function makeUser(name, age) {
// 	return {
// 		name,
// 		age,
// 	};
// }
// let user = makeUser("Anmol", 25);
// console.log(user.name);

// // We can use both normal properties and shorthands in the same object
// let user = {
//     name,
//     age: 30
// };

// Property names limitations

// // keywords can be property names
// let obj = {
// 	for: 1,
// 	let: 2,
// 	return: 3,
// };
// console.log(obj.for, obj.let, obj.return);

// // Other types are automatically converted to strings
// let obj = {
// 	0: "test", // same as "0": "test"
// };
// console.log(obj["0"]);
// console.log(obj[0]);
// // console.log(obj.0) // syntax error because dot notation only uses property names which are strings

// // There's a minor gotcha with a special property named __proto__. We can't set it to a non-object value
// let obj = {};
// obj.__proto__ = 5; // assign a number
// console.log(obj.__proto__); // [object: null prototype] as output
// // the assignment to a primitive 5 is ignored

// // Property existence test, "in" operator
// // In JavaScript, it is possible to access any property. There will be no error if the property doesn't exist!
// // Reading a non-existent property just returns undefined
// let user = {};
// console.log(user.noSuchProperty === undefined);

// // There's also a special operator "in" for that
// // Syntax: "key" in object
// let user = {
// 	name: "John",
// 	age: 25,
// };
// console.log("age" in user); // property name must be quoted otherwise use a variable containing property name
// console.log("blabla" in user);
// let property = "age";
// console.log(property in user);

// // Why we need "in" operator? Why "undefined" is not enought?
// let obj = {
//     test: undefined
// }
// console.log(obj.test); // it's undefined, so - no such property?
// console.log("test" in obj); // true, the property does exist!

// // The "for...in" loop
// // Syntax: for(key in object){// executes the body for each key among object properties}
// let user = {
// 	name: "John",
// 	age: 30,
// 	isAdmin: true,
// };

// for (let key in user) {
// 	console.log(key);
// 	console.log(user[key]);
// }

// // Ordered like an object

// // Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

// // Integer properties are sorted, others appear in creation order
// let codes = {
// 	49: "Germany",
// 	41: "Switzerland",
// 	44: "Great Britain",
// };
// for (let code in codes) {
// 	console.log(code);
// }
// //The “integer property” term here means a string that can be converted to-and-from an integer without a change.eg: "49" but "+40" and "1.2" not.
