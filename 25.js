//integer too big. Need to either use an array or require a bigint library

console.time("runtime");

var a = 1;
var b = 1;
var tmp = -1;
var i = 3;
var bigEnough = false;

while (!bigEnough) {
	tmp = a;
	a = b;
	b = tmp + b;
	if (b >= Math.pow(10,999)) {
		console.log('b', b);
		console.log('i', i);
		bigEnough = true;
	}
	i++;
}

console.timeEnd("runtime");