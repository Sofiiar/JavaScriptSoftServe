# Practical Task 3

## Overview
This document outlines a series of practical coding tasks focused on basic JavaScript operations, including loops, functions, and array manipulations.

### Task 1: Array Product Calculation
- **Objective**: Calculate the product of array elements.
- **Instructions**: Use a `for` loop to calculate the product of the elements within the array `[2, 3, 4, 5]`. Implement the same logic using a `while` loop.

### Task 2: Even and Odd Identification
- **Objective**: Identify even and odd numbers.
- **Instructions**: Write a JavaScript `for` loop that iterates from 0 to 15. For each iteration, determine if the current number is even or odd and display a corresponding message on the screen.

  **Sample Output**:
```javascript
"0 is even"
"1 is odd"
"2 is even"
```

### Task 3: Random Array Generator
- **Objective**: Create an array of random integers.
- **Instructions**: Write a function `randArray(k)` that generates an array of `k` random integers. The random numbers should be within the range of 1-500.

**Sample Output**:
```javascript
randArray(5); // [399,310,232,379,40]
```


### Task 4: Exponentiation Function
- **Objective**: Raise a number to a power.
- **Instructions**: Develop a function `raiseToDegree(a, b)` that returns the result of raising the number `a` to the power of `b`. This function should only work with integers.

**Sample Output**:
```javascript
raiseToDegree(3, 4); // 81
```


### Task 5: Minimum Value Finder
- **Objective**: Find the smallest number in a list.
- **Instructions**: Implement the `findMin()` function, which accepts an arbitrary number of numeric arguments and returns the smallest value. 

**Sample Output**:
```javascript
findMin(12, 14, 4, -4, 0.2); // -4
```

### Task 6: Unique Elements Checker
- **Objective**: Check for uniqueness within an array.
- **Instructions**: Create a function `findUnique(arr)` that takes an array `arr` as a parameter and checks if all elements in the array are unique (no duplicates). The function should return `true` if all elements are unique, and `false` otherwise.

  **Sample Output**:
```javascript
findUnique ([1, 2, 3, 5, 3]); // => false
findUnique ([1, 2, 3, 5, 11 ]); // => true
```

### Task 7: Last Element Selector

- **Objective**: Retrieve the last element or a specified number of elements from the end of an array.
- **Instructions**: Implement a function `lastElem` that takes an array and an optional numerical parameter. The function returns the last element if no second parameter is provided, or an array of the last 'n' elements if the second parameter is specified.


  **Sample Output**:
```javascript
console.log(lastElem([3, 4, 10, -5])); // -5
console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]
```


### Task 8: Capitalize First Letter of Each Word

- **Objective**: Write a function that capitalizes the first letter of each word in a given string.
- **Instructions**: Implement a function `capitalizeFirstLetters` that accepts a string as an argument. The function should iterate over each word in the string and capitalize the first letter of each word.

  **Sample Output**:
```javascript
Input string : 'i love java script'
Output string: 'I Love Java Script'
```

