'use strict'
const num = prompt('Введите любое число:');
const pow = prompt('Введите степень, в которую хотите возвести число:');
const mathPow = (num, pow = 1) => {
    if (isNaN(num) || num === null || !num.trim() || isNaN(pow)) return confirm('Error! Вы не ввели число!');
    const result = (num ** pow);
    alert(result);
    return result;
}
mathPow(num, pow);
