// PRINT EVEN ELEMENT FROM ARRAY
a = [10, 12, 30, 4, 55, 7];
b = [];

for (let i of a) {
    if (i % 2 == 0) {
        b.push(i);
    }
}
console.log(b);
//PRINT SQUARE OF ELEMENT 
a = [10, 12, 30, 4, 55, 7];
for(let i=0 ; i < a.length ; i++){
    a[i]=a[i]**2;
    }
console.log(a);

//SUM OF ELEMENT IN ARRAY
a=[100, 144, 900, 16, 3025, 49,25];
sum=0
for (let i of a) {
    sum+=i
}
console.log(sum);
