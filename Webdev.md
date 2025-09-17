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

## Common Interview Questions

1. **"Explain hoisting"** - Focus on TDZ difference between var and let/const
2. **"What is closure?"** - Give practical example with counter function
3. **"Difference between map and forEach"** - map returns new array, forEach doesn't
4. **"What is callback hell?"** - Nested callbacks making code unreadable
5. **"Explain event loop"** - Single-threaded JavaScript handling async operations
