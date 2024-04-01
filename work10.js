function listele(name){
    console.log("hi"+name)
}
l=["a","i","e"];
for(let i of l){
    console.log(i);
}
for(let i=0 ; i < l.length ; i++){
    console.log(l[i] +" "+ i);
}

//MAX ELEMENT IN ARRAY
a=[1,12,3,4,55,7];
let x=a[0];
for(let i of a){
    
    if (x<i){
        x=i;
    }
}
