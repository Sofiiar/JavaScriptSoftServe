//============================TASK1============================
const getPromise = (message, delay) => 
    new Promise(resolve => setTimeout(() => resolve(message), delay));

getPromise("test promise", 2000).then(data => console.log(data));

//============================TASK2============================
function calcArrProduct(array) {
    return new Promise((resolve, reject) => {
        if (array.every(item => typeof item === 'number')) {
            const product = array.reduce((accumulator, current) => accumulator * current, 1);
            resolve(product);
        } else {
            reject("Error! Incorrect array!");
        }
    });
}

calcArrProduct([3, 4, 5]).then(result => console.log(result))
    .catch(error => console.log(error));

calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result))
    .catch(error => console.log(error));

//============================TASK3============================
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

function showNumbers() {
    let promise = Promise.resolve();

    for (let i = 0; i <= 10; i++) {
        promise = promise.then(() => {
            let time = Math.floor(Math.random() * 3000); 
            return delay(i, time).then(number => console.log(`"showNumbers()": ${number}`));
        });
    }
}

showNumbers();
//============================TASK4============================
const delayAlternative = (time) => new Promise(resolve => setTimeout(resolve, time));


async function showNumbersAlternative() {
    for (let i = 0; i <= 10; i++) {
        let time = Math.floor(Math.random() * 3000);
        await delayAlternative(time);
        console.log(`"showNumbersAlternative()": ${i}`);
    }
}

showNumbersAlternative();