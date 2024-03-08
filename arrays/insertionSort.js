function arraySort(arr) {
        let n = arr.length;
        for (let i = 1; i < n; i++) {
            let temp = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > temp) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = temp;
        }
}
let a = [7, 9, 5, 1, 0, 9];
arraySort(a);
for (let k = 0; k < a.length; k++)
    console.log(a[k] + " ");