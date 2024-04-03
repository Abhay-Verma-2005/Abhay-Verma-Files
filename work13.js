//  Fibonacci series
let a = 0;
let b = 1;
let c;
console.log(a);
for (let i = 1; i < 11; i++) {
    
    console.log(b);
    c = a + b;
    a = b;
    b = c;
}

//HCf program

const num1 = 37;
const num2 = 56;

let hcf, lcm;

// Math.min() is a predefine function which returns the minimum values among two numbers 
let s = Math.min(num1, num2); 
for (let i = 1; i <= s; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
        hcf = i;
    }
}

//LCM program
lcm = (num1 * num2) / hcf;

console.log("HCF",hcf);
console.log("LCM",lcm);
