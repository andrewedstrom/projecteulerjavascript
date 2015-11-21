//Inspired by http://www.mathblog.dk/project-euler-24-millionth-lexicographic-permutation/

var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var numPerms = 1000000;
var count = 1;
while (count < numPerms) {
	var i = digits.length - 1;
	while(digits[i-1] > digits[i]) {
		i = i - 1;
	}
	var j = digits.length;
	while (digits[j - 1] <= digits[i-1]) {
		j = j - 1;
	}
	swap(i - 1, j - 1);
	i++;
	j = digits.length;

	while (i < j) {
		swap(i - 1, j-1);
		i++;
		j--;
	}
	count++;
}

var finalString = "";
digits.forEach(function(digit) {
	finalString += digit;
});

console.log('finalString', finalString);

function swap(i, j) {
	var tmp = digits[i];
	digits[i] = digits[j];
	digits[j] = tmp;
}