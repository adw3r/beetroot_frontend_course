const checkIsNumber = (number) => {
    if (!number) {
        alert('Please enter a value!');
        return false;
    }
    number = +number;
    if (isNaN(number)) {
        alert('Please enter a number!');
        return false;
    }
    return true;
}

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
const calc_area = (length, width = length) => length * width;


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


const args_length = document.getElementById('args_length');
args_length.querySelector('button').addEventListener('click', () => {
    try {
        let args = args_length.querySelector('input').value;
        if (!args) {
            alert('Please enter a value!');
            return
        }
        console.log(args)
        const res = countArgs(...args.split(','));
        args_length.querySelector('div.result').textContent = `Args length: ${res}, Args: ${args}`;
    } catch (error) {
        console.log(error);
        alert('Wrong input!');
    }
})

const what_is_bigger_el = document.getElementById('what_is_bigger');
what_is_bigger_el.querySelector('button').addEventListener('click', () => {
    try {
        let arg1 = what_is_bigger_el.querySelector('.arg1').value;
        let arg2 = what_is_bigger_el.querySelector('.arg2').value;

        if (!checkIsNumber(arg1) || !checkIsNumber(arg2)) {
            alert('Please enter a number!');
            return
        }
        let res = whatIsBigger(arg1, arg2);
        what_is_bigger_el.querySelector('div.result').textContent = `Res: ${res}`;
    } catch (error) {
        console.log(error);
        alert('Wrong input!');
    }
})

const factorial_block = document.getElementById('factorial_block');
factorial_block.querySelector('button').addEventListener('click', () => {
    try {
        let arg1 = factorial_block.querySelector('.arg1').value;

        if (!checkIsNumber(arg1)) {
            alert('Please enter a number!');
            return
        }
        let res = factorial(arg1);
        factorial_block.querySelector('div.result').textContent = `Res: ${res}`;
    } catch (error) {
        console.log(error);
        alert('Wrong input!');
    }
})

const concat_nums = document.getElementById('concat_nums');
concat_nums.querySelector('button').addEventListener('click', () => {
    try {
        let arg1 = concat_nums.querySelector('.arg1').value;
        let arg2 = concat_nums.querySelector('.arg2').value;
        let arg3 = concat_nums.querySelector('.arg3').value;

        if (
            !checkIsNumber(arg1) ||
            !checkIsNumber(arg2) ||
            !checkIsNumber(arg3)
        ) {
            alert('Please enter a number!');
            return
        }
        let res = concat(arg1, arg2, arg3);
        concat_nums.querySelector('div.result').textContent = `Res: ${res}`;
    } catch (error) {
        console.log(error);
        alert('Wrong input!');
    }
})

const calc_area_block = document.getElementById('calc_area');
calc_area_block.querySelector('button').addEventListener('click', () => {
    try {
        let arg1 = calc_area_block.querySelector('.arg1').value;
        let arg2 = calc_area_block.querySelector('.arg2').value;
        if (!arg2) {
            arg2 = arg1;
        }

        if (
            !checkIsNumber(arg1) ||
            !checkIsNumber(arg2)
        ) {
            alert('Please enter a number!');
            return
        }
        let res = calc_area(arg1, arg2);
        calc_area_block.querySelector('div.result').textContent = `Area: ${res}`;
    } catch (error) {
        console.log(error);
        alert('Wrong input!');
    }
})

const prime_block = document.getElementById('prime_block');
prime_block.querySelector('button').addEventListener('click', () => {
    console.log('clicked prime_block button')
    try {
        let arg1 = prime_block.querySelector('.arg1').value;
        let arg2 = prime_block.querySelector('.arg2').value;
        if (
            !checkIsNumber(arg1) ||
            !checkIsNumber(arg2)
        ) {
            alert('Please enter a number!');
            return
        }
        arg1 = +arg1;
        arg2 = +arg2;
        if (arg1 > arg2) {
            alert('arg1 can`t be greater than arg1!');
            return
        }
        let res = getPrimesInRange(arg1, arg2);
        console.log(res)
        prime_block.querySelector('div.result').textContent = `Primes: ${res}`;
    } catch (error) {
        console.log(error);
        alert('Wrong input!');
    }
})
