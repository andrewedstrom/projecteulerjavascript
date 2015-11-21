var sumofsquares = 0;
var sumofnums = 0;

for (var i = 1; i <=100; i++) {
	sumofnums += i;
	sumofsquares += i*i;
}

console.log(sumofnums*sumofnums - sumofsquares);