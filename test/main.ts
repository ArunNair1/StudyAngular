/*
var num=1;
let a: number;
function abc()
{

    enum color {red, blue,green};
    let testcolor = color.red;
}

let b:any[] = ['a',1,'ed'];

let test=1;

//interface to set the type of variables a particular arrow function will accept
interface Point
{
    x:number,
    y:number
}
//we used the interface to define that this particular arrow function will use the Point interface to 
//identify and maintain the type of the variable
let draw = (point: Point) => { console.log("test this"); }

draw({
    x:1,
    y:2
});



class Point1
{
    X:number;
    Y:number;
    constructor(x?:number)
    {
        this.X=x;
    }
    drawPoint()
    {
        //draw a point
    }
    getDist(otherPoint:Point1)
    {
        //get Distance
    }
}

let point1 = new Point1();
let point2 = new Point1(1);
point1.X =1;
point1.drawPoint();
*/

import { LikeComponent } from './likeComponent';

let comp = new LikeComponent(10,true);
comp.onclick();
comp.likeCount;
 