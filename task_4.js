let number;
let sum = 0;

do {
    number = parseInt(prompt('Введите любое целое число больше 1:'));
 } while(number <= 1);


for(let a = 2; a < number; a++) {
    if (number % a === 0) {
        sum += 1;
    }
}

if (sum >= 1) {
    document.write(number + " - не является простым числом!");
} else {
    document.write(number + " - является простым числом!");
}