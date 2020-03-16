// #1
if("0") {
    alert('Привет'); // Выведется "Привет"
}

// #2
const officialJSName = 'ECMAScript';

let userInput = prompt('What\'s the js oficial name?');

if(userInput === officialJSName) {
    console.log('Верно');   
} else {
    console.log('You dont\' know? "JavaScript"');
}

// #3
let userNumberInput = +prompt('Enter the number');

if(userNumberInput > 0) {
    alert(1);
} else if(userNumberInput < 0) {
    alert(-1);
} else {
    alert(0);
}

// #4
let a = b = 5;

let result = a + b > 4 ? 'Мало' : 'Много';

// #5
let message;
let login = 'admin';

message = login == 'Сотрудник' ? 'привет' : login == 'Директор' ? 'здравствуйте' : login == '' ? 'нет логина' : '';


