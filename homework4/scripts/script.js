//TASK1================================================================
function calcRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        let invalidParams = [];
        if (isNaN(width)) invalidParams.push('width');
        if (isNaN(height)) invalidParams.push('height');

        throw new Error(`Invalid parameter(s): ${invalidParams.join(' and ')}`);
    }
    return width * height;
}

try {
    console.log("Area of the rectangle is:", calcRectangleArea(2, 3));
} catch (error) {
    console.error("Error occurred while calculating area:", error.message);
}


//TASK2================================================================
class EmptyInputError extends Error {
    constructor() {
        super("The field is empty! Please enter your age.");
        this.name = "EmptyInputError";
    }
}

class NonNumericError extends Error {
    constructor() {
        super("Input is not numeric! Please enter a numeric value of age.");
        this.name = "NonNumericError";
    }
}

class AgeRequirementError extends Error {
    constructor() {
        super("Access denied! You must be at least 14 years old.");
        this.name = "AgeRequirementError";
    }
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    try {
        let ageInput = document.getElementById("age").value;
        if (ageInput.trim() === "") throw new EmptyInputError();
        let ageNumber = Number(ageInput);
        if (isNaN(ageNumber)) throw new NonNumericError();
        if (ageNumber < 0) throw new Error("Age cannot be negative.");
        if (ageNumber < 14) throw new AgeRequirementError();

        document.getElementById("result").innerText = "Access granted! You can watch the movie.";
    } catch (error) {
        document.getElementById("result").innerText = error.name + ": " + error.message;
    }
});

//TASK3================================================================

class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = "MonthException";
    }
}

function showMonthName(month) {
    const monthMap = {
        1: "January", 
        2: "February", 
        3: "March", 
        4: "April",
        5: "May",
        6: "June", 
        7: "July", 
        8: "August",
        9: "September", 
        10: "October", 
        11: "November", 
        12: "December"
    };

    if (!monthMap[month]) {
        throw new MonthException("Incorrect month number");
    }

    return monthMap[month];
}

function getUserMonthInput() {
    let monthInput = prompt("Enter the month number (1-12):");
    return monthInput;
}

function displayMonthName() {
    try {
        let monthInput = getUserMonthInput();
        let monthNumber = Number(monthInput);
        
        if (isNaN(monthNumber)) {
            throw new Error("Input is not a number.");
        }

        let monthName = showMonthName(monthNumber);
        console.info("The month is: " + monthName);
    } catch (error) {
        console.error(error.name + ": " + error.message);
    }
}

displayMonthName();

//TASK4================================================================
function showUser(id) {
    if (id < 0) {
        throw new Error(`ID must not be negative: ${id}`);
    }
    return { id };
}

function showUsers(ids) {
    return ids.reduce((validIDs, id) => {
        try {
            validIDs.push(showUser(id));
        } catch (error) {
            console.error("Error: " + error.message);
        }
        return validIDs; 
    }, []);
}

console.log(JSON.stringify(showUsers([7, -12, 44, 22])));