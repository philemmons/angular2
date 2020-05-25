
// ******* PROPERTIES

class OnePoint{ 
    // TScript allows for variable declaration and assignment in
    // the constructor parameter.
    constructor(private _x?: number, private _y?: number){
    }
    //by default the method is PUBLIC
    draw(){
        console.log('x: '+ this._x + ', y: '+ this._y);
    }

// get is a reserved keyword
// cleaner property for getters and setters
// to adhere to the naming convention, 'X' is cnaged to 'x'
// in the constructor, the x,y vars are '_'underlined prefixed.

// NOTE: a property looks like a variable from the outside, 
// internally, it is an access modifier.
    get x(){
        return this._x;
    }
// set is a reserved keyword
    set x(value){
        if(value<0)
            throw new Error('value cannot be less than 0.');
        
        this._x = value;
    }

}

// this modPoint is an instance of the 'anotherPoint' class!
let propPoint = new OnePoint(1,2);
let x = propPoint.x; //getter

propPoint.x = 10; //setter
propPoint.draw();