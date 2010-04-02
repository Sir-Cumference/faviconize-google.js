// ==UserScript==
// @name         Faviconize Google (nested icons)
// @namespace    http://userscripts.ru/js/faviconize-google/
// @description  Adds favicons to each link offered by Google search results.
// @include      http://www.google.*/search?*
// @include      http://www.google.*/webhp*
// @include      http://www.google.*/#*
// @include      http://groups.google.*/groups/search?* 
// @copyright    2009+, Nikita Vasilyev (http://userscripts.org/scripts/show/58177)
// @version      1.7
// @licence      Apache 2.0
// ==/UserScript==


(function(){

	(typeof GM_addStyle != 'undefined' ? GM_addStyle : function GM_addStyle(css) {
		var head = document.getElementsByTagName('head')[0];
		var style = document.createElement("style");
		style.type = "text/css";
		style.appendChild(document.createTextNode(css));
		head.appendChild(style);
	})("/*> style.css */");

	/*> faviconize-google.js */

})();