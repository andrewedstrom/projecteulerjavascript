
var array = [];
var num = 0;
for (var i = 0; i < 10000000; i++) {
	array[i] = true;
}

var i = 2;
while (num < 10001 && i < 10000000) {
	if (array[i]) {	
		num++;
		for (var j = 2 * i; j < 10000000; j += i) {
			array[j] = false;
		}
	}
	i++;
}
console.log('num', num);
console.log('array[' + (i - 1) + ']', array[i - 1]);