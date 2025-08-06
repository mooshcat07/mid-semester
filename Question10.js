const NegativeNumberCounter = (...numbers) => {
    let negcount = 0;

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < 0){
            negcount++;
        }
    }

    return negcount;
}

console.log(NegativeNumberCounter(10, -10, 0, 2,-0.3, 4, 100, -20, -1.0))