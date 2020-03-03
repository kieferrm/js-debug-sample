/** @type {HTMLInputElement} */
const first = document.querySelector('#first');
/** @type {HTMLInputElement} */
const second = document.querySelector('#second');
const result = document.querySelector('#result');

const worker = new Worker("worker.js");

first.onchange = function() {
  debugger;
  worker.postMessage([first.value, second.value]);
}

second.onchange = function() {
  debugger;
  worker.postMessage([first.value, second.value]);
}

worker.onmessage = function(e) {
  // You are back in main!
  result.textContent = e.data;
}
