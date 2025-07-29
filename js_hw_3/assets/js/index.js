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
        ageCalculatorElement.querySelector('div.result').textContent = `Result: ${result}`;
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
        specialSymbolElement.querySelector('div.result').textContent = `Result: ${result}`;
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
        rangeSumElement.querySelector('div.result').textContent = `Result: ${result}`;
    } catch (error) {
        console.log(error);
        alert('Wrong input!');
    }
})


// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const gcd_block = document.getElementById('gcd_block');
gcd_block.querySelector('button').addEventListener('click', () => {
    console.log('clicked range_sum button')
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

        const result = gcd(a, b);
        gcd_block.querySelector('div.result').textContent = `GCD: ${result}`;

        rangeSumElement.querySelector('div.result').textContent = `Result: ${result}`;
    } catch (error) {
        console.log(error);
        alert('Wrong input!');
    }
})
