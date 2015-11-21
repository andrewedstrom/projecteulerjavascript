var startingValue = 1;
var longestChainValue = 0;
var longestChainLength = 0;

while (startingValue < 1000000) {
	var n = startingValue;
	var length = 1;
	while ( n > 1) {
		if (n % 2 === 0) {
			n = n/2;
		} else {
			n = 3*n + 1;
		}
		length++;
	}
	if (length > longestChainLength) {
		longestChainLength = length;
		longestChainValue = startingValue;
	}
	startingValue++;
} 
console.log('longestChainValue', longestChainValue);
console.log('longestChainLength', longestChainLength);