console.log('Hello World');

// Minimum
let varData;
let var_ata;
let VarData;

/*
let var-data; can`t be used
let 213varData; can`t be used
let 213varData;
*/
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

class UserName {
    static USER_NAME_ELEMENT = '#userName';

    static #validateUserName = (name) => {
        if (!name?.trim()) {
            alert('Username can`t be empty!');
            return false;
        }

        if (!isNaN(Number(name))) {
            alert('Username can`t be a number!');
            return false;
        }

        return true;
    };

    static #capitalizeFirstLetter = (str) => {
        return str[0].toUpperCase() + str.slice(1);
    };

    static ask = () => {
        try {
            const userName = prompt('Enter your name:');

            if (!this.#validateUserName(userName)) {
                return;
            }

            const formattedName = this.#capitalizeFirstLetter(userName);
            document.querySelector(this.USER_NAME_ELEMENT).textContent = `Hello ${formattedName}!`;
        } catch (error) {
            console.error(error);
            alert('Wrong input!');
        }
    };
}


class Age {
    CURRENT_YEAR = 2025;

    constructor() {
        document.getElementById('get_age_btn').addEventListener('click', () => {
            try {
                let year = prompt('Enter your year of birth:');
                if (!checkIsNumber(year)) {
                    return
                }

                document.querySelector('#age').textContent = `You are ${this.CURRENT_YEAR - year} years old.`;
            } catch (error) {
                console.log(error);
                alert('Wrong input!');
            }
        });
    }
}

class Square {
    constructor() {
        document.getElementById('square_btn').addEventListener('click', () => {
            try {
                let length = document.getElementById('square_length').value
                if (!checkIsNumber(length)) {
                    return
                }

                const perimeter = 4 * Number(length);
                document.getElementById('square_perimeter').textContent = `Perimeter: ${perimeter}`;
            } catch (e) {
                console.log(e);
                alert('Wrong input!');
            }
        });
    }
}

class Circle {
    constructor() {
        document.getElementById('circle_btn').addEventListener('click', () => {
            try {
                let radius = document.getElementById('circle_radius').value
                if (!checkIsNumber(radius)) {
                    return
                }

                const area = Math.PI * radius ** 2;
                document.getElementById('circle_area').textContent = `Area: ${area}`;
            } catch (e) {
                console.log(e);
                alert('Wrong input!');
            }
        });
    }
}

class Speed {
    constructor() {
        document.getElementById('speed_btn').addEventListener('click', () => {
            try {
                let distance = document.getElementById('distance').value
                checkIsNumber(distance)
                if (!checkIsNumber(distance)) {
                    return
                }

                let speed = document.getElementById('speed').value
                checkIsNumber(speed)
                if (!checkIsNumber(speed)) {
                    return
                }

                const time = document.getElementById('time')
                time.textContent = `Time: ${distance / speed} hours`;
            } catch (e) {
                console.log(e);
                alert('Wrong input!');
            }
        })
    }
}

class Currency {
    CURRENCY = 1.17;

    constructor() {
        document.getElementById('euro_btn').addEventListener('click', () => {
            try {
                let usd_amount = document.getElementById('usd_amount').value
                if (!checkIsNumber(usd_amount)) {
                    return
                }

                const euro = document.getElementById('euro')
                euro.textContent = `Euro: ${usd_amount * this.CURRENCY}`;
            } catch (e) {
                console.log(e);
                alert('Wrong input!');
            }
        })
    }
}

new Age()
new Square()
new Circle()
new Speed()
new Currency()
