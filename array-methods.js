// #1
function camelize(str) {
    let splitedArr = str.split('-');
    let resultString = '';
    for(let i = 0; i < splitedArr.length; i++) {
        const stringFromArr = splitedArr[i]; 
        resultString += stringFromArr[0].toUpperCase() + stringFromArr.slice(1);
    }
    return resultString;
} 

// #2
function filterRange(arr, a, b) {
    let filtred = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= a && arr[i] <= b) filtred.push(arr[i]);
    }
    return filtred;
}

// #3
function filterRangeInPlace(arr, a, b) {

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

// #4
function sort(arr) {
    return arr.sort((a, b) => a - b);
}

// #5
function copySorted(arr) {
    let copyOfArr = arr.slice();
    return copyOfArr.sort((a, b) => a - b);
}

// #6
function Calculator() {
    this.operations = {
        'sum': function(a, b) {
            return a + b;
        },
        'sub': function(a, b) {
            return a - b;
        }
    }
}

Calculator.prototype.calculate = function(str) {
    let splitedExpression = str.split(' ');
    let firstOperand = splitedExpression[0];
    let secondOperand = splitedExpression[2];
    let operation = [1];
    switch(operation) {
        case '+':
            this.operations.sum(firstOperand, secondOperand);
            break;
        case '-':
            this.operations.sub(firstOperand, secondOperand);
            break;
        default:
            this.operations[operation](firstOperand, secondOperand);
    }
}

Calculator.prototype.addMethod = function(operation, funct) {
    this.operations[operation] = funct;
}

// #7
function namesTransformation(arr) {
    let namesArr = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        namesArr.push(element.name);
    }
    return namesArr;
}

// #8
function fullNamesTransformation(arr) {
    let fullNamesArr = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        let userObj = { id: element.id, fullName: `${element.name} ${element.surname}` }
        fullNamesArr.push(userObj);
    }
    return fullNamesArr;
}

// #9
function sortByAge(arr) {
    let namesArr = [];
    let sortedArr = arr.sort((a, b) => a.age - b.age);
    for (let index = 0; index < sortedArr.length; index++) {
        const element = sortedArr[index];
        namesArr.push(element.name);
    }
    return namesArr;
}

// #10
function shuffleArray(arr) {
    let arrCopy = arr.slice();
    let shuffledArr = [];
    while(arrCopy.length) {
        let rnd = Math.floor(Math.random() * arrCopy.length);
        let rndElement = arrCopy.splice(rnd, 1)[0];
        shuffledArr.push(rndElement);
    }
        
    return shuffledArr;
}

// #11
function getAverageAge(arr) {
    let totalAge = 0;
    arr.forEach(x => totalAge += x.age);
    return totalAge / arr.length;
}

// #12
function unique(arr) {
    let uniqueArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i], i + 1) > 0 ) continue;
        uniqueArr.push(arr[i]);
    }
    return uniqueArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));