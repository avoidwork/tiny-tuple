/**
 * Tiny Tuple library for Client or Server
 *
 * @author  <>
 * @copyright 2015 
 * @license BSD-3-Clause
 * @link https://github.com/avoidwork/tiny-tuple
 * @version 1.0.0
 */
( function ( global ) {

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

function factory ( ...args ) {
	return new Tuple( ...args );
}

factory.version = "1.0.0";

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

// Node, AMD & window supported
if ( typeof exports !== "undefined" ) {
	module.exports = factory;
} else if ( typeof define === "function" ) {
	define( function () {
		return factory;
	} );
} else {
	global.tuple = factory;
}
} )( typeof global !== "undefined" ? global : window );
