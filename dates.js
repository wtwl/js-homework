// #1
let date = new Date(2012, 1, 20, 3, 12);

// #2
function getWeekDate(date) {
    const daysNames = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    let day = daysNames[date.getWeekDay()];
    return day;
}

// #3
function getLocaleDate(date) {
    let weekDay = date.getDay();
    if (weekDay == 0) weekDay = 7;
    return weekDay;
}

// #4
function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy;
}

// #5
function getLastDayOfMonth(year, month) {
    const date = new Date(year, month + 1, 1);
    return new Date(date - 1).getDate();
}

// #6
function getSecondsToday() {
    const nowDate = new Date();
    const beginingOfDay = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getHours());
    let dateDifference = nowDate - beginingOfDay; 
    return Math.floor(dateDifference / 1000);
}

// #7
function getSecondsToTommorow() {
    const nowDate = new Date();
    const tommorowDay = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 1);
    let dateDifference = tommorowDay - nowDate; 
    return Math.floor(dateDifference / 1000);
}

// #8
function formatDate(date) {
    const nowDate = new Date();
    let difference = nowDate - date; // кол-во миллисекунд прошедшик с date до вызова функции
    let differenceInSec = difference / 1000;  //  кол-во секунд 
    let differenceInMin = differenceInSec / 60; // кол-во минут
    if( difference < 1000) {  // если разница в миллисекундах меньше секунды (1000мс), то возварщаем "прямо сейчас"
       return `Прямо сейчас`;
    } else if( differenceInSec < 60) { // если прошло секун меньше 1 минуты(прошло меньше 60 секунд)
        return `${differenceInSec} секунд назад`;
    } else if(differenceInMin < 60) { //если прошло минут, меньше 1 часа 
        return `${differenceInMin} минут назад`;
    } else {
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear().toString().slice(2)} ${date.getHours()}:${date.getMinutes()}`
    }
}
