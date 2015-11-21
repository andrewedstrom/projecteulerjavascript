//problem 5
var smallestMultiple = -1;
var j = 20;

while (smallestMultiple < 0) {
	var multiple = true;
	for (var i = 2; i <= 20; i++) {
		if (j%i != 0 && multiple) {
			multiple = false;
		}
	};
	if (multiple) {
		smallestMultiple = j;
	}
	if (j%100 == 0) {
		console.log(j);
	}
	j = j + 10;
}

console.log("smallestMultiple:", smallestMultiple);