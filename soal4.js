function countPairs(data, target) {
    const pair = []

    data.forEach((n, i) => {
        const diff = target - n
        const sampleData = [...data]
        sampleData.splice(i, 1)

        if (!sampleData.includes(diff)) {
            return
        }

        if (!pair.toString().includes([n, diff].toString()) && !pair.toString().includes([diff, n].toString())) {
            pair.push([n, diff])
        }

    })

    console.log(pair, pair.length)
}

const example1 = [1, 3, 2, 2, 3, 4]
const example2 = [1, 1, 1, 1]
const example3 = [1, 2, 3, 4, 5]

countPairs(example1, 5); // Output: 2
countPairs(example2, 2); // Output: 1
countPairs(example3, 7); // Output: 2
