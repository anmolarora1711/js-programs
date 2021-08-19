// // One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

// let message = "Hello!";
// let phrase = message;
// console.log(message, phrase); // primitives store values as a whole value

// // A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

// let user = {
// 	name: "John",
// };

// // When an object variable is copied, the reference is copied, but the object itself is not duplicated.

// let admin = user; // copy the reference

// // Now, we have two variables, each storing a reference to the same object
// // As you can see, there’s still one object, but now with two variables that reference it.

// // We can use either variable to access the object and modify its contents

// admin.name = "Pete";
// console.log(user.name);

// // Comparison by reference
// let a = {};
// let b = a;
// console.log(a == b); // true
// console.log(a === b); // true

// // Two independent objects are not equal, even though they look alike

// let a = {
// };
// let b = {};
// console.log(a == b); // false

// // For comparisons like obj1 > obj2 or for a comparison against a primitive obj == 5, objects are converted to primitives.

// // Cloning and merging, Object.assign
// let user = {
// 	name: "John",
// 	age: 30,
// };
// let clone = {}; // the new empty object

// // let's copy all user properties into it
// for (let key in user) {
// 	clone[key] = user[key];
// }

// // now clone is a fully independent object with the same content
// clone.name = "Pete"; // changed the data in it
// console.log(user.name);

// // For cloning, we can use the method Object.assign
// // Syntax: Object.assign(dest, [src1, src2, src3...])
// let user = {
//     name: "John"
// };
// let permissions1 = {
//     canView: true
// }
// let permissions2 = {
//     canEdit: true
// }
// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);
// // now user = { name: "John", canView: true, canEdit: true}

// // If the copied property name already exists, it gets overwritten
// let user = { name: "John"};
// Object.assign(user, { name: "Pete"});
// console.log(user.name); // "Pete"

// // We also can use Object.assign to replace for...in loop for simple cloning
// let user = {
//     name: "John",
//     age: 30
// };
// let clone = Object.assign({}, user);

// // Nested cloning
// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };
// console.log(user.sizes.height); // 182

// // clone.sizes = user.sizes, now user and clone will share the same sizes because sizes is reference to an object
// let user = {
// 	name: "John",
// 	sizes: {
// 		height: 182,
// 		width: 50,
// 	},
// };

// let clone = Object.assign({}, user);
// console.log(user.sizes === clone.sizes); // true, same object

// // user and clone share sizes
// user.sizes.width++; // change a property from one place
// console.log(clone.sizes.width); // 51, see the result from the other one

// // To fix that, we should use a cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. That is called a “deep cloning”.
// //We can use recursion to implement it. Or, to not reinvent the wheel, take an existing implementation, for instance _.cloneDeep(obj) from the JavaScript library lodash.

// // Const objects can be modified

// const user = {
// 	name: "John",
// };

// user.name = "Pete";
// console.log(user.name);

// // The value of user is constant, it must always reference the same object, but properties of that object are free to change.
