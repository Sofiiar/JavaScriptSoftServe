//TASK1===============================================
let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);


let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = x < y ? true : false;
console.log(res3);
console.log(typeof res3);

let res4 = x + y - "String";
console.log(res4);
console.log(typeof res4);

//TASK2===============================================
let number = Number(prompt("Please enter a number:").trim());

if (isNaN(number)) {
    console.log("You did not enter a valid number.");
} else {
    let isEven = number % 2 === 0;
    console.log(`The number ${isEven ? "is" : "is not"} even.`);

    let isPositive = number > 0;
    console.log(`The number ${isPositive ? "is" : "is not"} positive.`);

    let isMultipleOfSeven = number % 7 === 0;
    console.log(`The number ${isMultipleOfSeven ? "is" : "is not "} a multiple of 7.`);
}

//TASK3===============================================
let array = [];

array[0] = 3;
array[1] = "Any line";
array[2] = true
array[3] = null;

console.log("The number of elements stored in the array:", array.length);

array[4] = prompt("Please enter any value:");
console.log("The fifth element of the array is:", array[4]);

array.shift();
console.log("Array after deleting the first element:", array);

//TASK4===============================================
let cities = ["Rome", "Lviv", "Warsaw"];
let result = cities.map(city => city.trim()).join(" * ");

console.log(result);

//TASK5===============================================
let userAge = Number(prompt("How old are you?").trim());

if (isNaN(userAge)) {
    console.log("You did not enter a valid age.");
} else if (userAge < 18) {
    console.log("You are still too young.");
} else {
    console.log("You have reached the age of majority.");
}

//TASK6===============================================
let sideA = Number(prompt("Enter the length of triangle's side A:").trim());
let sideB = Number(prompt("Enter the length of triangle's side B:").trim());
let sideC = Number(prompt("Enter the length of triangle's side C:").trim());

if (!isNumber() || !isPositive() || !isSideLongEnough()) {
    console.log("Incorrect data");
} else {
    let semiPerimeter = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
    console.log("The area of the triangle is: " + area.toFixed(3));

    let sidesSquared = [sideA * sideA, sideB * sideB, sideC * sideC].sort((a, b) => a - b);
    let isRightTriangle = sidesSquared[2] === sidesSquared[0] + sidesSquared[1];
    console.log(`The triangle ${isRightTriangle ? "is" : "is not"} a right triangle.`);
}


function isNumber () {
    return !isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC);
}

function isPositive () {
    return sideA > 0 && sideB > 0 && sideC > 0;
}

function isSideLongEnough () {
    return sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA;
}

//TASK7===============================================
function displayGreetingBasedOnTime() {
    let currentHour = new Date().getHours();
    let greeting;

    if (currentHour >= 23 || currentHour < 5) {
        greeting = "Good night";
    } else if (currentHour >= 5 && currentHour < 11) {
        greeting = "Good morning";
    } else if (currentHour >= 11 && currentHour < 17) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    console.log(greeting);

    switch (true) {
        case (currentHour >= 23 || currentHour < 5):
            greeting = "Good night";
            break;
        case (currentHour >= 5 && currentHour < 11):
            greeting = "Good morning";
            break;
        case (currentHour >= 11 && currentHour < 17):
            greeting = "Good day";
            break;
        case (currentHour >= 17 && currentHour < 23):
            greeting = "Good evening";
            break;
    }
    console.log(greeting);
}

displayGreetingBasedOnTime();