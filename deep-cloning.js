// deep cloning of multi-level object

let obj = {
	a: 45,
	b: {
		c: 6,
		d: {
			e: 7,
		},
	},
};

let cloneObj = JSON.parse(JSON.stringify(obj));

console.log(cloneObj);

cloneObj.hello = "My name is";

console.log(cloneObj);
console.log(obj);
