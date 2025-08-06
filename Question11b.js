const data = {
    "order id": 'ORD-2025-00456',
    customer: {
        Id: 'CUST-1001',
        name: 'Joe Doe',
        email: 'joe.doe@gmail.com'
    },
    address: {
        street: '45 Indipendent Drive',
        city: 'Lilongwe',
        country: 'Malawi',
        postalCode: '256'
    },
    items: [
        {
            productId: 'P-001',
            name: 'Wireless Mouse',
            quantity: 2,
            price: 7500 
        },
        {
            productId: 'P-002',
            name: 'Mechanical Keyboard',
            quantity: 1,
            price: 25500 
        }
    ],
    payment: {
        method: 'Mobile money',
        phone: '0999123456',
        transactionId: 'TXN-900123',
        success: true
    },
    delivery: {
        method: 'Courier',
        status: 'In Transit',
        "estimated Delivery": '2025-08-10',
    },
    discountCodes: ['NEWUSER10', 'FREESHIP'],
    orderTotal: 40500,
    createdAt: '2025-08-04T14:25:00Z',
    updatedAt: '2025-08-05T09:00:00Z',
}

//  adding a new item
data.items = [...data.items, {
    productId: 'P7',
    name: 'Hp laptop',
    quantity: 1,
    price: 10000 
}];

console.log(data.items);

// update transaction id
data.payment.transactionId = 'TXN-MOOSHCAT-1122334455';