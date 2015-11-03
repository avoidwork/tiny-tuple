var tuple = require("../lib/tiny-tuple.js");

exports["tuple"] = {
	setUp: function (done) {
		done();
	},
	small: function (test) {
		var x = tuple(1, 2);

		test.expect(2);
		test.equal(x.length, 2, "Should be '2'");
		test.equal(Object.isFrozen(x), true, "Should be 'true'");
		test.done();
	},
	large: function (test) {
		var x = tuple(1, 2, 3, tuple(1, 2));

		test.expect(3);
		test.equal(x.length, 4, "Should be '4'");
		test.equal(x[3].length, 2, "Should be '2'");
		test.equal(x.extract().length, 5, "Should be '5'");
		test.done();
	},
	fn: function (test) {
		var x = tuple(1, function () { return true; });

		test.expect(2);
		test.equal(x.length, 2, "Should be '2'");
		test.equal(typeof x[1], "function", "Should be 'function'");
		test.done();
	}
};
