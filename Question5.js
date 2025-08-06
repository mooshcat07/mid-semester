const light = 'yellow';

//  using if ... else
if(light == 'red'){
    console.log('stop')
} else if(light == 'yellow'){
    console.log('get ready');
} else{
    console.log('go');
}

//  using switch statement

switch(light){
    case 'red':
        console.log('stop');
        break;
    case 'yellow':
        console.log('get ready');
        break;
    case 'green':
        console.log('go');
        break;
}