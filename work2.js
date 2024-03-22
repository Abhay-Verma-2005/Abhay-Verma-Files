//Object  -->
let data={
    name: "Abhay",
    age: 18,
    occupation: "Developer",
    location: "Mathura",
};
console.log(data)
console.log("Age is: ", data.age)

//ARRAY --> LIST   
let arr=[1,2,3,4,true,"hi",[5,6]];
console.log(arr.length)   
console.log(arr) 
console.log("THIS IS A 5TH ELEMENT:",arr[4]) 

//ArrOfObject
let arrofobj=[{name: "Abhay",age: 18,occupation: "Developer",location: "Mathura",},
{name: "Aditya",age: 18,occupation: "Developer",location: "Kashganj",},
{name: "Ankur",age: 19,occupation: "Developer",location: "Rajisthan",}];
console.log(arrofobj)   
console.log("Data is: ",arrofobj[1].location) 

//Add element in list
let l1=['red','blue'];
l1[2]=4
l1[4]=55
console.log(l1.length);