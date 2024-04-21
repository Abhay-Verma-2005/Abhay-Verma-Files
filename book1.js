const filtered = [1, 2, 3, 11, 2];
const numbers1 = [1, 2, 3, -1, -2];

const items = filtered.map((value) => {
  return "<li>" + value + "</li>";
});
 
console.log("items", items);

const html = "<ul>" + items.join("") + "</ul>";
console.log("html: html", html);

const items1 = numbers1
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log("items1", items1);

const items2 = numbers1.filter((n) => n > 1);
console.log("items2", items2);
const items3 = numbers1.filter((n) => n > 2);

const employees = [
    { id: 11, name: "Abhinav", salary: 75000 },
    { id: 2131, name: "Gaurav", salary: 62000 },
    { id: 3012, name: "Raj", salary: 32000 },
  ];
  
  const names = employees.map((employee) => employee.name);
  console.log(names);

  console.log(window); // parent object of the browser
console.log(document); // parent object of the html document

// single element
console.log(document.getElementById("my-form"));
console.log(document.querySelector("section"));
console.log(document.querySelector("#my-form"));
console.log(document.querySelector('.item'));
console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));

// multiple element
console.log(document.getElementsByClassName("list-group-item"));
console.log(document.querySelectorAll(".list-group-item"));

// DOM Manipulation
const ul = document.querySelector(".items");

ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello World";
ul.children[1].innerText = "Brad";
ul.children[2].innerHTML = "<h1>Hello</h1>";

const btn = document.querySelector(".btn");

btn.style.background = "green";
btn.style.fontFamily = "Impact, Charcoal, sans-serif";

document.querySelector("header").children[0].style.fontFamily = "Impact, Charcoal, sans-serif";
document.querySelector("#head").style.color = "blueviolet";

const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click", e);
  console.log(e.target.className);

  document.querySelector("#my-form").style.background = "blue";
  document.querySelector("body").classList.add("bg-dark");
  document.querySelector("body").classList.remove("sthg");

  ul.lastElementChild.innerHTML = "<h1>Changed</h1>";

  document.querySelectorAll(".item").forEach((item) => {
    console.log(item);
    item.style.color = "green";
  });
});
