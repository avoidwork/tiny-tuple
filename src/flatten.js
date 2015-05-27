function flatten ( tuple ) {
	let result = [];

	tuple.forEach( function ( i ) {
		if ( i instanceof Tuple ) {
			result = result.concat( flatten( i ) );
		} else {
			result.push( i );
		}
	} );

	return Object.freeze( result );
}
