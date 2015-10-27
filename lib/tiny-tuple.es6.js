/**
 * Tiny tuple for Client or Server
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2015 
 * @license BSD-3-Clause
 * @link https://github.com/avoidwork/tiny-tuple
 * @version 1.0.6
 */
( function ( global ) {

function clone ( arg ) {
	return JSON.parse( JSON.stringify( arg ) );
}

function flatten ( tuple ) {
	let result = [];

	tuple.forEach( function ( i ) {
		if ( i instanceof Tuple ) {
			result.push.apply( result, flatten( i ) );
		} else {
			result.push( i );
		}
	} );

	return Object.freeze( result );
}

class Tuple extends Array {
	constructor ( ...args ) {
		super();
		this.push.apply( this, args.map( function ( i ) {
			return ( i instanceof Tuple ) ? i : ( typeof i === "object" && !Object.isFrozen( i ) ? Object.freeze( clone( i ) ) : clone( i ) );
		} ) );
		Object.freeze( this );
	}

	extract () {
		return flatten( this );
	}
}

function factory ( ...args ) {
	return new Tuple( ...args );
}

factory.version = "1.0.6";

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
}( typeof window !== "undefined" ? window : global ) );
