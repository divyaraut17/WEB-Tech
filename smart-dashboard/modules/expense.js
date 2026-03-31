let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

export function addExpense() {
const amount = document.getElementById("amount").value;

if (!amount) return;

expenses.push(Number(amount));
localStorage.setItem("expenses", JSON.stringify(expenses));

updateTotal();
}

export function updateTotal() {
const total = expenses.reduce((sum, val) => sum + val, 0);
document.getElementById("total").innerText = total;
}