//=================================TASK1===============================
let arr = ["Tom", "Sam", "Ray", "Bob"]; 
let [first, second, , ...fourth] = arr; 
console.log(first); // "Tom" 
console.log(second); // "Sam" 
console.log(fourth); // ["Bob"]
//================================TASK2================================
let data = { 
    names: ["Sam", "Tom", "Ray", "Bob"], 
    ages: [20, 24, 22, 26], 
  }; 

let { names, ages } = data;
let [, name2,, name4] = names;
let [, age2,, age4] = ages;

console.log(name2); // "Tom" 
console.log(age2); // 24 
console.log(name4); // "Bob" 
console.log(age4); // 26 
//================================TASK3================================
function multiply(numbers) {
    return numbers.reduce((accumulator, current) => accumulator * current, 1);
  }
  
  function mul(...arguments) {
    const numbers = arguments.filter(argument => typeof argument === 'number');
    return numbers.length > 0 ? multiply(numbers) : 0;
  }

  console.log(mul("abcdefghijklmnopqrstuvwxyz", 5, 2, null, undefined, Symbol("a"))); //10
//================================TASK4================================
let server = {
    data: 0,
    
    convertToString: function(callback) {
        callback(() => {
            return this.data + "";
        });
    }
};

let client = {
    server: server,
    result: "",

    calc: function(data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },

    notification: function() {
        return (callback) => {
            this.result = callback();
        };
    }
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

//================================TASK5================================
function mapBuilder(keysArray, valuesArrays) {
    let map = new Map();

    keysArray.forEach((key, index) => {
        map.set(key, valuesArrays[index]);
    });

    return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
