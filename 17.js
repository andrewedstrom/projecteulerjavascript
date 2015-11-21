var numbers = [
"",
"one",
"two",
"three",
"four",
"five",
"six",
"seven",
"eight",
"nine",
"ten",
"eleven",
"twelve",
"thirteen",
"fourteen",
"fifteen",
"sixteen",
"seventeen",
"eighteen",
"nineteen"
];

var tens = [
	"",
	"ten",
	"twenty",
	"thirty",
	"forty",
	"fifty",
	"sixty",
	"seventy",
	"eighty",
	"ninety"
];

var hundred = "hundred";
var and = "and";
var thousand = "thousand";

var string = "";
for (var i = 1; i <= 1000; i++){
	if (i < 20) {
		string += numbers[i];
	}
	if (i >= 20 && i < 100) {
		string += tens[Math.floor(i/10)];
		string += numbers[i%10];
		console.log(tens[Math.floor(i/10)], numbers[i%10]);
	}
	if (i >= 100 && i < 1000) {
		console.log('i', i);
		var t = i;
		if (i % 100 < 20){
			string += numbers[t%20]; //units
			console.log(numbers[t%20]);
			t = Math.floor(t/10);
		} else {
			string += numbers[t%10];
			console.log(numbers[t%10]);
			t = Math.floor(t/10);
			string += tens[t%10];
			console.log(tens[t%10]); //tens
		}
		t = Math.floor(t/10);
		if (i%100 !== 0) {
			string += and;
			console.log(and);
		}
		string += hundred;
		console.log(hundred);
		string += numbers[t];
		console.log(numbers[t]); //x hundred and...
	}
	if (i === 1000) {
		string += numbers[1];
		string += thousand;
	}
}

console.log(string.length);