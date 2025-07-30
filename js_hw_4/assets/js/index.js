// 1.Напиши всі можливі варіанти створення функцій.
// ✅ Має підняття (hoisting) — можна викликати до оголошення.
function greet_1(name) {
    return `Hello, ${name}`;
}

const sum = new Function('a', 'b', 'return a + b');

// ⛔️ Не має підняття. Викликається тільки після оголошення.
const greet_2 = function (name) {
    return `Hello, ${name}`;
};


// ⛔️ Не має this, arguments, super, не підходить для методів об'єкта або конструкторів.
const greet_3 = (name) => {
    return `Hello, ${name}`;
};
const greet_4 = name => `Hello, ${name}`;


// 2.Створи функцію, яка буде виводити кількість переданих їй аргументів.
function countArgs(...args) {
    return arguments.length;
}


// 3.Напиши функцію, яка приймає 2 числа і повертає :
const whatIsBigger = (a, b) => a === b ? 0 : a > b ? 1 : -1;

// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
const factorial = n => (n < 0 ? null : n <= 1 ? 1 : n * factorial(n - 1));


// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.
const concat = (...args) => args.join('');

// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
const calculateArea = (length, width = length) => length * width;


// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
const isPrime = n => {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
};

// Напиши функцію, яка приймає
// мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими.
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
const getPrimesInRange = (min, max) => {
    const primes = [];
    for (let i = min; i <= max; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
};