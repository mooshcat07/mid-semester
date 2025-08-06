const randomNumbers = [-10, 23, 18, 101, 26, 18, 29, 47, -10, 23];

for(let i = 0; i < randomNumbers.length; i++){
    
    if(randomNumbers[i] < 0){
        continue;
    }
    else if(randomNumbers[i] % 2 == 0){
        console.log(randomNumbers[i]);

        break;
    }

    console.log(randomNumbers[i])

}