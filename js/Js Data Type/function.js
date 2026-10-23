// function total () {
//     const price = 12
//     const quantity = 10
//     const all = price * quantity
//     console.log(all);
// }
// total()

// function total (total, quantity) {
//     const allTotal = total * quantity;
//     return allTotal
// }
// console.log(total(10, 12));

function total (total, quantity = 12) {
    const allTotal = total * quantity;
    return allTotal
}
console.log(total(12));