var number = 1;
let count = 2;
// javascript naming conventions
// es5(ECMAScript5) supported by all browsers
// es6(2015)
// es2016
// es2017
// etc

// let keyword is a local scope variable declaration, 
//      to the nearest function.

// var keyword is global scope

// TS catches syntex errors at compile time
// TS complier reports errors and produces JS code to ES5.

function doSomething() {
    for( let i=0; i<5; i++ ){
        console.log(i);
    }

    console.log( 'Finally: ' + i );
    //error left to demo tsc javascript result
}

doSomething();
