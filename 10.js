var sieve = [];
for (var i = 0; i < 2000000; i++) {
	sieve[i] = true;
}

var sum = 0;
for (var i = 2; i < sieve.length; i++) {
	if (sieve[i]) {
		sum += i;
		for (var j = 2 * i; j < sieve.length; j+=i) {
			sieve[j] = false;
		}
	}
}

console.log('sum', sum);