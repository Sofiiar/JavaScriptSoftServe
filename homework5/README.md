# JavaScript Object and Class Exercises

## Exercise 1: Property Count

Function `propsCount` accepts an object and returns the number of properties in the object.

### Example
```javascript
let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web development"
};

function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}

console.log(propsCount(mentor)); // 3
```

## Exercise 2: Show Properties

Create an object with 5 fields and write a function `showProps(obj)`, which accepts this object and outputs its properties and values in array format.

### Example
```javascript
let book = {
  title: "1984",
  author: "George Orwell",
  genre: "Dystopian",
  yearPublished: 1949,
  isFiction: true
};

function showProps(obj) {
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
}

showProps(book);
```
## Exercise 3: Person and Student Classes

Create the `Person` class, where the constructor accepts name and surname parameters, and includes a `showFullName()` method that displays the person's first and last name. The `Student` class, inherited from the `Person` class, has its constructor accepting name, surname, and the year parameter (year of admission to the university). Redefine the `showFullName(middleName)` method in the Student class to display not only the name and surname but also the patronymic (middleName) of the student. Implement the `showCourse()` method in the Student class, which displays the current course of the student (from 1 to 6), determined as the difference between the current year and the year of admission to the university.

### Example
```javascript
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(middleName) {
    return `${this.surname} ${this.name} ${middleName}`;
  }

  showCourse() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); // Current course: 8
```

## Exercise 4: Worker Class

Create a class `Worker` which will have a constructor accepting the following properties: `fullName` (name and last name), `dayRate` (rate per day of work), and `workingDays` (number of days worked). The class must have a `showSalary()` method that displays the employee's salary, calculated as the product of the `dayRate` and the number of `workingDays`. Additionally, add a private field `#experience` with a default value of 1.2. Use this as an additional multiplier when determining the salary in the `showSalaryWithExperience()` method. Display the value of the salary with this coefficient.

### Example
```javascript
class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this.#experience = 1.2;
  }

  #experience;

  showSalary() {
    return this.dayRate * this.workingDays;
  }

  showSalaryWithExperience() {
    return this.showSalary() * this.#experience;
  }
}

let worker1 = new Worker("John Doe", 100, 20);
console.log(worker1.showSalary()); // 2000
console.log(worker1.showSalaryWithExperience()); // 2400
```

# Geometric Figures Exercise

## Task Description
Create a parent class `GeometricFigure` with an empty method `getArea()` and the `toString()` method to output the class name. Develop three descendant classes (`Triangle`, `Square`, and `Circle`) inheriting from `GeometricFigure`. Each child class should implement the `getArea()` method for its specific shape. Additionally, create a function `handleFigures(figures)` that processes an array of these objects, outputs details, and calculates the total area.

### GeometricFigure Class
```javascript
class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

Your code. . .

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)]; console.log( handleFigures (figures));

Example result :
Geometric figure: Triangle - area: 10
Geometric figure: Square - area: 49
Geometric figure: Circle - area: 78.53981633974483
137.53981633974485 // total area
```