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
const CURRENT_YEAR = 2025;


// Normal
let askUserName = () => {
    try {

        let userName = prompt('Enter your name:');
        if (!userName) {
            alert('Username can`t be empty!')
            return
        }
        userName = userName[0].toUpperCase() + userName.slice(1);
        document.querySelector('#userName').textContent = `Hello ${userName}!`;
    } catch (error) {
        console.log(error);
        alert('Wrong input!');
    }
};
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