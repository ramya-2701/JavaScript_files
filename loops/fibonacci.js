function fibonacci(n) {
    let a = 0, b = 1;
    console.log(a);
    console.log(b);
    for (let i = 2; i < n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
        console.log(temp + "  ");
    }
}
fibonacci(10);
