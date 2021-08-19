// // Memory management in JavaScript is performed automatically and invisibly to us. We create primitives, objects, functions... All that takes memory.

// // What happens when something is not needed any more? How does the JavaScript engine discover it and clean it up?

// // Reachability

// // "reachable" values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.

// // 1. There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.

// // For instance:

// // The currently executing function, its local variables and parameters.
// // Other functions on the current chain of nested calls, their local variables and parameters.
// // Global variables.
// // (there are some other, internal ones as well)
// // These values are called roots.

// // 2. Any other value is considered reachable if it’s reachable from a root by a reference or by a chain of references.

// // For instance, if there’s an object in a global variable, and that object has a property referencing another object, that object is considered reachable. And those that it references are also reachable. Detailed examples to follow.

// // There’s a background process in the JavaScript engine that is called garbage collector. It monitors all objects and removes those that have become unreachable.

// // A simple example
// // user has a reference to the object
// let user = {
//     name: "John",
// };

// // if the value of user is overwritten, the reference is lost
// user = null;

// // Now John becomes unreachable. There’s no way to access it, no references to it. Garbage collector will junk the data and free the memory.

// // Two references

// // user has a reference to the object
// let user = {
//     name: "John",
// };
// let admin = user;

// user = null;

// // Now, the object is still reachable via admin global variable, so it's in memory. If we overwrite admin too, then it can be removed.

// // Interlinked objects

// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;
//     return {
//         father: man,
//         mother: woman,
//     };
// }
// let family = marry({
//     name: "John",
// }, {
//     name: "Ann",
// });

// delete family.father;
// delete family.mother.husband;

// // Now, John is unreachable and will be removed from the memory with all its data that also became unaccessible.

// // Unreachable island
// family = null;

// // Now, the family is unreachable and will be removed from the memory with all its data that also became unaccessible.

// // The former "family" object has been unlinked from the root, there’s no reference to it any more, so the whole island becomes unreachable and will be removed.

// Internal algorithms
// The basic garbage collection algorithm is called "mark-and-sweep"