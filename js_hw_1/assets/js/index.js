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


// Normal
const askUserName = () => {
    let userName = prompt('Enter your name:');
    if (!userName) {
        alert('Username can`t be empty!')
        return
    }
    userName = userName[0].toUpperCase() + userName.slice(1);
    document.querySelector('#userName').textContent = `Hello ${userName}!`;
};
