// #1
let user = {
    name: 'John',
    surname: 'Smith'
}
user.name = 'Pete';
delete user.surname;


// #2
function isEmpty(obj) {
    for(let k in obj) {
        return false;
    }
    return true;
}

// #3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let total = 0;
for(let k in salaries) {
    total += salaries[k];
}

// #4
function multiplyNumerics(obj) {
    for(let k in obj) {
        if(typeof obj[k] == number) {
            obj[k] *= 2;
        }
    }
}