function isFibonacciByRange(range) {
	const listFibonacci = [];

	if (!range || range <= 0) return [listFibonacci.length, listFibonacci]; // Tentou enganar Bobo

	for (let fn = 1; fn <= range; fn++) {
		let n1 = Math.abs(fn - 1);
		let n2 = Math.abs(fn - 2);

		listFibonacci.push(n1 + n2);

		console.log(n1, n2);

		// listFibonacci.push(lastFibonacci);

		// console.log(`${n1} + ${n2} = ${n1 + n2} | ${fn}`);
	}

	return [listFibonacci.length, listFibonacci];
}
// [1, [1,2,3]]

console.log(isFibonacciByRange(5));
