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
