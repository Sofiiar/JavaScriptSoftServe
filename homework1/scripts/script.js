//======================================task2
function outputLastNameToConsole() {
    console.info('Last Name');
}

export { outputLastNameToConsole };


//======================================task3 

let a, b;

while (true) {
    a = prompt('Enter a number:');
    if (!isNaN(+a) && a.trim() !== '') {
        a = +a;
        break;
    }
    alert('Please enter a valid number.');
}

while (true) {
    b = prompt('Enter a string:');
    if (typeof b === 'string' && b.trim() !== '' && isNaN(b)) {
        break;
    }
    alert('Please enter a valid string.');
}

console.log(a, typeof a);
console.log(b, typeof b);

a = b;
console.log(a, typeof a);
console.log(b, typeof b);


//======================================task4
import MyObject from '../models/MyObject.js';

let obj = new MyObject('JS', 33, false);
console.log(obj);

//======================================task5
let isAdult = confirm('Are you over 18 years old?');
console.log(`User is adult: ${isAdult}`);

//======================================task6
let person = {
    name: 'Name',
    lastName: 'Surname',
    studyGroup: 'GR1',
    yearOfBirth: 1999,
    maritalStatus: false
};
for (let key in person) {
    console.log(`${key}: ${person[key]} (${typeof person[key]})`);
}

const nullVar = null;
let undefVar;

console.warn(typeof nullVar);
console.warn(typeof undefVar);

//======================================task7

function getUserData() {
    let login = prompt('Enter your login:');
    let email;
    let password = prompt('Enter your password:');

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    while (true) {
        email = prompt('Enter your email:');
        if (emailRegex.test(email)) { //RegExp.prototype.test()
            break;
        }
        alert('Please enter a valid email.');
    }
    return { login, email, password };
}
let { login, email, password } = getUserData();
alert(`Dear ${login}, your email is ${email}, your password is ${password}.`);

//======================================task8
import TimeConverter, { converter } from '../models/TimeConverter.js';

console.log(converter.getSecondsPerHour());
console.log(converter.getSecondsPerDay());
console.log(converter.getSecondsInEachMonth());