class Tuple extends Array {
	constructor ( ...args ) {
		super();
		this.push.apply( this, args );
		Object.freeze( this );
	}

	extract () {
		return flatten( this );
	}
}
