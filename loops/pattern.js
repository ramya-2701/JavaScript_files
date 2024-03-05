const rows = 5;
let s="";
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows - i; j++) {
        s+="+";
    }
    for (let k = 1; k <= i + 1; k++) {
        s+="-"
    }
    s+="\n";
}
console.log(s);
