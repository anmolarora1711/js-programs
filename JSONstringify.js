// JSON.stringify()

// The JSON.stringify() method is used to convert a javascript object or value to string.

// Syntax:
// JSON.stringify(value)
// JSON.stringify(value, replacer)
// JSON.stringify(object, replacer, space);

console.log(JSON.stringify({ x: 5, y: 6 }));
// output: "{"x": 5, "y": 6}"

console.log(
	JSON.stringify([new Number(3), new String("false"), new Boolean(true)])
);
// output: [3,"false",true]

console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol("")] }));
// output: {"x":[10,null,null,null]}

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// output: "2006-01-02T09:34:05.000Z"

// When passing in "pure" values like in next examples, it can return 'undefined'

console.log(JSON.stringify(function () {}));
// output: undefined

console.log(JSON.stringify(undefined));
// output: undefined

console.log(JSON.stringify(Symbol("")));
// output: undefined

// The numbers Infinity and NaN, as well as the value null, are all considered null.

console.log(JSON.stringify(Infinity));
console.log(JSON.stringify(NaN));
console.log(JSON.stringify(null));

// Other examples:

JSON.stringify({}); // '{}'
JSON.stringify(true); // 'true'
JSON.stringify("foo"); // '"foo"'
JSON.stringify([1, "false", false]); // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 }); // '{"x":5}'

// String-keyed array elements are not enumerable and make no sense in JSON
let a = ["foo", "bar"];
a["baz"] = "quux"; // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

// Standard data structures
JSON.stringify([
	new Set([1]),
	new Map([[1, 2]]),
	new WeakSet([{ a: 1 }]),
	new WeakMap([[{ a: 1 }, 2]]),
]);
// '[{},{},{},{}]'
