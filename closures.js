// #1
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  // счётчики независимы 
  alert( counter2() ); // 0 
  alert( counter2() ); // 1

  // #2
  function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  let counter = new Counter();
  alert( counter.up() ); // 1
  alert( counter.up() ); // 2
  alert( counter.down() ); // 1

  // #3
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
//sayHi();  // sayHi не существует вне  блока If

// #4
function closureSum(a) {
    return function(b) {
        return a + b;
    }
}
let sum = closureSum(2)(3);

// #5
function inBetween(a, b) {
    return function(item) {
        return a >= item && b <= item;
    }
}
function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    }
}

// #6
function byField(x) {
    return function(a, b) {
        return a[x] - a[b];
    }
}

// #7
function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let shooter = function() {
        let closureI = i;   
        alert( closureI ); 
      };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  