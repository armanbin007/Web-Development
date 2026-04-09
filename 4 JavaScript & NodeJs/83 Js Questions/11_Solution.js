// 11. The Array Filterer:
// You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

// Filter
function filterCatagory(arr, catagory) {
    return arr.filter(user => user.catagory === catagory);
}

let products = [
    { title: "Laptop", catagory: "Electronics" },
    { title: "Phone", catagory: "Electronics" },
    { title: "Cooker", catagory: "Kitchen" },
    { title: "Washing Machine", catagory: "Home Appliance" },
    { title: "Spatula", catagory: "Kitchen" }
];

console.log(filterCatagory(products, "Electronics"));