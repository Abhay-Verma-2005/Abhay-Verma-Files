# JavaScript & Node.js Interview Notes

## 1. For...in vs For...of Loops

### For...in Loop
- **Purpose**: Iterates over keys (property names/indexes)
- **Used with**: Objects (to get keys)
- **Returns**: Keys/indexes as strings
- **Example**:
```javascript
let person = {name: 'sam', age: 27, isMale: true};
for(let key in person) {
    console.log(key); // name, age, isMale
}
```

### For...of Loop
- **Purpose**: Iterates over values of iterable objects
- **Used with**: Arrays, Strings, Maps, Sets, NodeLists, etc.
- **Returns**: Values directly
- **Iterates in natural order**
- **Example**:
```javascript
let array = ['sam', 'hardik', 'akshay', 'sachin'];
for(let item of array) {
    console.log(item); // sam, hardik, akshay, sachin
}
```

**Interview Tip**: Remember - "in" for keys, "of" for values!

---

## 2. Variable Scoping (let, const, var)

### Script Scope (let/const)
```javascript
let x = 10;
{
    x = 20;
    console.log(x); // 20
}
console.log(x); // 10
```

### Global Scope (var)
```javascript
var x = 10;
{
    x = 20;
    console.log(x); // 20
}
console.log(x); // 20
```

**Key Differences**:
- `let/const`: Block-scoped
- `var`: Function/globally-scoped
- Block scope creates separate environment for variables

---

## 3. Hoisting Concepts

### Variable Hoisting
- **var**: Hoisted and initialized with `undefined`
- **let/const**: Hoisted but stay in Temporal Dead Zone (TDZ)

```javascript
console.log(x); // undefined (var hoisting)
var x = 10;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
```

**Interview Answer**: 
"All variables are hoisted in JavaScript, but let/const remain in TDZ until assigned, while var gets undefined initially."

---

## 4. Closures

### Definition
A closure is the combination of a function and the lexical environment within which that function was declared.

### Key Points
- **Access**: Function can access variables from its outer (parent) function
- **Persistence**: Variables remain accessible even after parent function execution ends
- **Lexical Environment**: Function retains reference to its parent scope

### Example
```javascript
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}
let counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

**Interview Tip**: "Closure gives you access to outer function's scope from inner function."

---

## 5. Scope Chain

**Formula**: Scope = Local + Lexical Environment of its Parents

- Functions have access to their own variables
- Plus variables from parent functions
- Creates a chain of accessible scopes
- JavaScript searches up the chain when looking for variables

---

## 6. Higher-Order Functions (HOF)

### Definition
Functions that either:
1. **Accept functions as arguments** (callback functions)
2. **Return functions**
3. **Or both**

### Examples of Built-in HOFs
- `forEach()` - accepts callback function
- `filter()` - accepts callback, returns new array
- `map()` - transforms array elements using callback
- `reduce()` - reduces array to single value

### Custom HOF Example
```javascript
function check(item, fn) {
    return fn(item); // calling the callback function
}

function getBoolean(item) {
    return typeof item === 'boolean';
}

console.log(check(true, getBoolean)); // true
```

---

## 7. Array Methods Deep Dive

### Filter Method
```javascript
let marks = [1,2,3,4,5,6,7,8,9,10];
let filteredArray = marks.filter(function(item, index) {
    return item > 5; // returns true/false
});
console.log(filteredArray); // [6,7,8,9,10]
```

**Key Points**:
- Returns new array
- Doesn't modify original array
- Callback should return boolean
- Elements returning `true` are included

---

## 8. Constructor Functions

### Syntax
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person1 = new Person('John', 25);
```

### Key Points
1. **Name**: Same as class name (convention: PascalCase)
2. **No return type**: Not even `void`
3. **Automatic call**: Called automatically when using `new` keyword
4. **Purpose**: Creates objects with shared structure

---

## 9. Temporal Dead Zone (TDZ)

### Concept
- Period between hoisting and actual assignment
- Variables exist but cannot be accessed
- Applies to `let` and `const` only
- Prevents usage before declaration

### Example
```javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10; // x leaves TDZ here
```

---

## 10. Event Loop & Execution Context

### Key Components
1. **Call Stack**: Executes synchronous code
2. **Web APIs**: Handle async operations
3. **Callback Queue**: Stores completed async callbacks
4. **Event Loop**: Moves callbacks from queue to stack

### Interview Answer
"Event loop continuously checks if call stack is empty. If empty, it moves callbacks from callback queue to call stack for execution."

---

## 11. Callback Functions

### Definition
Functions passed as arguments to other functions and executed at appropriate time.

### Types
1. **Synchronous Callbacks**: Executed immediately
2. **Asynchronous Callbacks**: Executed after async operation completes

### Example
```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

fetchData((data) => {
    console.log(data); // "Data received" after 1 second
});
```

---

## Quick Interview Tips

1. **Always explain with examples** when discussing concepts
2. **Mention practical use cases** for each feature
3. **Compare and contrast** similar concepts (like for...in vs for...of)
4. **Know the "why"** behind each concept, not just the "how"
5. **Practice writing code** for closures, HOFs, and array methods
6. **Understand scope chain** as it's fundamental to many other concepts

---

## 12. JavaScript Data Types

### Primitive Types (7 types)
1. **Number**: `let age = 25;`
2. **String**: `let name = "John";`
3. **Boolean**: `let isActive = true;`
4. **Undefined**: `let x;` (not assigned any value)
5. **Null**: `let data = null;` (intentionally empty)
6. **Symbol**: `let sym = Symbol('id');`
7. **BigInt**: `let big = 123n;`

### Non-Primitive Types
1. **Object**: `let person = {name: "John"};`
2. **Array**: `let numbers = [1, 2, 3];`
3. **Function**: `let greet = function() {};`

**Interview Tip**: "Primitives are stored by value, objects are stored by reference."

---

## 13. Functions in JavaScript

### Function Declaration
```javascript
function sayHello() {
    console.log("Hello!");
}
sayHello(); // Can call before declaration (hoisted)
```

### Function Expression
```javascript
let sayHello = function() {
    console.log("Hello!");
};
// sayHello(); // Cannot call before this line
```

### Arrow Functions
```javascript
let sayHello = () => {
    console.log("Hello!");
};

// Short form for single expression
let add = (a, b) => a + b;
```

**Key Differences**:
- Function declarations are fully hoisted
- Function expressions are not hoisted
- Arrow functions don't have their own `this`

---

## 14. this Keyword

### Simple Rule
- **In regular function**: `this` depends on how function is called
- **In arrow function**: `this` comes from parent scope
- **In object method**: `this` refers to the object
- **Global context**: `this` refers to window (browser) or global (Node.js)

### Examples
```javascript
let person = {
    name: "John",
    greet: function() {
        console.log(this.name); // "John"
    },
    greetArrow: () => {
        console.log(this.name); // undefined (no own this)
    }
};
```

---

## 15. Callback vs Promise vs Async/Await

### Callback (Traditional way)
```javascript
function getData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

getData((data) => {
    console.log(data);
});
```

### Promise (Better way)
```javascript
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

getData().then(data => console.log(data));
```

### Async/Await (Easiest way)
```javascript
async function fetchData() {
    let data = await getData();
    console.log(data);
}
```

---

## 16. Array Methods (Complete List)

### Mutating Methods (Change original array)
- **push()**: Add to end
- **pop()**: Remove from end
- **shift()**: Remove from start
- **unshift()**: Add to start
- **splice()**: Add/remove at any position
- **sort()**: Sort elements
- **reverse()**: Reverse array

### Non-Mutating Methods (Return new array)
- **map()**: Transform each element
- **filter()**: Keep elements that pass test
- **reduce()**: Reduce to single value
- **concat()**: Join arrays
- **slice()**: Extract portion
- **find()**: Find first matching element
- **includes()**: Check if element exists

```javascript
let numbers = [1, 2, 3, 4, 5];

// Map - transform each element
let doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// Filter - keep elements that pass test
let evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// Reduce - combine into single value
let sum = numbers.reduce((total, num) => total + num, 0); // 15
```

---

## 17. Objects in JavaScript

### Creating Objects
```javascript
// Object literal
let person = {
    name: "John",
    age: 25,
    greet: function() {
        console.log("Hello!");
    }
};

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person2 = new Person("Jane", 30);

// Object.create()
let person3 = Object.create(person);
```

### Accessing Properties
```javascript
// Dot notation
console.log(person.name);

// Bracket notation
console.log(person["name"]);
console.log(person[variable]); // When property name is in variable
```

---

## 18. Prototypes (Simple Explanation)

### What is Prototype?
Every object in JavaScript has a hidden property called prototype. It's like a parent object that shares its properties.

```javascript
function Person(name) {
    this.name = name;
}

// Add method to prototype (shared by all instances)
Person.prototype.greet = function() {
    console.log("Hello, I'm " + this.name);
};

let john = new Person("John");
let jane = new Person("Jane");

john.greet(); // "Hello, I'm John"
jane.greet(); // "Hello, I'm Jane"
```

**Simple Rule**: If JavaScript can't find a property in an object, it looks in its prototype.

---

## 19. Error Handling

### Try-Catch-Finally
```javascript
try {
    // Code that might cause error
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    // Handle error
    console.log("Something went wrong:", error.message);
} finally {
    // Always runs (optional)
    console.log("Cleanup code");
}
```

### Common Error Types
- **SyntaxError**: Wrong code syntax
- **ReferenceError**: Using undefined variable
- **TypeError**: Wrong data type used
- **RangeError**: Number out of range

---

## 20. Node.js Basics

### What is Node.js?
- JavaScript runtime outside browser
- Uses V8 engine (same as Chrome)
- Good for server-side applications
- Single-threaded but handles many requests using event loop

### Common Node.js Modules

#### File System (fs)
```javascript
const fs = require('fs');

// Read file
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

#### HTTP Module
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
});

server.listen(3000);
```

#### Path Module
```javascript
const path = require('path');

console.log(path.join('/users', 'john', 'documents')); // /users/john/documents
```

---

## 21. Modules in Node.js

### CommonJS (Traditional)
```javascript
// Export
module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

// Import
const math = require('./math');
console.log(math.add(2, 3));
```

### ES6 Modules (Modern)
```javascript
// Export
export const add = (a, b) => a + b;
export default subtract = (a, b) => a - b;

// Import
import { add } from './math.js';
import subtract from './math.js';
```

---

## 22. Package.json

### What is it?
Configuration file for Node.js projects containing:
- Project information
- Dependencies (libraries you need)
- Scripts (commands to run)

### Basic Structure
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My awesome project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "npm test"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

---

## 23. NPM (Node Package Manager)

### Common Commands
- **npm init**: Create new package.json
- **npm install package-name**: Install package
- **npm install**: Install all dependencies
- **npm start**: Run start script
- **npm run script-name**: Run custom script

### Local vs Global Installation
```bash
npm install express          # Local (project only)
npm install -g nodemon      # Global (system-wide)
```

---

## 24. Express.js Basics

### Simple Server
```javascript
const express = require('express');
const app = express();

// Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
```

### Middleware
```javascript
// Middleware function
app.use((req, res, next) => {
    console.log('Request received');
    next(); // Pass to next middleware
});

// Built-in middleware
app.use(express.json()); // Parse JSON requests
```

---

## 25. Debugging in JavaScript

### Console Methods
```javascript
console.log("Normal message");
console.error("Error message");
console.warn("Warning message");
console.table([{name: "John", age: 25}]); // Display as table
```

### Debugger Statement
```javascript
function calculateSum(a, b) {
    debugger; // Browser will pause here
    return a + b;
}
```

---

## Super Easy Interview Questions & Answers

### Beginner Level Questions

**Q: What is JavaScript?**
A: JavaScript is a programming language that makes websites interactive. It can run in browsers and servers (Node.js).

**Q: What is a variable?**
A: A variable is like a box that stores data. You can put different types of data like numbers, text, or true/false values.

**Q: Difference between let, const, and var?**
A: 
- `var`: Old way, function-scoped, can be redeclared
- `let`: New way, block-scoped, can be changed
- `const`: New way, block-scoped, cannot be changed

**Q: What is a function?**
A: A function is a block of code that does a specific task. You can use it many times without writing the same code again.

**Q: What is an array?**
A: An array is like a list that can hold multiple values. Example: `[1, 2, 3, 4, 5]`

**Q: What is an object?**
A: An object is like a container that holds related information. Example: `{name: "John", age: 25}`

**Q: What is callback?**
A: A callback is a function that runs after another function finishes its work.

**Q: What is Node.js?**
A: Node.js lets you run JavaScript outside the browser, like on a server to build websites.

**Q: What is npm?**
A: npm is like an app store for JavaScript. It helps you download and use code libraries that others have written.

**Q: What is Express?**
A: Express is a tool that makes it easy to build web servers using Node.js.

---

## Memory Tricks for Interviews

1. **Hoisting**: "Variables go up, but let/const stay locked until assigned"
2. **Closure**: "Inner function remembers outer function's variables"
3. **this keyword**: "Arrow functions borrow this from parent"
4. **Callback**: "Call me back when you're done"
5. **Promise**: "I promise to give you result later"
6. **Array map**: "Transform each item"
7. **Array filter**: "Keep only items that pass the test"
