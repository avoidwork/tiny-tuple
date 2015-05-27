class Tuple extends Array {
	constructor ( ...args ) {
		super();
		args.forEach( x => {
			this.push( x );
		} );
		Object.freeze( this );
	}

	extract () {
		return flatten( this );
	}
}
