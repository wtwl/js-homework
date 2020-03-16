// #1
let furuits = ['Яблоки', 'Груша', 'Апельсин'];

let shoppingCart = furuits;
shoppingCart.push('Банан');
alert(fruits.length); // 4

// #2
let styles = ['Jazz', 'Blues'];
styles.push('rock\'n\'roll');
let arrayMid = Math.floor((styles.length - 1) / 2);
styles[arrayMid] = 'Классика';
console.log(styles.shift);
styles.unshift('Rap', 'Ragae');

// #3
let arr = [1, 2];

arr.push(function() {
    alert(this);
});

ar[2](); // вернет [1, 2, functiion()...] массив - это объект, this -указывает на него

// #4
function sumInput() {
    let isNeedToStop = false;
    let inputsArray = [];
    let sum = 0;
    while(!isNeedToStop) {
        let nextInput = +prompt('Enter the number: ');

        if(nextInput == null || nextInput != nextInput) {
            break;
        }
        inputsArray.push(nextInput);
    }
    for(let i = 0; i < inputsArray.length; i++) {
        sum += inputsArray[i];
    }
    return total;
}


// #5
function maxSubSumArray(arr) {
    let maxSubSum = 0;
    let currentMaxSubSum = 0;

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        currentMaxSubSum += element;
        maxSubSum = currentMaxSubSum > maxSubSum ? currentMaxSubSum : maxSubSum; 
        if(currentMaxSubSum < 0) currentMaxSubSum = 0;
    }

    return maxSubSum;
}