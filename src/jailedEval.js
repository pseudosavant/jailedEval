/*
Name:           PseudoSavant jailedEval
Description:    Allows you to run/eval js code without allowing access to the
                global context (window, document, etc).
Version:        1.0
Author:         Paul Ellis
url:            http://pseudosavant.com
License:        BSD
Example usage:  ps.utils.jailedEval('var a = 2; a += 2; return a;'); // Returns 4
                ps.utils.jailedEval('return document;'); // Returns undefined
*/

(function (global) {
    'use strict';

    var ps = global.ps = ps || {};
    ps.utils = ps.utils || {};

    ps.utils.jailedEval = (function (code) {

        // List objects in the global context that should be available within jailed context
        var allowed = {
            RegExp: true,
            Math: true,
            Array: true,
            Object: true,
            JSON: true,
            Number: true,
            parseInt: true,
            parseFloat: true
        };

        // Enumerate all of the global variables
        var blocked = [];
        for (var key in global) {
            if (!allowed[key]) {
                blocked.push(key);
            }
        }

        // Supress jshint warnings about the Function constructor being a form of eval
        /* jshint -W054 */

        // Eval code using Function constructor. Create empty variables for all of the blocked global variables
        return (new Function(blocked.join(','), code)).apply({});
    }).bind(global);

})(this);
