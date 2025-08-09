const createProduct = ({name, quantity, status, price}) => ({
    name, quantity, status, price, totalPrice() {
        return this.quantity * this.price;
    }
});

const createProductsList = (products = []) => ({
    products,

    showProductsSorted(sortCallback) {
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
        return this.products.reduce((sum, product) => product.status === status ? sum + product.totalPrice() : sum, 0);
    },

    sortByTotalPrice(order = 'asc') {
        return this.products.slice().sort((a, b) => {
            const diff = a.totalPrice() - b.totalPrice();
            return order === 'asc' ? diff : -diff;
        });
    }
});

// --- UI Logic ---
const productsTableBody = document.querySelector('#productsTable tbody');
const addProductForm = document.getElementById('addProductForm');
const filterNameInput = document.getElementById('filterName');
const filterStatusSelect = document.getElementById('filterStatus');
const sortByStatusBtn = document.getElementById('sortByStatus');
const sortByTotalPriceBtn = document.getElementById('sortByTotalPrice');
const totalSumDiv = document.getElementById('totalSum');
const totalDoneSumDiv = document.getElementById('totalDoneSum');
const productsObject = createProductsList([
    createProduct({name: 'Apple', quantity: 10, status: 'pending', price: 100}),
    createProduct({name: 'Orange', quantity: 30, status: 'pending', price: 300}),
    createProduct({name: 'Pineapple', quantity: 30, status: 'done', price: 300}),
    createProduct({name: 'Banana', quantity: 20, status: 'pending', price: 200}),
]);

function renderTable(products) {
    productsTableBody.innerHTML = '';
    products.forEach(product => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>
                    <span class="badge bg-${product.status === 'done' ? 'success' : 'warning'} text-dark">${product.status}</span>
                </td>
                <td>${product.price}</td>
                <td>${product.totalPrice()}</td>
                <td>
                    <button class="btn btn-sm btn-outline-success me-1" data-action="toggle-status" data-name="${product.name}">
                        ${product.status === 'pending' ? 'Mark as Done' : 'Mark as Pending'}
                    </button>
                    <button class="btn btn-sm btn-outline-danger" data-action="delete" data-name="${product.name}">Delete</button>
                </td>
            `;
        productsTableBody.appendChild(tr);
    });
}

function updateTotals() {
    totalSumDiv.textContent = `Total: ${productsObject.totalPrice()}`;
    totalDoneSumDiv.textContent = `Total (Done): ${productsObject.totalPriceWithStatus('done')}`;
}

function getFilteredProducts() {
    let filtered = productsObject.products;
    const nameFilter = filterNameInput.value.trim().toLowerCase();
    const statusFilter = filterStatusSelect.value;
    if (nameFilter) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(nameFilter));
    }
    if (statusFilter) {
        filtered = filtered.filter(p => p.status === statusFilter);
    }
    return filtered;
}

let currentSort = null;
let currentSortOrder = 'asc';

function applySort(products) {
    if (currentSort === 'status') {
        return products.sort((a, b) => {
            if (a.status === 'pending' && b.status === 'done') return currentSortOrder === 'asc' ? -1 : 1;
            if (a.status === 'done' && b.status === 'pending') return currentSortOrder === 'asc' ? 1 : -1;
            return 0;
        });
    }
    if (currentSort === 'totalPrice') {
        return products.sort((a, b) => {
            const diff = a.totalPrice() - b.totalPrice();
            return currentSortOrder === 'asc' ? diff : -diff;
        });
    }
    return products;
}

function refresh() {
    let products = getFilteredProducts();
    products = applySort(products);
    renderTable(products);
    updateTotals();
}

addProductForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('productName').value.trim();
    const quantity = parseInt(document.getElementById('productQuantity').value, 10);
    const status = document.getElementById('productStatus').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    if (!name || isNaN(quantity) || isNaN(price)) return;
    productsObject.addProduct(createProduct({name, quantity, status, price}));
    addProductForm.reset();
    refresh();
});
productsTableBody.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const action = btn.getAttribute('data-action');
    const name = btn.getAttribute('data-name');
    if (action === 'delete') {
        productsObject.filterProducts(product => product.name !== name);
        refresh();
    } else if (action === 'toggle-status') {
        const product = productsObject.products.find(p => p.name === name);
        if (product) {
            product.status = product.status === 'pending' ? 'done' : 'pending';
        }
        refresh();
    }
});
filterNameInput.addEventListener('input', refresh);
filterStatusSelect.addEventListener('change', refresh);
sortByStatusBtn.addEventListener('click', () => {
    if (currentSort === 'status') {
        currentSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc';
    } else {
        currentSort = 'status';
        currentSortOrder = 'asc';
    }
    refresh();
});
sortByTotalPriceBtn.addEventListener('click', () => {
    if (currentSort === 'totalPrice') {
        currentSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc';
    } else {
        currentSort = 'totalPrice';
        currentSortOrder = 'asc';
    }
    refresh();
});

refresh();
