var finalSum = 0;
var array = [];
var tmp = 0;

//find abundant numbers

for (var i = 1; i < 28124; i++) {
	tmp = 0;
	for (var j = 1; j < (i / 2) + 1; j++) {
		if (i % j === 0) {
			tmp += j;
		}
	}
	if (tmp > i) {
		array.push(i);
	}
}

//find sum of positive integers which cannot be written as 
//the sum of two abundant numbers