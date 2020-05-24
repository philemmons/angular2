let countNum = 5;
// count = 'millie'; 

// strict var declaration, will produce an error
// it will compile and produce JS


let a1; // type adaptation allows for 
//redeclaration of variable datatype

a1=1;
a1=true;

//different datatypes

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1,true,'a', false]; //bad practice!!

//const = constant
const ColorRed=0;
const ColorGreen=1;
const ColorBlue=3;


//easy to read enum declaration
enum Color{ Red=0, Green=1, Blue=2 };
//safe to number them in case other colors are added!!

let backgroundColor = Color.Red;


// hard to read enum declaration from the compiled .ts file!!
/*
var Color;
(function(Color){
    Color[Color['Red'] = 0 ] = 'Red';
    Color[Color['Green'] = 1 ] = 'Green';
    Color[Color['Blue'] = 2 ] = 'Blue';
    Color[Color['Purple'] = 3 ] = 'Purple';
}) ( Color || ( Color={} ) );
;

var backgroundColor = Color.Red;
*/