// // Object methods, "this"

// // A function that is a property of an object is called its method.

// // these objects do the same
// let user = {
//     sayHi: function() {
//         console.log("Hello");
//     },
// };

// let user = {
//     sayHi() {
//         console.log("Hello");
//     },
// };

// // "this" in methods

// // It’s common that an object method needs to access the information stored in the object to do its job.

// // To access the object, a method can use the this keyword.
// let user = {
//     name: "John",
//     age: 30
//     sayHi() {
//         console.log(this.name);
//     }
// }
// user.sayHi(); // john

// // Here during the execution of user.sayHi(), the value of this will be user.

// // Technically, it’s also possible to access the object without this, by referencing it via the outer variable
// let user = {
//     name: "John",
//     age: 30
//     sayHi() {
//         console.log(user.name); // "user" instead of "this"
//     }
// }
// // …But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user and overwrite user with something else, then it will access the wrong object.

// If we used this.name instead of user.name inside the console.log, then the code would work.