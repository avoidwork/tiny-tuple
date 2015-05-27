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
