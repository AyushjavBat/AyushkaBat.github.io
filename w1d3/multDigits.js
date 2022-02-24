function multDigits(num) {
    let product = 1;
    for (let i = 0; i < num; i++) {
        product = product * (num % 10);
        num = Math.floor(num / 10);
    }
    return product;
}
console.log(multDigits(1234));
console.log(multDigits(102));
console.log(multDigits(8));