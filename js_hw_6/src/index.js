// import validator from 'validator';

class Product {
    constructor(data = {}) {
        this.data = data;

        this._name = data.name;
        this._quantity = data.quantity;
        this._status = data.status;
        this._price = data.price;
    };

    get status() {
        return this._status;
    }

    set status(status) {
        this._status = status;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(quantity) {
        this._quantity = quantity;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    get totalPrice() {
        return this.quantity * this.price;
    }
}


class ProductsList {
    constructor(products = []) {
        this.products = products;
    }

    showProductsSorted(sortCallback) {
        return this.products.sort(sortCallback);
    }

    filterProducts(callback) {
        let filteredProducts = this.products.filter(callback);
        this.products = filteredProducts;
        return filteredProducts;
    }

    setStatusForProduct(status, name) {
        this.products.forEach(product => {
            if (product.name === name) product.status = status
        })
    }

    addProduct = function (product) {
        this.products.forEach(p => {
            if (p.name === product.name) {
                p.quantity += product.quantity;
            }
        })
    }
}

const products = new ProductsList([new Product({
    'name': 'Apple', 'quantity': 10, 'status': 'pending', 'price': 100,
}), new Product({
    'name': 'Orange', 'status': 'pending', 'price': 300, 'quantity': 30,
}), new Product({
    'name': 'Pineapple', 'status': 'done', 'price': 300, 'quantity': 30,
}), new Product({
    'name': 'Banana', 'status': 'pending', 'price': 200, 'quantity': 20,
})]);

// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані,
// а потім - ті, що вже придбали.
console.log('Виводити весь список на екран таким чином, щоб спочатку йшли продукти, ' +
    'що ще не придбані, а потім - ті, що вже придбали.')
console.log(products.showProductsSorted((a, b) => {
    if (a.status === 'pending' && b.status === 'done') return -1;
    if (a.status === 'done' && b.status === 'pending') return 1;
    return 0;
}));

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
console.log('Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.');
products.setStatusForProduct('done', 'Apple');
console.log(products.products);

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву,
// в якому продукт, що ми шукаємо, буде відсутнім)
console.log('Видалення продукту зі списку ' +
    '(видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)')
products.filterProducts(product => product.name !== 'Apple');
console.log(products.products);


// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом,
// необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума,
// наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
console.log("Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, " +
    "необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, " +
    "наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.")
products.addProduct(new Product({
    name: 'Orange', quantity: 30, status: 'pending', price: 300
}))
console.log(products.products);

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
console.log('Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.')
products.totalPrice = function () {
    let totalPrice = 0;
    this.products.forEach(product => {
        totalPrice += product.totalPrice;
    })
    return totalPrice;
};
console.log(products.totalPrice());

// Підрахунок суми всіх (не) придбаних продуктів.
console.log('Підрахунок суми всіх (не) придбаних продуктів.')
products.totalPriceWithStatus = function (status) {
    let totalPrice = 0;
    this.products.forEach(product => {
        if (product.status === status) {
            totalPrice += product.totalPrice;
        }
    })
    return totalPrice;
}
console.log(products.totalPriceWithStatus('done'));

// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого,
// в залежності від параметра функції, який вона приймає)
products.sortByTotalPrice = function (order = 'asc') {
    return this.products.sort((a, b) => {
        const diff = a.totalPrice - b.totalPrice;
        return order === 'asc' ? diff : -diff;
    });
}
console.log(products.sortByTotalPrice('desc'));