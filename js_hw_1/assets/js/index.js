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
                if (!year) {
                    alert('Year can`t be empty!')
                    return
                }
                year = +year;
                if (isNaN(year)) {
                    alert('Not a number!');
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
                if (!length) {
                    alert('Length can`t be empty!')
                    return
                }
                length = +length;
                if (isNaN(length)) {
                    alert('Not a number!');
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
                if (!radius) {
                    alert('Radius can`t be empty!')
                    return
                }
                radius = +radius;
                if (isNaN(radius)) {
                    alert('Not a number!');
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
                let speed = document.getElementById('speed').value
                if (!distance && !speed) {
                    alert('Distance or speed can`t be empty!')
                    return
                }
                distance = +distance;
                speed = +speed;
                if (isNaN(distance) || isNaN(speed)) {
                    alert('Not a number!');
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
                if (!usd_amount) {
                    alert('USD_AMOUNT can`t be empty!')
                    return
                }
                usd_amount = +usd_amount;
                if (isNaN(usd_amount)) {
                    alert('Not a number!');
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

document.addEventListener('DOMContentLoaded', () => {
    new Age()
    new Square()
    new Circle()
    new Speed()
    new Currency()
})
