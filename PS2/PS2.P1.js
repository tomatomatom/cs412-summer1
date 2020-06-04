function* fibs() {
	let [val1, val2, result] = [0, 1, 0]
	while (true) {
		result = val1 + val2;
		[val1, val2] = [val2, result]
		yield result;
	}
}



let myFibs = fibs();
let count = 15; // since we're not including 0 in our generator, we need first 5 even fibonacci numbers
				// to be generated. We know that there are even fib numbers every third sequence. Therefore, 
				// 5 * 3 = 15.
console.log(0); // First even number

while (count --> 0) {
	var x = myFibs.next().value;
	if((x % 2) == 0)
		console.log(x);
}