// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), 
// дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const checkIsNumber = (number) => {
    if (!number) {
        alert('Please enter a value!');
        return;
    }
    number = +number;
    if (isNaN(number)) {
        alert('Please enter a number!');
    }
}
const ageCalculatorElement = document.getElementById('age_calculator');
ageCalculatorElement.querySelector('button').addEventListener('click', () => {
    console.log('clicked age_calculator button')
    try {
        let age = ageCalculatorElement.querySelector('#age_input').value;
        checkIsNumber(age)
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

const specialSymbol = document.getElementById('special_symbol');
specialSymbol.querySelector('button').addEventListener('click', () => {
    console.log('clicked special_symbol button')
    try {
        let number = specialSymbol.querySelector('#age_input').value;
        checkIsNumber(number)
        let result;

        ageCalculatorElement.querySelector('div.result').textContent = `Result: ${result}`;
    } catch (error) {
        console.log(error);
        alert('Wrong input!');
    }
})
