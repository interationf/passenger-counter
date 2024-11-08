//document.getElementById("counter").innerText = 6; //Wenn ich eine Element Aktion führen muss zuerst diese Element richtig gefunden.
let countEl = document.getElementById("counter");
let count = 0;

let saveEl = document.getElementById("save-dash");

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  countStr = count + "-";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

//

let welcomeEl = document.getElementById("welcome-el");
let name = "yang";
let greeting = "Welcome Back";
welcomeEl.innerText = greeting + ", " + name;
welcomeEl.innerText += "@";
