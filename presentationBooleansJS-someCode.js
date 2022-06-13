// null is falsy, same with undefined
if(null) console.log( 'null is truthy' );
else console.log( 'null is falsy' );       // this is printed as null is falsy

// cast-ing truthy / falsy to boolean
console.log( !!"joe" );                    // "joe" is truthy, casted to boolean is true
console.log( !!{} );                       // empty objects {} are truthy as well
console.log( !![] );                       // same with empty arrays []

result = 11 && 22                          // in a AND logical expression, returns the right value
console.log( result );                     // will display 22

result = 11 || 22                          // in a OR logical expression, returns the left value
console.log( result );                     // will display 11

result = 11 && 22 && 33 || 44 && 55        // go crazy, same rules apply, add some () to set up an order of evaluation
console.log( result );                     // will display 33, rightmost for the && and leftmost for the ||

result = 11 && 22 || mox                   // also, the AND is evaluated before the OR
console.log( result );                     // will display 11, 

result = "Andrew" && false
console.log( result );                     // will display false

result = "Josie"?true:false
console.log( result );                     // will display true

//result = exprA && exprB || exprC || exprD && exprE && exprF 
result = true && false || false || true && true && false 
console.log( result );                     // will display true, 

// nulish coalescent operator - better the shot-circuit .. more acurate!
Let a = 0;
console.log( a || ‘a is no a number?’ ) // this will NOT print 0
console.log( a ?? ‘a is not a number’ ) // this will print 0

let a;              // undefined (falsy value)
let b = null;       // null (falsy value)
let c = undefined;  // undefined (falsy value)
let d = 4;          // number (NOT falsy)
let e = 'five';     // assigment short circuits before reaching here
let f = a || b || c || d || e;
console.log(f)      // will display 4 (the firstm from left to right, that is truthy)
