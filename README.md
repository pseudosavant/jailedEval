<!-- language: lang-js -->

# jailedEval
by [Paul Ellis](http://pseudosavant.com)

## What does jailedEval do?
It allows you to safely run/eval javascript code without allowing access to the global context (window, document, etc).

## But isn't eval bad?
Yes, eval is bad. But it is mostly bad just because you shouldn't allow untrusted code to access any of your page's or user's data (e.g. the global context). This script allows you to eval code, but only with a restricted set of global properties.

## What global properties are accessible?
You can easily change the 'allowed' global properies in the `allowed` array. By default it only allows these properties:

* RegExp
* Math
* Array
* Object
* JSON
* Number
* parseInt
* parseFloat

## Example usage
	ps.utils.jailedEval('var a = 2; a += 2; return a;'); // Returns 4

	ps.utils.jailedEval('return document;'); // Returns undefined

	var code = '\
		var a = Math.PI; \
		a *= Math.PI; \
		return Math.pow(a, 0.5);\
	';
	ps.utils.jailedEval(code); // Returns 3.141592653589793

## License
BSD
