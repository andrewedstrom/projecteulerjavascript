var a = 1;
var b = 1;
var tmp;
var sum = 0;

while (a + b <= 4000000) {
	tmp = a;
	a = b;
	b = tmp + a;

	if (b % 2 === 0) {
		sum += b;
	}
}

console.log('sum', sum);