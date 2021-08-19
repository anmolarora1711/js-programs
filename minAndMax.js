const points = [12, 53, 452, 1232, 32, 56, 234, 6666];

// Math.min() and Math.max()

console.log(Math.min(...points));
console.log(Math.max(...points));

// Math.min.apply() and Math.max.apply();

console.log(Math.max.apply(null, points));

console.log(points);

console.log(Math.min.apply(null, points));

// functions for finding min and max in an array
// these are faster than

function arrayMax(arr) {
	let len = arr.length;
	let max = -Infinity;
	for (let i = 0; i < len; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

console.log(arrayMax(points));

function arrayMin(arr) {
	let len = arr.length;
	let min = Infinity;
	for (let i = 0; i < len; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return min;
}

console.log(arrayMin(points));
