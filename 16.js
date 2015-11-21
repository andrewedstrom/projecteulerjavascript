var number = [2];
var power = 1000;

for (var i = 2; i <= power; i++) {
	var overflow = 0;
	for (var j = 0; j < number.length; j++) {
		number[j] *= 2;
		number[j] += overflow;
		if (number[j] > 9) {
			overflow = 1;
			number[j] -= 10;
		} else{
			overflow = 0;
		}
	}
	if (overflow) {
		number[number.length] = overflow;
	}
	if (i%50 ===0) {
		console.log('i', i);
	}
}

var sum=0;
for (var i = 0; i < number.length; i++) {
	sum+=number[i];
}

console.log(sum);