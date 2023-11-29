//TASK6================================
let firstMessage = prompt('Enter the first message:');
let secondMessage = prompt('Enter the second message:');

let firstInput = document.getElementById('input1');
let secondInput = document.getElementById('input2');

firstInput.value = firstMessage;
secondInput.value = secondMessage;

let holder = firstInput.value;
firstInput.value = secondInput.value;
secondInput.value = holder;