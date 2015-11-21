fs = require('fs');
fs.readFile("22.txt", 'utf8', function(err, data) {
	console.time("problem 22");
	if (err) throw err;
	data = data.replace(/['"]+/g, '');
	var array = data.split(",");
	array = array.sort();
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var total = 0;

	array.forEach(function(name, index) {

		nameArray = name.split("");
		var alphabeticalValue = 0;
		nameArray.forEach(function(letter) {
			alphabeticalValue += alphabet.indexOf(letter) + 1;
		});
		total += (index + 1) * alphabeticalValue;
	});

	console.log('total', total);

	console.timeEnd("problem 22");
});