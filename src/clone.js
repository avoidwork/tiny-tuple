function decorate (a, b) {
	Object.keys(b).forEach(function (i) {
		if (!a.hasOwnProperty(i)) {
			a[i] = b[i];
		}
	});

	return a;
}

function clone (arg) {
	let result;

	try {
		result = decorate(JSON.parse(JSON.stringify(arg)), arg);
	} catch (e) {
		result = arg;
	}

	return result;
}
