let number = parseInt(prompt('Введите любое целое число:'));

let message = 'Целые числа от 1 до 100, квадрат которых не превышает число ' + number + ':<br>';
document.write(message);

for(let a = 1; a <= 100; a++) {
    let square = a * a;
    if (square <= number) {
        document.write(a + "; ");
    }
}