const createProduct = ({ name, quantity, status, price }) => ({
    name,
    quantity,
    status,
    price,
    totalPrice() {
        return this.quantity * this.price;
    }
});

const createProductsList = (products = []) => ({
    products,

    showProductsSorted(sortCallback) {
        // Return a sorted copy, do not mutate original
        return this.products.slice().sort(sortCallback);
    },

    filterProducts(callback) {
        this.products = this.products.filter(callback);
        return this.products;
    },

    setStatusForProduct(status, name) {
        this.products.forEach(product => {
            if (product.name === name) {
                product.status = status;
            }
        });
    },

    addProduct(product) {
        const existing = this.products.find(p => p.name === product.name);
        if (existing) {
            existing.quantity += product.quantity;
        } else {
            this.products.push(product);
        }
    },

    totalPrice() {
        return this.products.reduce((sum, product) => sum + product.totalPrice(), 0);
    },

    totalPriceWithStatus(status) {
        return this.products.reduce((sum, product) =>
            product.status === status ? sum + product.totalPrice() : sum, 0
        );
    },

    sortByTotalPrice(order = 'asc') {
        return this.products.slice().sort((a, b) => {
            const diff = a.totalPrice() - b.totalPrice();
            return order === 'asc' ? diff : -diff;
        });
    }
});

const productsObject = createProductsList([
    createProduct({ name: 'Apple', quantity: 10, status: 'pending', price: 100 }),
    createProduct({ name: 'Orange', quantity: 30, status: 'pending', price: 300 }),
    createProduct({ name: 'Pineapple', quantity: 30, status: 'done', price: 300 }),
    createProduct({ name: 'Banana', quantity: 20, status: 'pending', price: 200 }),
]);

console.log('1. Вивід: непридбані спочатку, потім придбані:');
console.log(productsObject.showProductsSorted((a, b) => {
    if (a.status === 'pending' && b.status === 'done') return -1;
    if (a.status === 'done' && b.status === 'pending') return 1;
    return 0;
}));

console.log('2. Позначити "Apple" як куплений:');
productsObject.setStatusForProduct('done', 'Apple');
console.log(productsObject.products);

console.log('3. Видалити "Apple" зі списку:');
productsObject.filterProducts(product => product.name !== 'Apple');
console.log(productsObject.products);

console.log('4. Додати ще 30 Orange:');
productsObject.addProduct(createProduct({
    name: 'Orange', quantity: 30, status: 'pending', price: 300
}));
console.log(productsObject.products);

console.log('5. Загальна сума:');
console.log(productsObject.totalPrice());

console.log('6. Загальна сума придбаних:');
console.log(productsObject.totalPriceWithStatus('done'));

console.log('7. Сортування за totalPrice по спаданню:');
console.log(productsObject.sortByTotalPrice('desc'));
