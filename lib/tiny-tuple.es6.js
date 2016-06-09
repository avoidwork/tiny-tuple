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

(function (global) {

function clone (arg) {
	return JSON.parse(JSON.stringify(arg));
}

function flatten (tuple) {
	let result = [];

	tuple.forEach(function (i) {
		if (i instanceof Tuple) {
			result.push.apply(result, flatten(i));
		} else {
			result.push(i);
		}
	});

	return Object.freeze(result);
}

function Tuple (...args) {
	this.push.apply(this, args.map(function (i) {
		return i instanceof Tuple ? i : typeof i === "object" && !Object.isFrozen(i) ? Object.freeze(clone(i)) : clone(i);
	}));

	Object.freeze(this);
}

Tuple.prototype.constructor = Tuple;
Tuple.prototype = Array.prototype;
Tuple.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

Tuple.prototype.extract = function () {
	return flatten(this);
};

function factory (...args) {
	return new Tuple(...args);
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
}}(typeof window !== "undefined" ? window : global));
