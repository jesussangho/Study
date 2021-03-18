var a = 1;

if (a === 1) {
    var a = 2;

    console.log(a);
    // expected output: 2
}

console.log(a);
// expected output: 2

// ============================================================================

("use strict");
function foo() {
    var b = 1;
    function bar() {
        var c = 2;
        console.log(b); // 1 (function `bar` closes over `x`)
        console.log(c); // 2 (`y` is in scope)
    }
    bar();
    console.log(b); // 1 (`x` is in scope)
    // console.log(c); // ReferenceError in strict mode, `y` is scoped to `bar`
}

foo();

// ============================================================================

("use strict");
console.log(x); // undefined (note: not ReferenceError)
console.log("still going..."); // still going...
var x = 1;
console.log(x); // 1
console.log("still going..."); // still going...

// ============================================================================

// 'use strict';
// var x = 1;
// globalThis.hasOwnProperty('x'); // true
// delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
// delete x;  // SyntaxError in strict mode. Fails silently otherwise.

// ============================================================================

var e = f,
    f = "A";
console.log(e + f); // undefinedA

// ============================================================================

var e = 0;
function foot() {
    var e = (f = 1); // Declares x locally; declares y globally.
}
foot();

console.log(e, f); // 0 1

// In non-strict mode:
// x is the global one as expected;
// y is leaked outside of the function, though!

// ============================================================================

var x = 0; // Declares x within file scope, then assigns it a value of 0.

console.log(typeof z); // "undefined", since z doesn't exist yet

function startA() {
    var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

    console.log(x, y); // 0 2

    function startB() {
        x = 3; // Assigns 3 to existing file scoped x.
        y = 4; // Assigns 4 to existing outer y.
        z = 5; // Creates a new global variable z, and assigns it a value of 5.
        // (Throws a ReferenceError in strict mode.)
    }

    startB(); // Creates z as a global variable.
    console.log(x, y, z); // 3 4 5
}

startA(); // Also calls b.
console.log(x, z); // 3 5
console.log(typeof y); // "undefined", as y is local to function a
