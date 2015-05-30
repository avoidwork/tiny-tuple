/**
 * Tiny tuple for Client or Server
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2015 
 * @license BSD-3-Clause
 * @link https://github.com/avoidwork/tiny-tuple
 * @version 1.0.3
 */
"use strict";

var _bind = Function.prototype.bind;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

(function (global) {
	var Tuple = (function (_Array) {
		function Tuple() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			_classCallCheck(this, Tuple);

			_get(Object.getPrototypeOf(Tuple.prototype), "constructor", this).call(this);
			this.push.apply(this, args);
			Object.freeze(this);
		}

		_inherits(Tuple, _Array);

		_createClass(Tuple, [{
			key: "extract",
			value: function extract() {
				return flatten(this);
			}
		}]);

		return Tuple;
	})(Array);

	function factory() {
		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		return new (_bind.apply(Tuple, [null].concat(args)))();
	}

	factory.version = "1.0.3";

	function flatten(tuple) {
		var result = [];

		tuple.forEach(function (i) {
			if (i instanceof Tuple) {
				result.push.apply(result, flatten(i));
			} else {
				result.push(i);
			}
		});

		return Object.freeze(result);
	}

	// Node, AMD & window supported
	if (typeof exports !== "undefined") {
		module.exports = factory;
	} else if (typeof define === "function") {
		define(function () {
			return factory;
		});
	} else {
		global.tuple = factory;
	}
})(typeof global !== "undefined" ? global : window);