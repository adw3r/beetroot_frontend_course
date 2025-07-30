const symbols = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];
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

// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17),
// дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const ageCalculatorElement = document.getElementById('age_calculator');
ageCalculatorElement.querySelector('button').addEventListener('click', () => {
    console.log('clicked age_calculator button')
    try {
        let age = ageCalculatorElement.querySelector('#age_input').value;
        if (!checkIsNumber(age)) {
            return;
        }
        let result;
        if (age <= 0) {
            alert('Please enter a positive number!');
            return;
        } else if (age > 116) {
            alert('cant be more than 116 years old!');
            return;
        } else if (age < 12) {
            result = 'child';
        } else if (age < 18) {
            result = 'teenager';
        } else if (age < 60) {
            result = 'mature';
        } else {
            result = 'senior';
        }
        ageCalculatorElement.querySelector('div.result').textContent = `You are (teen, mature, ...): ${result}`;
    } catch (error) {
        console.log(error);
        alert('Wrong input!');
    }
})
// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші
// (1 !, 2 @, 3 # і т. д).
const specialSymbolElement = document.getElementById('special_symbol');
specialSymbolElement.querySelector('button').addEventListener('click', () => {
    console.log('clicked special_symbol button')
    try {
        let digit = specialSymbolElement.querySelector('#digit').value;
        if (!checkIsNumber(digit)) {
            return;
        }
        if (digit < 0 || digit > symbols.length - 1) {
            alert('Please enter a number between 0 and 9!');
            return;
        }
        const result = symbols[digit];
        specialSymbolElement.querySelector('div.result').textContent = `Special char: ${result}`;
    } catch (error) {
        console.log(error);
        alert('Wrong input!');
    }
})


// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const rangeSumElement = document.getElementById('range_sum');
rangeSumElement.querySelector('button').addEventListener('click', () => {
    console.log('clicked range_sum button')
    try {
        let sum_range_1 = rangeSumElement.querySelector('#sum_range_1').value;
        let sum_range_2 = rangeSumElement.querySelector('#sum_range_2').value;
        if (!checkIsNumber(sum_range_2) || !checkIsNumber(sum_range_1)) {
            return;
        }
        sum_range_1 = +sum_range_1;
        sum_range_2 = +sum_range_2;

        let result = sum_range_1;
        for (let i = sum_range_1 + 1; i <= sum_range_2; i++) {
            result += i
        }
        rangeSumElement.querySelector('div.result').textContent = `Range sum: ${result}`;
    } catch (error) {
        console.log(error);
        alert('Wrong input!');
    }
})


// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const gcd_block = document.getElementById('gcd_block');
gcd_block.querySelector('button').addEventListener('click', () => {
    console.log('clicked gcd_block button')
    try {
        let gcd_input_1 = gcd_block.querySelector('#gcd_input_1').value;
        let gcd_input_2 = gcd_block.querySelector('#gcd_input_2').value;
        if (!checkIsNumber(gcd_input_1) || !checkIsNumber(gcd_input_2)) {
            return;
        }
        gcd_input_1 = Math.abs(+gcd_input_1);
        gcd_input_2 = Math.abs(+gcd_input_2);

        const gcd = (x, y) => {
            while (y !== 0) {
                [x, y] = [y, x % y];
            }
            return x;
        }

        const result = gcd(gcd_input_1, gcd_input_2);
        gcd_block.querySelector('div.result').textContent = `GCD: ${result}`;

        rangeSumElement.querySelector('div.result').textContent = `Greatest common digest: ${result}`;
    } catch (error) {
        console.log(error);
        alert('Wrong input!');
    }
})

// Запитай у користувача число і виведи всі дільники цього числа
const divisorsBlock = document.getElementById('divisors_block');
divisorsBlock.querySelector('button').addEventListener('click', () => {
    console.log('clicked divisors button');
    try {
        let divisor = divisorsBlock.querySelector('#divisor').value;

        if (!checkIsNumber(divisor)) {
            return;
        }

        divisor = Math.abs(+divisor);
        const divisors = [];

        for (let i = 1; i <= divisor; i++) {
            if (divisor % i === 0) {
                divisors.push(i);
            }
        }

        divisorsBlock.querySelector('div.result').textContent = `Divisors: ${divisors.join(', ')}`;
    } catch (error) {
        console.log(error);
        alert('Error occurred!');
    }
});

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
const palindrome_block = document.getElementById('palindrome_block');
palindrome_block.querySelector('button').addEventListener('click', () => {
    console.log('clicked palindrome_block button');
    try {
        let palindromeInput = palindrome_block.querySelector('#palindrome').value;

        if (!checkIsNumber(palindromeInput)) {
            return;
        }

        palindromeInput = Math.abs(+palindromeInput); // гарантуємо позитивне число
        const str = palindromeInput.toString();

        if (str.length !== 5) {
            alert('Int must be 5 digits long!');
            return;
        }

        const reversed = str.split('').reverse().join('');
        const isPalindrome = str === reversed;

        let result = isPalindrome ? `${str} — is a palindrome!` : `${str} — not a palindrome!`;

        palindrome_block.querySelector('div.result').textContent = `Result: ${result}`;
    } catch (error) {
        console.log(error);
        alert('Error occurred!');
    }
});


// 1. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//     1. від 200 до 300 - знижка буде 3%;
//     2. від 300 до 500 - 5%;
//     3. від 500 і вище - 7%.
const discount_amnt_block = document.getElementById('discount_amnt_block');
discount_amnt_block.querySelector('button').addEventListener('click', () => {
    console.log('clicked discount_amnt_block button');
    try {
        let payment = discount_amnt_block.querySelector('#payment').value;

        if (!checkIsNumber(payment)) {
            return;
        }
        payment = +payment; // гарантуємо позитивне число
        if (payment <= 0) {
            alert('Сума має бути більшою за 0!');
            return;
        }

        let discount = 0;
        if (payment >= 500) {
            discount = 7;
        } else if (payment >= 300) {
            discount = 5;
        } else if (payment >= 200) {
            discount = 3;
        }

        const discountedTotal = payment * (1 - discount / 100);

        discount_amnt_block.querySelector('div.result').textContent = discount > 0 ? `Discount ${discount}%. Payment amount: ${discountedTotal.toFixed(2)} uah` : `Discount is not applied. Payment amount: ${payment.toFixed(2)} uah`;
    } catch (error) {
        console.log(error);
        alert('Error occurred!');
    }
});

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
// При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
// Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
const numbers_count_block = document.getElementById('numbers_count_block');
numbers_count_block.querySelector('button').addEventListener('click', () => {
    console.log('clicked numbers_count_block button');
    try {
        let positives = 0;
        let negatives = 0;
        let zeros = 0;
        let even = 0;
        let odd = 0;

        for (let i = 0; i < 10; i++) {
            let input = prompt(`Enter a number #${i + 1}:`);

            if (input === null) {
                alert('Input canceled!');
                break;
            } else input = +input

            if (isNaN(input)) {
                alert('That is not a number. Try again.');
                i--;
                continue
            }

            if (input > 0) positives++; else if (input < 0) negatives++; else zeros++;
            if (input % 2 === 0) even++; else odd++;
        }

        numbers_count_block.querySelector('div.result').textContent = 'Result: ' + `Positive numbers: ${positives}` + ' ' + `Negative numbers: ${negatives}` + ' ' + `Zeros numbers: ${zeros}` + ' ' + `Even numbers: ${even}` + ' ' + `Odd numbers: ${odd}`
    } catch (error) {
        console.log(error);
        alert('Error occurred!');
    }
});

// Зацикли відображення днів тижня таким чином: 
// «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const next_day_block = document.getElementById('next_day');
let today = new Date();
let index = today.getDay() - 1;
let answer = days[index];
next_day_block.querySelector('div.result').textContent = 'Today is: ' + answer

next_day_block.addEventListener('click', () => {
    console.log('clicked next_day');
    try {
        today = new Date();
        index = today.getDay() - 1;
        answer = days[index];
        let counter = 0;

        next_day_block.querySelector('div.result').textContent = 'Result: ' + answer

        while (1) {
            if (index === today.getDay() - 1) {
                answer = confirm(`Today is ${days[index]}. Want to see next day?`);
            } else {
                answer = confirm(`It would be ${days[index]}. Want to see next day?`);
            }
            if (!answer) break;
            index = (index + 1) % days.length; // Переходимо до наступного дня по колу
            counter++
        }

        next_day_block.querySelector('div.result').textContent = `The next day in ${counter} days would be: ${days[index]}`
    } catch (error) {
        console.log(error);
        alert('Error occurred!');
    }
});


// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
// При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
// Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
const guess_number = document.getElementById('guess_number');
guess_number.querySelector('button').addEventListener('click', () => {
    console.log('clicked guess_number button');
    try {
        let min = 0;
        let max = 100;
        let attempts = 0;

        let guess = Math.floor((min + max) / 2);
        while (1) {
            guess = Math.floor((min + max) / 2);
            attempts++;

            const answer = prompt(`Is your number > ${guess}, < ${guess} or == ${guess}?`);

            if (answer === '==') {
                alert(`I guessed correctly! The number is ${guess}. Attempts by the computer: ${attempts}`);
                break;
            } else if (answer === '>') {
                min = guess + 1;
            } else if (answer === '<') {
                max = guess - 1;
            } else {
                alert("Please enter only ‘>’, ‘<’ or ‘==’.'");
                attempts--;
            }

            if (min > max) {
                alert('It seems that something went wrong. You changed your answer or the number you entered is not within the range.');
                break;
            }
        }
        guess_number.querySelector('div.result').textContent = 'Result: ' + guess
    } catch (error) {
        console.log(error);
        alert('Error occurred!');
    }
});
