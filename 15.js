console.log(factorial(40)/(factorial(20)*(factorial(20))));

function factorial (n) {
	var product = 1;
	while (n > 1) {
		product *= n;
		n--;
	}
	return product;
}