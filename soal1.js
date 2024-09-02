function fishOrBash(length = 15) {
    const numbers = Array.from({ length }, (_, i) => i + 1);

    numbers.forEach(num => {
        let result = num

        if (num % 15 === 0) {
            result = "fish bash"
            return console.log(result)
        }
        if (num % 5 === 0) result = "bash"
        if (num % 3 === 0) result = "fish"

        console.log(result)
    });
}


// Unit Test
fishOrBash(30)