let language = 'Chichewa';

//  using if...else statement
if(language == 'Chichewa'){
    console.log('Muli bwanji');
} else if(language == 'Yao'){
    console.log('Muli uli');
} else if(language == 'Tumbuka'){
    console.log('Muli wuli');
} else{
    console.log('How are you');
}

//  using switch statement
switch(language){
    case 'Chichewa':
        console.log('Muli Bwanji');
    break;
    case 'Yao':
        console.log('Muli uli');
    break;
    case 'Tumbuka':
        console.log('Muli Wuli');
    break;
    default:
        console.log('How are you');
    break;
}