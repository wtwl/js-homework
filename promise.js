// // #1
// let promise = new Promise(function(resolve, reject) {
//     resolve(1);

//     setTimeout(() => resolve(2), 1000);
//   });

//   promise.then(alert); // вывод 1, промис нельзя зарезолвить больше одного раза 


// #2
function delay(ms) {
    return new Promise((res, _rej) => {
        setTimeout(() => {
            res();
        }, ms)
    });
}
delay(3000).then(() => console.log(`через 3 сек`));

// #3

