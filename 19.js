console.time("sundays");
var daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var year = 1901;
var dayOfWeek = 2;
var daysPerWeek = 7;
var sundaysOnFirst = 0;

while (year < 2001) {
	daysPerMonth.forEach(function(days, index) {
		if (dayOfWeek === 0) {
			sundaysOnFirst++;			
		}
		if (year % 4 === 0 && index === 1) {
			dayOfWeek = (dayOfWeek + 29) % daysPerWeek;
		} else {
			dayOfWeek = (dayOfWeek + days) % daysPerWeek;
		}
	});
	year++;
}

console.log('sundaysOnFirst', sundaysOnFirst);
console.timeEnd("sundays");