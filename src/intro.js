( function ( global ) {
const document = global.document;
const location = global.location || {};
const navigator = global.navigator;
const server = typeof process !== "undefined";
const mutation = typeof MutationObserver === "function";
const MAX = 10;
const VERSIONS = 100;
const CACHE = 500;
const EVENTS = [ "readystatechange", "abort", "load", "loadstart", "loadend", "error", "progress", "timeout" ];

