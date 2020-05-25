
// ******* Constructors
// define a class 'anotherPoint'
// below we init an object

class AnotherPoint{ 
    x: number;
    y: number;

    // *********** TypeScript allows only ONE constructor
    // add a ? after the datatype which makes
    // the parameter optional
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log('x: '+ this.x + ', y: '+ this.y);
    }

}

// this nextPoint is an instance of the 'anotherPoint' class!
let nextPoint = new AnotherPoint(1,2);
nextPoint.draw();