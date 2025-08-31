// Part 1
let firstname = "Shallon";
console.log("Hello, " + firstname);

let grade = Number(prompt("Enter your grade: "));
if (grade >= 70) {
console.log("You got an A");
} else if (grade >= 60) {
console.log("You got a B");
} else if (grade >= 50) {
console.log("You got a C");
} else if (grade >= 40) {
console.log("Pass");
} else {
console.log("Failed");
}

// Part 2
const greet = (name) => {
console.log(`Hello, ${name}`);
};
greet("Maria");

function calculateArea(radius) {
const pi = 3.14;
return pi * radius * radius;
}
let r = Number(prompt("Enter the radius of the circle: "));
console.log("The area of the circle is: " + calculateArea(r));

// Part 3
let count = 5;
while (count > 0) {
console.log("Countdown: " + count);
count--;
}

let courses = ["Computer Science", "Education", "Law", "Medicine"];
for (let i = 0; i < courses.length; i++) {
console.log(courses[i]);
}

// Part 4
document.addEventListener("DOMContentLoaded", () => {
const title = document.querySelector(".title");
if (title) {
  title.style.color = "blue";
  title.style.fontSize = "30px";
}

const button = document.querySelector(".btn"); 
if (button) {
  button.addEventListener("click", () => {
    const info1 = document.getElementById("info1");
    const info2 = document.getElementById("info2");
    if (info1) info1.textContent = `Hello ${firstname}, Welcome to our session. Are you ready?`;
    if (info2) info2.style.color = "green";

    // append on click
    const newParagraph = document.createElement("p");
    newParagraph.textContent = `${firstname}, you have successfully triggered a DOM update`;
    document.body.appendChild(newParagraph);
  });
}
});
