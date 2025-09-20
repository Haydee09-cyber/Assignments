

// ---------- Constructor Function ----------
function Dog(name, show, breed, role, mySound, canTalk) {
  this.name = name;       // e.g., "Kipper"
  this.show = show;       // e.g., "Kipper"
  this.breed = breed;     // e.g., "Generic"
  this.role = role;       // narrative/notes about the character
  this.mySound = mySound; // personality line
  this.canTalk = canTalk; // true/false

  // (Modified) Method myGreeting: include whether the dog can talk
  this.myGreeting = function () {
    const talkLine = this.canTalk ? "I can talk!" : "I cannot talk.";
    return `Hello, my name is ${this.name}. ${this.mySound}
I starred in the TV program "${this.show}".
My character was a ${this.breed} dog.
I was ${this.role}
${talkLine}`;
  };
}

// ---------- Create two dog objects (example picks) ----------
// Dog #1 — Kipper
const dog1 = new Dog(
  "Kipper",
  "Kipper",
  "Generic",
  "the main character; mischievous and funny, with his friends; based on the books by Mick Inkpen.",
  "I sound playful and cheerful, just like my personality!",
  true // canTalk
);

// Dog #2 — Scooby-Doo (another well-known animated dog)
const dog2 = new Dog(
  "Scooby-Doo",
  "Scooby-Doo",
  "Great Dane",
  "a mystery-solving companion in a comedic adventure series.",
  "Ruh-roh! I'm friendly and food-motivated.",
  true // canTalk
);

// Keep dogs in an array for listing and selection
const dogs = [dog1, dog2];

// ---------- Display each dog's properties via for...in ----------
function renderAllDogs(list) {
  const container = document.getElementById("allDogs");
  // Build HTML for each dog block
  const blocks = list.map(dog => {
    let props = "";
    for (const key in dog) {
      const val = dog[key];
      if (typeof val !== "function") {
        // label: value
        props += `<li><strong>${key}</strong>: ${val}</li>`;
      }
    }
    return `<div class="box" style="margin: .5rem 0;">
      <h4>${dog.name}</h4>
      <ul>${props}</ul>
    </div>`;
  });

  container.innerHTML = blocks.join("");
}

renderAllDogs(dogs);

// ---------- Prompt user to select a dog by name, display greeting or error ----------
function selectDogByName(list) {
  const raw = prompt(`Type a dog's name to view details (${list.map(d => d.name).join(", ")}):`);
  const name = (raw || "").trim().toLowerCase();
  const target = list.find(d => d.name.toLowerCase() === name);

  const result = document.getElementById("result");

  if (!name) {
    result.innerHTML = `<span class="error">No name entered.</span>`;
    return;
  }

  if (!target) {
    result.innerHTML = `<span class="error">Dog "${raw}" is not in the list. Please reload and try again.</span>`;
    return;
  }

  // Use the object's myGreeting method to display the message
  result.innerHTML = `<pre>${target.myGreeting()}</pre>`;
}

// Run the selection flow
selectDogByName(dogs);
