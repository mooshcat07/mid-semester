const AverageCalculator = (...numbers) => {
    let average;
    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        sum+=numbers[i];
    }

    return average = sum / numbers.length
}

console.log(AverageCalculator(10,10,20,20));