/**
 * Tiny tuple for Client or Server
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2016
 * @license BSD-3-Clause
 * @link https://github.com/avoidwork/tiny-tuple
 * @version 1.0.8
 */
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function (global) {

	function clone(arg) {
		return JSON.parse(JSON.stringify(arg));
	}

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

	function Tuple() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		this.push.apply(this, args.map(function (i) {
			return i instanceof Tuple ? i : (typeof i === "undefined" ? "undefined" : _typeof(i)) === "object" && !Object.isFrozen(i) ? Object.freeze(clone(i)) : clone(i);
		}));

		Object.freeze(this);
	}

	Tuple.prototype.constructor = Tuple;
	Tuple.prototype = Array.prototype;
	Tuple.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

	Tuple.prototype.extract = function () {
		return flatten(this);
	};

	function factory() {
		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		return new (Function.prototype.bind.apply(Tuple, [null].concat(args)))();
	}

	factory.version = "1.0.8";

	// Node, AMD & window supported
	if (typeof exports !== "undefined") {
		module.exports = factory;
	} else if (typeof define === "function" && define.amd) {
		define(function () {
			return factory;
		});
	} else {
		global.tuple = factory;
	}
})(typeof window !== "undefined" ? window : global);
