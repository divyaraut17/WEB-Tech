const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const date = document.getElementById('date');
const category = document.getElementById('category');
const filter = document.getElementById('filter');

// Get data from localStorage
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

// Add transaction
function addTransaction(e) {
    e.preventDefault();

    if (text.value === '' || amount.value === '' || date.value === '') {
        alert("Please enter all fields");
        return;
    }

    const transaction = {
        id: Date.now(),
        text: text.value,
        amount: +amount.value,
        date: date.value,
        category: category.value
    };

    transactions.push(transaction);
    updateLocalStorage();
    addToDOM(transaction);
    updateValues();

    // Clear inputs
    text.value = '';
    amount.value = '';
    date.value = '';
    category.value = 'Food';
}
// Add to DOM
function addToDOM(transaction) {
    const sign = transaction.amount < 0 ? 'minus' : 'plus';

    const li = document.createElement('li');
    li.classList.add(sign);

    li.innerHTML = `
    <span>${transaction.text} ₹${transaction.amount}</span>
    <div class="btn-group">
        <button class="edit-btn" onclick="editTransaction(${transaction.id})">✏️</button>
        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">×</button>
    </div>
    `;

    list.appendChild(li);
}

// Update balance
function updateValues() {
    const amounts = transactions.map(t => t.amount);

    const total = amounts.reduce((acc, val) => acc + val, 0);
    const inc = amounts.filter(val => val > 0)
                       .reduce((acc, val) => acc + val, 0);
    const exp = amounts.filter(val => val < 0)
                       .reduce((acc, val) => acc + val, 0);

    balance.innerText = `₹${total}`;
    income.innerText = `₹${inc}`;
    expense.innerText = `₹${Math.abs(exp)}`;
}

// Remove transaction
function removeTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    updateLocalStorage();
    init();
}

//edit transaction
function editTransaction(id) {
    const t = transactions.find(t => t.id === id);

    text.value = t.text;
    amount.value = t.amount;

    // remove old and re-add updated
    transactions = transactions.filter(t => t.id !== id);
    updateLocalStorage();
    init();
}

// Save to localStorage
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Initialize app
function init(filterType = "all") {
    list.innerHTML = '';

    let filteredTransactions = transactions;

    if (filterType === "income") {
        filteredTransactions = transactions.filter(t => t.amount > 0);
    } 
    else if (filterType === "expense") { 
        filteredTransactions = transactions.filter(t => t.amount < 0);
    }

    filteredTransactions.forEach(addToDOM);
    updateValues();
}

init();

filter.addEventListener('change', (e) => {
    init(e.target.value);
});

// Event listener
form.addEventListener('submit', addTransaction);