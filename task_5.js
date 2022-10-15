let number = parseInt(prompt('Введите любое число:'));
let sum = 0;

for (let i = 1; i < number; i++) {
        if (number % 3 === 0) {
            if (3**i === number) {
                document.write('Число ' + number + ' можно получить путем возведения числа 3 в степень ' + i + '.');
                sum = i;
            } 
        } 
    }

if (!(number % 3 === 0) || sum === 0) {
    document.write ('Число ' + number + ' нельзя получить путем возведения числа 3 в некоторую степень.');
}
