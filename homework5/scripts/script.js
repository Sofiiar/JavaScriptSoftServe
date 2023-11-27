//TASK1=======================================================

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web development"
};

console.log(propsCount(mentor)); // 3


//TASK2=======================================================
let vehicle = {
    type: "Car",
    brand: "Toyota",
    model: "Rav-4",
    year: 2016,
    color: "Black",
    engine: 2.0
  };

  function showProps(obj) {
    const keys = Object.keys(obj);
    const values = keys.map(key => obj[key]);
  
    console.log("Properties:", keys);
    console.log("Values:", values);
  }
  
  //TASK3=======================================================
  class Person {
    #name;
    #surname;
  
    constructor(name, surname) {
      this.#name = name;
      this.#surname = surname;
    }
  
    showFullName() {
      return `${this.#name} ${this.#surname}`;
    }
  }
  
  class Student extends Person {
    #year;
  
    constructor(name, surname, year) {
      super(name, surname);
      this.#year = year;
    }
  
    showFullName(patronomicName) {
      return super.showFullName() + ' ' + patronomicName;
    }
  
    showCourse() {
      const currentYear = new Date().getFullYear();
      let course = currentYear - this.#year;

      if (course > 6) {
        return "Graduated";
      }
  
      return course;
    }
  }
  
  const stud1 = new Student("Petro", "Petrenko", 2015);
  console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
  console.log("Current course: " + stud1.showCourse()); // Current course: Graduated

  //TASK4=======================================================
  class Worker {
    #experience = 1.2;
  
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
    }
  
    showSalary() {
      return this.dayRate * this.workingDays;
    }
  
    showSalaryWithExperience() {
      return this.showSalary() * this.#experience;
    }
  
    get experience() {
      return this.#experience;
    }
  
    set experience(newExperience) {
      this.#experience = newExperience;
    }

    static sortWorkersBySalary(workers) {
        return workers.slice().sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
    }
  }

let worker1 = new Worker("John Johnson", 20, 23);
let worker2 = new Worker("Tom Thomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 23);

[worker1, worker2, worker3].forEach(worker => {
  console.log(worker.fullName);
  console.log("Salary: " + worker.showSalary());
  console.log("New experience: " + worker.experience);
  console.log("Salary with experience: " + worker.showSalaryWithExperience());

  worker.experience = 1.5;
  console.log("New experience: " + worker.experience);
  console.log("Salary with new experience: " + worker.showSalaryWithExperience());
});


console.log("\nSorted salary:");
Worker.sortWorkersBySalary([worker1, worker2, worker3]).forEach(worker => {
  console.log(worker.fullName + ": " + worker.showSalaryWithExperience());
});

  //TASK5=======================================================

  const GeometricFigure = () => {
    const getArea = () => 0;
    const toString = () => 'GeometricFigure';
  
    return { getArea, toString };
  };
  
  const Triangle = (base, height) => {
    const proto = GeometricFigure();
    const getArea = () => (base * height) / 2;
    const toString = () => 'Triangle';
  
    return { ...proto, getArea, toString };
  };

  const Square = (side) => {
    const proto = GeometricFigure();
    const getArea = () => side * side;
    const toString = () => 'Square';
  
    return { ...proto, getArea, toString };
  };
  
  const Circle = (radius) => {
    const proto = GeometricFigure();
    const getArea = () => Math.PI * radius * radius;
    const toString = () => 'Circle';
  
    return { ...proto, getArea, toString };
  };
  
  function handleFigures(figures) {
    return figures.reduce((totalArea, figure) => {
      if (typeof figure.getArea === 'function') {
        const area = figure.getArea();
        console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
        return totalArea + area;
      }
      return totalArea;
    }, 0);
  }

const figures = [Triangle(4, 5), Square(7), Circle(5)];
console.log(handleFigures(figures));