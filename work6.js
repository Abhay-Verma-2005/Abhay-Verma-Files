// fun()
let circle={
    radius : 2,
    coordinate : {x:1,y:1},
    visible: true
}
console.log(circle.coordinate.x);
console.log(circle.radius);

//factory function(camel : oneTwoThree)
let a=10;
let b=20;
let fun;
let obj={
    a,
    b,
    fun(){
        console.log("ABHAY")
    }
}
console.log(obj);

//factory function
function rectangle(length,breadth){
    return{
            length,
            breadth,
            area() {
                console.log(length*breadth);
        }
    }
}

// contsructor function (pascal :   OneTwoThree)
function Cir(radius){
    this.radius = radius;
    this.draw = function(){
        console.log(3.14 * radius);
    };
}
const another = new Cir(5);

function Rec(length,breadth){
    this.length = length;
    this.breadth =breadth;
    this.area=function(){
        console.log(length*breadth);
    };
}
const place = new Rec(5,2);
