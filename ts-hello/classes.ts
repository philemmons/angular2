
// OOP concept - cohesion
// related objects belong together
// eg the stand alone 'interface Point' and the 'let drawPoint2' 
// violate the cohesion principle.

// ********** SOLUTION: CLASS
// CLASS: groups variables( properties ) and functions( methods )
// that are highly related.

// interfaces are for declaration, not implimentation
// much like a typedef or signature.

// create a CLASS
class Point{ 
    x: number;
    y: number;

    //draw: () => void
    // no parameter needed cuz the variables 
    // can be accessed directly!!
    draw(){
        console.log('x: '+ this.x + ', y: '+ this.y);
    }
    getDistance (another: Point) {
    //...
    }
}

// this 'point' is an instance of the 'Point' class!
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();