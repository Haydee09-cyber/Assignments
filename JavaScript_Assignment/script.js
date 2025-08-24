// === WeWannaBee: Variables & Data Types demo ===

// 1) Ask the user for their first name and store it in Fname.
const Fname = prompt("What is your first name?");
if (Fname && Fname.trim() !== "") {
  alert(`Welcome, ${Fname}!`);
} else {
  alert("Welcome!");
}

// 2) Create constant piValue (7 significant digits).
const piValue = 3.1415926;

// Alias myPi (assignment instructions mention both piValue and myPi).
const myPi = piValue;

// 3) Ask for favorite number, store in myFavNum.
let myFavNumInput = prompt("Enter your favorite number (it will be used as a circle radius):");
let myFavNum = Number(myFavNumInput);

if (Number.isNaN(myFavNum)) {
  alert("That wasn't a valid number. We'll use 0 as the radius.");
  myFavNum = 0;
}

// 4) Calculate circle area A = πr².
const myArea = myPi * Math.pow(myFavNum, 2);

// 5) Display all variables to webpage.
const out = document.getElementById("output");
out.innerHTML = `
  <p><strong>Fname:</strong> ${Fname ?? ""} — (the first name you entered)</p>
  <p><strong>piValue:</strong> ${piValue} — (Pi stored to 7 significant digits per assignment)</p>
  <p><strong>myPi:</strong> ${myPi} — (the Pi constant used in calculation)</p>
  <p><strong>myFavNum (radius):</strong> ${myFavNum} — (your favorite number used as the circle's radius)</p>
  <p><strong>myArea:</strong> ${myArea.toFixed(6)} — (circle area using A = πr²)</p>
  <hr>
  <p>Hello ${Fname || "friend"}, you entered ${myFavNum} as your favorite number. If that was the radius of a circle, the circle’s area would be <strong>${myArea.toFixed(6)}</strong>.</p>
`;
