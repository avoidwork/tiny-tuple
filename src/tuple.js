class Tuple extends Array {
	constructor (...args) {
		super();

		this.push.apply(this, args.map(function (i) {
			return i instanceof Tuple ? i : typeof i === "object" && !Object.isFrozen(i) ? Object.freeze(clone(i)) : clone(i);
		}));

		Object.freeze(this);
	}

	extract () {
		return flatten(this);
	}
}
