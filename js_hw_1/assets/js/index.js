console.log('Hello World');

// Minimum
// let varData;
// let var_ata;
// let VarData;
/*
let var-data; can`t be used
let 213varData; can`t be used
let 213varData;
*/
const CURRENT_YEAR = 2025;

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
                document.querySelector('#age').textContent = `You are ${CURRENT_YEAR - year} years old.`;
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

new Age()
new Square()