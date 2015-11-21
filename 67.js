fs = require('fs');
fs.readFile("67.txt", 'utf8', function(err, data) {
	console.time("triangle execution time");
	if (err) throw err;
	var array = data.toString().split("\n");
	var intarray = [];
	array.forEach(function(line, lineindex){
		if (line.length){
			intarray[lineindex] = [];
			var tmp = line.split(" ");
			tmp.forEach(function(number, numindex) {
				intarray[lineindex][numindex] = parseInt(number);
			});
			console.log('intarray['+lineindex+']', intarray[lineindex]);
		}
	});

	for (var i = intarray.length - 2; i >= 0; i--) {
		for (var j = 0; j < intarray[i].length; j++) {
			intarray[i][j] += Math.max(intarray[i + 1][j], intarray[i + 1][j + 1]);
		}
	}

	console.log('intarray[0][0]', intarray[0][0]);
	console.timeEnd("triangle execution time");
});