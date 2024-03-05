function reverse(n) {
    let num = 0;
    while (n !== 0) {
        let rem = n % 10;
        num = num * 10 + rem;
        n = Math.floor(n / 10);
    }
    return num;
}
let result = reverse(1234);
console.log("Reversed number:", result);
