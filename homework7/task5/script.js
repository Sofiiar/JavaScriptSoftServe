let button = document.getElementById("button");
let log = document.getElementById("log");

function appendToLog(message) {
    let p = document.createElement('p');
    p.textContent = message;
    log.appendChild(p);
}
button.addEventListener("click", function () {
    appendToLog("I was pressed!");
});

button.addEventListener("mouseover", function () {
    appendToLog("Mouse on me!");
});

button.addEventListener("mouseout", function () {
    appendToLog("Mouse is not on me!");
});