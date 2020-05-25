
// ********* EXPORT keyword creates a MODULE
// makes the class accessiable to other files( the scope)
// similar to protected variables

export class FarPoint{ 
    constructor(private _x?: number, private _y?: number){
    }

    draw(){
        console.log('x: '+ this._x + ', y: '+ this._y);
    }
}