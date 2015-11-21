var largestPrime = 0;
var papa = 600851475143 ;
var sieve = [];

for (var i = 2; papa > 1; i++) {
	if (papa % i === 0) {
		papa = papa/i;
		largestPrime = Math.max(i, largestPrime);
		i = 2;
	}
}

console.log(largestPrime);