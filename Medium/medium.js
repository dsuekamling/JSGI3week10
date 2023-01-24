function sharePizza (a, b) {
    let slices = a / b;
    return `Each person gets ${slices} slices of pizza; from our ${a} slice pizza`;
}

console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));


// 8 slices and 2 people = 4 pizza per person
// 8 slices and 3 people = 2.67 slice per person
// 21 slices and 20 people = 1.05 slices per person
// 10 slices of pizza and 3 people = 3.33 slices per person