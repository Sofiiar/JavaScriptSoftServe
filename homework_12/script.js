//==============================TASK1================================
function isUpperCaseMatch(string) {
    const regex = /^[A-Z]/;
    return string.match(regex) ? "String starts with uppercase character" : "String does not start with uppercase character";
}

console.log(isUpperCaseMatch('regexp'));  // String does not start with uppercase character
console.log(isUpperCaseMatch('RegExp'));  // String starts with uppercase character

//===============================TASK2================================
function checkEmail(email) {
    const trimmedEmail = email.trim();
    const regex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(trimmedEmail);
}

console.log(checkEmail("Qmail2@gmail.com ")); //true

//================================TASK3================================
function findMatches(text) {
    const regex = /d[b]+d?/gi;
    let matches = [];
    let match;

    match = regex.exec(text);
    matches.push(match[0]);
        const matchText = match[0];
        const sameCharactersWithoutFirstGroupRegex = /(?<!^)(.)\1*/gi;
        Array.from(matchText.matchAll(sameCharactersWithoutFirstGroupRegex), m => matches.push(m[0]));

    return matches;
}

const result = findMatches(" cdbBdbsbz ");
console.log(result); 

//================================TASK4=================================
function swapTwoWords(input) {
    const regex = /(\b\w+\b)\s+(\b\w+\b)/;
    return input.replace(regex, '$2, $1');
}

const inputString = "Java Script";
const outputString = swapTwoWords(inputString);
console.log(outputString);

//================================TASK5=================================
function isValidCardNumber(cardNumber) {
    const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regex.test(cardNumber);
}

console.log(isValidCardNumber("9999-9999-9999-9999")); // true
console.log(isValidCardNumber("9999999999999999"));  // false

//================================TASK6=================================
function checkAdvancedEmail(email) {
    const regex = /^(?![_-])[\w]+(?:-(?!-)[\w]+)*(?<![_-])@[a-zA-Z0-9]+(?:[.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;

    return regex.test(email) ? console.log('Email is correct!') : console.log('Email is not correct!');
}

checkAdvancedEmail('my_mail@gmail.com');   // Email is correct!
checkAdvancedEmail('*my_mail@gmail.com');  // Email is not correct!
checkAdvancedEmail('my_ma--il@gmail.com'); // Email is not correct!

//================================TASK7==================================
function isLoginValid(login) {
    return /^[a-zA-Z][a-zA-Z0-9.]*$/.test(login);
}

function extractNumbers(login) {
    return login.match(/\b\d+(\.\d+)?\b/g) || [];
}

function checkLogin(login) {
    const isValidLogin = isLoginValid(login);
    const numbers = extractNumbers(login);

    console.log(isValidLogin); 
    numbers.forEach(number => console.log(number)); 

    return isValidLogin; 
}
checkLogin('ee1.1ret3'); 
checkLogin('ee1*1ret3'); 