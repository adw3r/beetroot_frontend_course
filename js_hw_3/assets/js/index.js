// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), 
// дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
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
        } else if (age <= 11) {
            result = 'child';
        } else if (age <= 17) {
            result = 'teenager';
        } else if (age <= 59) {
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
const symbols = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];

const specialSymbol = document.getElementById('special_symbol');
specialSymbol.querySelector('button').addEventListener('click', () => {
    console.log('clicked special_symbol button')
    try {
        let digit = specialSymbol.querySelector('#digit').value;
        if (!checkIsNumber(digit)) {
            return;
        }
        if (digit < 0 || digit > symbols.length - 1) {
            alert('Please enter a number between 0 and 9!');
            return;
        }
        const result = symbols[digit];
        specialSymbol.querySelector('div.result').textContent = `Result: ${result}`;
    } catch (error) {
        console.log(error);
        alert('Wrong input!');
    }
})
