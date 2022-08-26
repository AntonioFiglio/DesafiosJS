let N1 = 0,
	N2 = 1;

function fibonacci(n) {
	let n1 = 0;
	let n2 = 1;
	let resultado = [];

	for (let i = 1; i <= n; i++) {
		n1 = [i - 2] + [i - 1];
		n1 = n2;
		n2 = resultado;
	}

	return;
}

// Resultado = N1 + N2;
// N1 = N2
// N2 = Resultado

// O próximo N1 sempre será o N2 passado
// O próximo N2 sempre será o Resultado passado

// N1 + N2 = RESULTADO
// 0 + a = 1 = r = 1
// b = a = c = r + r = 1 = 2

// 1 + 2 = 3
// 2 + 3 = 5
// N1 + N2 = RESULTADO
// 3 + 5 = 8
// 5 + 8 = 13
// N2 + RESULTADO

// N1 = N2
// N2 = Resultado
