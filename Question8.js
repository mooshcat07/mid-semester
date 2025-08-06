const calculateDiscount = (price, customerType, isHoliday) => {
    let discount = 0;

    if(price < 5000){
        discount = price;
        console.log('Item less than K5000, No discount applies');
    } else if(customerType == 'Regular'){
        discount = price + (price * 0.05);
        console.log('You discount is : ' + discount);
    } else if(customerType == 'Member'){
        discount = price + (price * 0.1);
        console.log('You discount is : ' + discount);
    } else if(customerType == 'VIP'){
        discount = price + (price * 0.2);
        console.log('You discount is : ' + discount);
    }

    if(isHoliday){
        discount = discount + (discount * 0.05);
        console.log('Holiday discount : ' + discount)
    }

}

calculateDiscount(1000, "Member", true);