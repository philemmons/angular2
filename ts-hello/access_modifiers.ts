
// ******* ACCESS MoDS and ACCESS MoDS IN CONSTRUCTORS
// how to prevent xy from change?
// control the access to the certain members of a field! 
// private, public, protected

class OneMorePoint{ 
    //private x: number;
    //private y: number;

    // *********** TypeScript allows only ONE constructor
    // add a ? after the datatype which makes
    // the parameter optional

    // TScript allows for variable declaration and assignment in
    // the constructor parameter.
    constructor(private x?: number, private y?: number){
        //this.x = x;
        //this.y = y;
    }
    //by default the method is PUBLIC
    draw(){
        console.log('x: '+ this.x + ', y: '+ this.y);
    }

}

// this modPoint is an instance of the 'anotherPoint' class!
let modPoint = new OneMorePoint(1,2);
modPoint.draw();