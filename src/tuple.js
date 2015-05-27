class Tuple {
	constructor ( ...args ) {
		this.items = [].concat( args );
	}

	extract () {
		return flatten( this.items );
	}
}