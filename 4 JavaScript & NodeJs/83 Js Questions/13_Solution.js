// 13. The Shopping Cart Totalizer:
// You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(products){
    return products.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);
};

let cart = [
    { name: "Phone", price: 20000, quantity: 2 },
    { name: "Laptop", price: 70000, quantity: 1 },
    { name: "Charger", price: 2500, quantity: 1 }
];

let total = calculateTotal(cart);
console.log("Total:", total);