const arr = [80, 10, 40, 50, 30, 20];
let small_num = arr[0];
let large_num = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > large_num) {
        large_num = arr[i];
    } else if (arr[i] < small_num) {
        small_num = arr[i];
    }
}
console.log("Largest Number:", large_num);
console.log("Smallest Number:", small_num);
