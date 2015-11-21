for (var i = 1; i < 999; i ++) {
	for (var j = 2; j < 1000 && (i + j) < 1000; j++) {
		for (var k = 3; k < 1000 && (i + j + k) <= 1000; k++) {
			if (((i + j + k) == 1000) && (i*i + j*j == k*k)) {
				console.log('i = ', i, "j = ", j, "k = ", k);
				console.log('i*j*k', i*j*k);
			}
		}
	}
}