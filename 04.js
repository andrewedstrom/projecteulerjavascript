//enter number of digits as a command line argument.

var digits = process.argv[2];
var i = 0;
while (digits > 0) {
 i = i * 10 + 9;
 digits--;
}
var largestPalindrome = 0;

for (; i > 0; i--) {
	for (var j = i; j > 0; j--) {
		var product = i * j;
		if (checkPalindrome(product)) {
			largestPalindrome = Math.max(largestPalindrome, product);
			console.log("largestPalindrome:", largestPalindrome);
		}
	}
}

function checkPalindrome(number) {
		number = number|0;
		// console.log(number);
		var n = number;
		var reversed = 0;
		while (n > 0) {
			reversed = reversed * 10 + n % 10;
			n = n / 10|0;
		}
		if (reversed == number) {
			return true;
		} else {
			return false;
		}
}

console.log("final answer: ", largestPalindrome);