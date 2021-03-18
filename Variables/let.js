let x = 1;

if (x === 1) {
    let x = 2;

    console.log(x);
    // expected output: 2
}

console.log(x);
// expected output: 1

// ============================================================================

function varTest() {
    var c = 1;
    {
        var c = 2; // same variable!
        console.log(c); // 2
    }
    console.log(c); // 2
}

function letTest() {
    let d = 1;
    {
        let d = 2; // different variable
        console.log(d); // 2
    }
    console.log(d); // 1
}

// ============================================================================

var a = "global";
let b = "global";
console.log(this.a); // "global"
console.log(this.b); // undefined

// ============================================================================

var Thing;

{
    let privateScope = new WeakMap();
    let counter = 0;

    Thing = function () {
        this.someProperty = "foo";

        privateScope.set(this, {
            hidden: ++counter,
        });
    };

    Thing.prototype.showPublic = function () {
        return this.someProperty;
    };

    Thing.prototype.showPrivate = function () {
        return privateScope.get(this).hidden;
    };
}

console.log(typeof privateScope);
// "undefined"

var thing = new Thing();

console.log(thing);
// Thing {someProperty: "foo"}

thing.showPublic();
// "foo"

thing.showPrivate();
// 1

console.log(thing.showPublic());
console.log(thing.showPrivate());

// ============================================================================

{
    // TDZ starts at beginning of scope
    const func = () => console.log(letVar); // OK

    // Within the TDZ letVar access throws `ReferenceError`

    let letVar = 3; // End of TDZ (for letVar)
    func(); // Called outside TDZ!
}

// ============================================================================

// prints out 'undefined'
console.log(typeof undeclaredVariable);

// ============================================================================

var e = 1;
var f = 2;

if (e === 1) {
    var e = 11; // the scope is global
    let f = 22; // the scope is inside the if-block

    console.log(e); // 11
    console.log(f); // 22
}

console.log(e); // 11
console.log(f); // 2
