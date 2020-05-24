
interface Point1{ 
    // NOTE: the naming convention, PASCAL naming convention
    // capital 'P'
    x: number,
    y: number
}

let drawPoint = (point: Point1 ) => {
    //...
}

// if there are many parameters that have some commonality
// a group eg a car, incapsulate them in an OBJECT and 
// pass the object.

drawPoint({
    // name: 'Mosh' throwws a compile error, it is expecting x and y
    // solution : inline annotation 
    // let drawPOint = (point: { x: number, y: number} )=> {...}
    // although it is a bit verbose

    //****** A BETTER solution is an interface!
    x: 1,
    y: 2
})