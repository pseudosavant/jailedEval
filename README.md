# jailedEval
by [Paul Ellis](http://pseudosavant.com)

Allows you to safely run/eval javascript code without allowing access to the global context (window, document, etc).

##Example usage
	ps.utils.jailedEval('var a = 2; a += 2; return a;'); // Returns 4`

	ps.utils.jailedEval('return document;'); // Returns undefined`

	var code = '\
		var a = Math.PI; \
		a *= Math.PI; \
		return Math.pow(a, 0.5);\
	';
	ps.utils.jailedEval(code); // Returns 3.141592653589793

License:        BSD
