// #1
alert(null || 2 || undefined); // 2

// #2
alert(alert(1) || 2 | alert(3)); // 1, 2

// #3
alert( 1 && null && 2); // null

// #4
alert( alert(1) && alert(2) ); // alert 1 undifined

// #5
alert(null || 2 && 3 || 4); // 3

// #6
if(age >= 14 || age <= 90) {
    //code...
}

// #7
if(age  < 14 || age > 90) {
    //code...
}

if(!(age >= 14 && age <= 90)) {
    //code...
}

// #8
if (-1 || 0) alert( 'first' ); // Выполнится 
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); // Выполнится 

// #9
let userInput = prompt(`Who's there?`);

if(userInput == "Admin") {
    let pass = prompt('enter password');
    if(pass == 'Я главный') {
        alert('Здравствуйте');
    } else if(pass == null) {
        alert('отменено')
    } else {
        alert('неверный пароль')
    }
} else if(userInput == null) {
    alert('отменено');
} else {
    alert('i dont know you');
}

