// Напиши всі можливі варіанти створення функцій.
// ✅ Має підняття (hoisting) — можна викликати до оголошення.
function greet_1(name) {
    return `Hello, ${name}`;
}

const sum = new Function('a', 'b', 'return a + b');

// ⛔️ Не має підняття. Викликається тільки після оголошення.
const greet_2 = function (name) {
    return `Hello, ${name}`;
};


// ⛔️ Не має this, arguments, super, не підходить для методів об'єкта або конструкторів.
const greet_3 = (name) => {
    return `Hello, ${name}`;
};
const greet_4 = name => `Hello, ${name}`;
