//Implement Insertion Sort using JavaScript:

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
let array = [7, 2, 5, 4, 3];
console.log("Before sorting:", array);
array = insertionSort(array);
console.log("After sorting:", array);
