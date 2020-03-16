// // #1
// let i = 3;
// while (i) {
//   alert( i-- ); // последний алерт - 1
// }

// // #2
// //prefix
// let i = 0;
// while (++i < 5) alert( i ); // 4
// //postfix
// let i = 0;
// while (i++ < 5) alert( i ); // 5


// // #3
// //prefix
// for (let i = 0; i < 5; i++) alert( i ); // 4
// //postfix
// for (let i = 0; i < 5; ++i) alert( i ); // 4

// // #4

// for(let i = 2; i <= 10; i += 2) {
//     console.log(i);
    
// };

// // #4
// let i = 0;
// while (i < 3) {
//     console.log(i++);
// }

// #5
function repeatPrompt() {

    while (true) {
        let userInput = +prompt('Enter number higher than 100: ');
        if(userInput < 100) continue;
        break;
    }
}


// #6
function primeNumber(n) {
    for(let i = 2; i < n; i++) {
        let isPrime = true;
        for(let j = 2; j < i; j++) {
            if(i % j == 0) {
                isPrime = false;
                break;
            }
        }     
    
        if(isPrime) console.log(i);
    }
}