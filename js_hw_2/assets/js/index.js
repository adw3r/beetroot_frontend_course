const result = Number(0.1 + 0.2).toFixed(1);
console.log(result)

const a = '1';
const b = 2;

console.log(Number(a) + b);

const MB_IN_GB = 1024;
const FILE_SIZE = 820;


const flashDriveSizeElement = document.getElementById('flash_drive_size');
flashDriveSizeElement.querySelector('button')
    .addEventListener('click', () => {
        console.log('clicked flash_drive_size button')
        try {
            let size = flashDriveSizeElement.querySelector('input').value;
            if (!size) {
                alert('Please enter a value!');
                return;
            }
            size = +size;
            if (isNaN(size)) {
                alert('Please enter a number!');
                return;
            }
            const result = size * MB_IN_GB / FILE_SIZE;
            flashDriveSizeElement.querySelector('div.result').textContent = `Result: you can 
            store ${FILE_SIZE}mb file in your flash-drive ${result.toFixed(0)} times`;
        } catch (error) {
            console.log(error);
            alert('Wrong input!');
        }
    })


const chocolateCalculatorElement = document.getElementById('chocolate_calculator');
chocolateCalculatorElement.querySelector('button').addEventListener('click', () => {
        console.log('clicked chocolate_calculator button')
        try {
            let budget = chocolateCalculatorElement.querySelector('#budget').value;
            let price = chocolateCalculatorElement.querySelector('#price').value;
            
            if (!budget && !price) {
                alert('Please enter a value!');
                return;
            }
            budget = +budget;
            price = +price;
            if (isNaN(price) || isNaN(budget)) {
                alert('Please enter a number!');
            }
            const result = budget / price;
            chocolateCalculatorElement
                .querySelector('div.result')
                .textContent = `Result: you can buy ${result.toFixed(0)} chocolates`;
        } catch (error) {
            console.log(error);
            alert('Wrong input!');
        }
    })
