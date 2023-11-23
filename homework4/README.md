# JavaScript Practical Tasks

## Task 1: Rectangle Area Calculator

### Description
Create a function `calcRectangleArea(width, height)` that calculates the area of a rectangle given its width and height. The function should throw an exception if any of the parameters are not numeric.

### Usage
Implement error handling when calling this function to manage any potential exceptions.

## Task 2: Age Verification

### Description
Write a `checkAge()` function that prompts the user for their age and validates the input. The function should display an error message if:
- The input is empty.
- The value is non-numeric.
- The age is less than 14 years.

Upon valid input, grant the user access to view a movie.

### Error Handling
Use a `catch` block to output the name and description of the error.

## Task 3: Month Name Resolver

### Description
Create a `MonthException` class with a constructor that takes a message parameter and sets the `name` property to 'MonthException'. Implement a `showMonthName(month)` function that returns the month's name by its number. If the input is incorrect, throw a `MonthException`.

### Example Program
```javascript
console.log(showMonthName(5)); // Expected output: "May"
console.log(showMonthName(14)); // Expected output: "MonthException: Incorrect month number"
```

## Task 4: User ID Functions

### Description
This task involves two functions related to user ID validation:
- `showUser(id)`: Accepts a user ID and returns an object with the ID value. Throws an error for negative IDs.
- `showUsers(ids)`: Takes an array of user IDs, validates each ID using `showUser`, and returns an array of objects with valid IDs. It displays an error message for any invalid IDs.

### An example of the program

```javascript
showUsers([7, -12, 44, 22]) ;
Error: ID must not be negative: -12
[ {id: 7}, {id: 44}, {id: 22} ]
```
