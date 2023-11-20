//TASK1================================================================
let elements = [2, 3, 4, 5];
let productFor = 1;

for (let i = 0; i < elements.length; i++) {
    productFor *= elements[i];
}

console.log("Product of elements using for loop:", productFor);

let productWhile = 1;
let index = 0;

while (index < elements.length) {
    productWhile *= elements[index];
    index++;
}

console.log("Product of elements using while loop:", productWhile);

//TASK2================================================================
for (let i = 0; i <= 15; i++) {
    let message = (i % 2 === 0) ? `${i} is even` : `${i} is odd`;
    console.log(message);
}

//TASK3================================================================
function randArray(k) {
    return Array(k).fill().map(() => Math.floor(Math.random() * 500) + 1);
}

console.log("Array filled with random values in the range 1-500:", randArray(5));

//TASK4================================================================
document.getElementById('powerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const a = parseInt(document.getElementById('base').value);
    const b = parseInt(document.getElementById('exponent').value);
    const result = raiseToDegree(a, b);

    document.getElementById('result').textContent = `Result: ${result}`;
});

function raiseToDegree(a, b) {
    return Math.pow(a, b);
}

//TASK5================================================================
function findMin(...arguments) {
    return Math.min(...arguments);
}

console.log("Minimal value in array is:", findMin(12, 14, 4, -4, 0.2));

//TASK6================================================================
function findUnique(arr) {
    let uniqueElements = new Set();
    for (const element of arr) {
        if (uniqueElements.has(element)) {
            return false;
        }
        uniqueElements.add(element);
    }
    return true;
}

console.log(findUnique([1, 2, 3, 5, 3])); // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true

//TASK7================================================================
function lastElem(array, x) {
    const copyArray = [...array]; 
    if (x === undefined) {
        return copyArray.pop();
    } else {
        return copyArray.splice(-x);
    }
}

console.log(lastElem([3, 4, 10, -5])); // -5
console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]

//TASK8================================================================
function capitalizeFirstLetter(string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(' ');
}

const outputString = capitalizeFirstLetter('i love java script');
console.log(outputString); // 'I Love Java Script'

