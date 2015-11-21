console.time("amicable");
var limit = 10000;
var sumsOfDivisors = [0];
var amicableSum = 0;

for (var i = 1; i < limit; i++) {
	sumsOfDivisors[i] = findSumOfDivisors(i);
}

for (var i = 1; i < sumsOfDivisors.length; i++) {
	if (sumsOfDivisors[sumsOfDivisors[i]] == i && i !== sumsOfDivisors[i]){
		console.log('sumsOfDivisors['+i+']', sumsOfDivisors[i]);
		amicableSum += i;
	}
}

console.log('amicableSum', amicableSum);

function findSumOfDivisors(n) {
	sum = 1;
	for (var j = 2; j < n/2 + 1; j++) {
		if (n % j === 0) {
			sum += j;
		}
	};

	return sum;
}

console.timeEnd("amicable");