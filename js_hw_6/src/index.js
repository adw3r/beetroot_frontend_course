const createProduct = ({name, quantity, status, price}) => {
    return {
        name,
        quantity,
        status,
        price,

        totalPrice() {
            return this.quantity * this.price;
        }
    };
};

const createProductsList = (products = []) => {
    return {
        products,

        showProductsSorted(sortCallback) {
            return this.products.sort(sortCallback);
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
            let result = 0;
            this.products.forEach(product => {
                result += product.totalPrice();
            })
            return result;
        },

        totalPriceWithStatus(status) {
            let result = 0;
            this.products.forEach(product => {
                if (product.status === status) {
                    result += product.totalPrice();
                }
            })
            return result;
        },

        sortByTotalPrice(order = 'asc') {
            return this.products.sort((a, b) => {
                const diff = a.totalPrice - b.totalPrice;
                return order === 'asc' ? diff : -diff;
            });
        }
    };
};


const products2 = createProductsList([
    createProduct({name: 'Apple', quantity: 10, status: 'pending', price: 100}),
    createProduct({name: 'Orange', quantity: 30, status: 'pending', price: 300}),
    createProduct({name: 'Pineapple', quantity: 30, status: 'done', price: 300}),
    createProduct({name: 'Banana', quantity: 20, status: 'pending', price: 200}),
]);

console.log('1. Вивід: непридбані спочатку, потім придбані:');
console.log(products2.showProductsSorted((a, b) => {
    if (a.status === 'pending' && b.status === 'done') return -1;
    if (a.status === 'done' && b.status === 'pending') return 1;
    return 0;
}));

console.log('2. Позначити "Apple" як куплений:');
products2.setStatusForProduct('done', 'Apple');
console.log(products2.products);

console.log('3. Видалити "Apple" зі списку:');
products2.filterProducts(product => product.name !== 'Apple');
console.log(products2.products);

console.log('4. Додати ще 30 Orange:');
products2.addProduct(createProduct({
    name: 'Orange', quantity: 30, status: 'pending', price: 300
}));
console.log(products2.products);

console.log('5. Загальна сума:');
console.log(products2.totalPrice());

console.log('6. Загальна сума придбаних:');
console.log(products2.totalPriceWithStatus('done'));

console.log('7. Сортування за totalPrice по спаданню:');
console.log(products2.sortByTotalPrice('desc'));
