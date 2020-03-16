// #1
if(browser == 'Edge') {
    alert(`you've got the Edge`);
} else if(browser == 'Chrome'  || browser == 'Firefox' 
       || browser == 'Safari'  || browser == 'Opera') {
            alert(`We support these browsers too`);
    } else {
        alert(`We hope that...`);
}

// #3
switch(number) {
    case 0:
        alert('0');
        break;
    case 1:
        alert('1');
        break;
    case 2:
    case 3:
        alert('2, 3')
}