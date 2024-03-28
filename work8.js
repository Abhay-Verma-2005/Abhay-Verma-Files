let circle2={
    radius: 1
}
circle2.color="yellow"
circle2.draw=function(){
    console.log("draw")
}
delete circle2.color


let a1=100;
let copy_a1=a1;
//org obj is change with change in copy_obj (copy by reference)-->pointer(objects)
let obj1={radius:10};
let copy_obj1=obj1;

//loop
circle3={
    radius:1,
    color:"yellow",
    draw: {x:1,y:20},
    solid:0
}
for (let pi in circle3){
    console.log(pi, circle3[pi]);
}
for(let i of Object.keys(circle3)){
    console.log(i);
}
for(let i of Object.values(circle3)){
    console.log(i);
}
for(let i of Object.entries(circle3)){
    console.log(i);
}
