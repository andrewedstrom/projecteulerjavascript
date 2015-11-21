var divisors = 0;
var i  = 1;
var triangle = 0;

while (divisors <= 500) {
	triangle += i;
	sqrt = Math.floor(Math.sqrt(triangle));
	j = sqrt;
	divisors = 2;
	while (j > 1) {
		if (triangle%j === 0) {
			divisors += 2;
		}
		j--;
	}
	if (sqrt*sqrt == triangle) {
		divisors--;
	}
	// console.log('triangle', triangle);
	// console.log('divisors', divisors);
	i++;
}
console.log(triangle);
