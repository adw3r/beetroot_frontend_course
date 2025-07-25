// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), 
// дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const ageCalculatorElement = document.getElementById('age_calculator');
ageCalculatorElement.querySelector('button').addEventListener('click', () => {
    console.log('clicked age_calculator button')
    try {
        let age = ageCalculatorElement.querySelector('#age_input').value;
        if (!age) {
            alert('Please enter a value!');
            return;
        }
        age = +age;
        if (isNaN(age)) {
            alert('Please enter a number!');
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
