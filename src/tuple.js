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
