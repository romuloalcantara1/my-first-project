const input = require('sync-input');
const earnings = {
    'Bubblegum': 202,
    'Toffee': 118,
    'Ice cream': 2250,
    'Milk chocolate': 1680,
    'Doughnut': 1075,
    'Pancake': 80
};

const calculateIncome = (items) => Object.values(items).reduce((a, b) => a + b, 0);
const printIncome = (income) => console.log(`Income: $${income}`);
const printIncomeList = (obj) => {
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: $${value}`);
    }
};

console.log('Earned amount:');
printIncomeList(earnings);
const income = calculateIncome(earnings);  // Armazena o valor calculado
printIncome(income);

console.log("Staff expenses:");
let staff = parseInt(input());
console.log("Other expenses:");
let other = parseInt(input());
console.log("Net income: $" + (income - (staff + other)));