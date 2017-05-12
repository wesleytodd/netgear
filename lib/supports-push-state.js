'use strict';
// Coppied from: https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
module.exports = (function (win) {
	// Issue #733
	// The stock browser on Android 2.2 & 2.3, and 4.0.x returns positive on history support
	// Unfortunately support is really buggy and there is no clean way to detect
	// these bugs, so we fall back to a user agent sniff :(
	var ua = navigator.userAgent;

	// We only want Android 2 and 4.0, stock browser, and not Chrome which identifies
	// itself as 'Mobile Safari' as well, nor Windows Phone (issue #1471).
	if ((ua.indexOf('Android 2.') !== -1 ||
		(ua.indexOf('Android 4.0') !== -1)) &&
		ua.indexOf('Mobile Safari') !== -1 &&
		ua.indexOf('Chrome') === -1 &&
		ua.indexOf('Windows Phone') === -1 &&
		// Since all documents on file:// share an origin, the History apis are
		// blocked there as well
		win.location && win.location.protocol !== 'file:'
	) {
		return false;
	}

	// Return the regular check
	return (win.history && 'pushState' in win.history);
})(typeof window !== 'undefined' ? window : {});
