// === Module 3 Assignment: Loops and Arrays ===

// ---------- (1) FOR LOOP: Count 0..10 and label odd/even ----------
let forOutput = "";
for (let i = 0; i <= 10; i++) {
  const label = (i % 2 === 0) ? "even" : "odd";
  forOutput += `Count ${i} is ${label}<br>`;
}
document.getElementById("forLoop").innerHTML =
  "<h3>For Loop Results</h3>" + forOutput;


// ---------- (2) DO/WHILE using myNum (1..myNum) ----------
let myNumInput = prompt("Enter a number between 5 and 20:");
let myNum = Number(myNumInput);

// Validate input (require 5–20). If invalid, default to 5 so the page still renders.
if (!Number.isFinite(myNum) || myNum < 5 || myNum > 20) {
  alert("Invalid input. Using default value: 5.");
  myNum = 5;
}

let doWhileOutput = "";
let counter = 1; // loop counter starts at 1 (per instructions)
do {
  doWhileOutput += `Counter is ${counter}<br>`;
  counter++;
} while (counter <= myNum); // stops when counter equals myNum

document.getElementById("doWhileLoop").innerHTML =
  `<h3>Do/While Results (1 to ${myNum})</h3>` + doWhileOutput;


// ---------- (3) ARRAY of subjects + forEach() ----------
const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// Display in a readable (bulleted) format using forEach()
let listHtml = "<ul>";
subjects.forEach(subj => { listHtml += `<li>${subj}</li>`; });
listHtml += "</ul>";
document.getElementById("arrayList").innerHTML =
  "<h3>Subjects (forEach list)</h3>" + listHtml;

// ---------- (4) Comma-separated in one statement ----------
document.getElementById("arrayComma").innerHTML =
  "<h3>Subjects (comma separated)</h3>" + subjects.join(", ");
