var finalSum = 0;
var abundants = [];
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
		abundants.push(i);
	}
}


//find sum of positive integers which cannot be written as 
//the sum of two abundant numbers

var array = [];
for (var i = 1; i < 28124; i++) {
	var found = false;
	for(var j = 0; abundants[j] < i && j< abundants.length && !found; j++) {
		for(var k = j; abundants[k] <= i - abundants[j] && k < abundants.length && !found; k++) {
			if (abundants[j] + abundants[k] === i) {
				found = true;
			}
		}
	}
	if (!found) finalSum += i;
	if (i%1000 === 0) console.log('i', i);
}

console.log('The sum of all the positive integers which cannot be written as the sum of two abundant numbers is ', finalSum);