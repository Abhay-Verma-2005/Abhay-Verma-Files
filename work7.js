//dynamic nature of objects
let circle2={
    radius: 1
}
circle2.color="yellow"
circle2.draw=function(){
    console.log("draw")
}
delete circle2.color

//org variable is not change (copy by value)-->(primuitive dt)
let a1=100;
let copy_a1=a1;

//org obj is change with change in copy_obj (copy by reference)-->pointer(objects)
let obj1={radius:10};
let copy_obj1=obj1;
