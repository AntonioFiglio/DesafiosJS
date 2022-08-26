const RangeisFibonacci = (range) => {
	const list = [0, 1];

	for (let i = 1; i <= range; i++) {
		let n1 = list[list.length - 1];
		let n2 = list[list.length - 2];

		if (n1 + n2 === i) {
			list.push(i);
		}
	}

	list.splice(0, 2);

	return [list.length, list];
};

console.log(RangeisFibonacci(5000));
