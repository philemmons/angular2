
let message; // datatype any!!(seen by tooltip)

message = 'abc';

// intellisense produces the different methods for TS strings
//let endsWithC = message.endsWith('c');

// type assertion!!
// does not change the variable type at compile time!!
// the first format is commonly.
let endsWithC = (<string>message).endsWith('c');

let alternativeWay = (message as string).endsWith('c');

// Also, it informs the IDE intellisense the datatype.