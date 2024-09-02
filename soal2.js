function quickSort(arr, orderBy = 'asc') {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const middle = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        const checkOrderBy = orderBy === 'asc' ? arr[i] < pivot : arr[i] > pivot

        if (checkOrderBy) {
            left.push(arr[i]);
        } else if (arr[i] === pivot) {
            middle.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left, orderBy), ...middle, ...quickSort(right, orderBy)];
}

// Unit Test
const numbersAsc = [5, 3, 8, 102, 59, 73, 16, 8, 2, 1009, 3, 88, 1, 2];
console.log('Ascending:', quickSort(numbersAsc));
console.log('Descending:', quickSort(numbersAsc, 'desc'));

