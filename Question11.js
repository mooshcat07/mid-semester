// using literal
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

// console.log(data);

// using object class
const dataObject = new Object();
dataObject.order_id = 'ORD-2025-00456';
dataObject.customer= {
    Id: 'CUST-1001',
    name: 'Joe Doe',
    email: 'joe.doe@gmail.com'
}
dataObject.address= {
    street: '45 Indipendent Drive',
    city: 'Lilongwe',
    country: 'Malawi',
    postalCode: '256'
}
dataObject.items= [
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
];
dataObject.payment= {
    method: 'Mobile money',
    phone: '0999123456',
    transactionId: 'TXN-900123',
    success: true
};
dataObject.delivery= {
    method: 'Courier',
    status: 'In Transit',
    "estimated Delivery": '2025-08-10',
};
dataObject.discountCodes= ['NEWUSER10', 'FREESHIP'];
dataObject.orderTotal= 40500;
dataObject.updatedAt= '2025-08-05T09:00:00Z';
dataObject.updatedAt= '2025-08-05T09:00:00Z';

// console.log(dataObject);

//  using class as an object
class Product {
    constructor(orderid, customer, address, items, payement, delivery, discountCodes, orderTotal, createdAt, updatedAt){
        this.orderid = orderid; 
        this.customer = customer; 
        this.address = address; 
        this.items = items; 
        this.payement = payement; 
        this.delivery = delivery; 
        this.discountCodes = discountCodes; 
        this.orderTotal = orderTotal; 
        this.createdAt = createdAt; 
        this.updatedAt = updatedAt;
    }
}

const classObject = new Product(
    'ORD-2025-00456',
    {
        Id: 'CUST-1001',
        name: 'Joe Doe',
        email: 'joe.doe@gmail.com'
    },
    {
        street: '45 Indipendent Drive',
        city: 'Lilongwe',
        country: 'Malawi',
        postalCode: '256'
    },
    [
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
    {
        method: 'Mobile money',
        phone: '0999123456',
        transactionId: 'TXN-900123',
        success: true
    },
    {
        method: 'Courier',
        status: 'In Transit',
        "estimated Delivery": '2025-08-10',
    },
    ['NEWUSER10', 'FREESHIP'],
    40500,
    '2025-08-05T09:00:00Z',
    '2025-08-05T09:00:00Z'      
)

// console.log(classObject);

// using functionas
function ProductObject(orderid, customer, address, items, payement, delivery, discountCodes, orderTotal, createdAt, updatedAt){
    this.orderid = orderid; 
    this.customer = customer; 
    this.address = address; 
    this.items = items; 
    this.payement = payement; 
    this.delivery = delivery; 
    this.discountCodes = discountCodes; 
    this.orderTotal = orderTotal; 
    this.createdAt = createdAt; 
    this.updatedAt = updatedAt;
}

const functionProductObject = new ProductObject(
    'ORD-2025-00456',
    {
        Id: 'CUST-1001',
        name: 'Joe Doe',
        email: 'joe.doe@gmail.com'
    },
    {
        street: '45 Indipendent Drive',
        city: 'Lilongwe',
        country: 'Malawi',
        postalCode: '256'
    },
    [
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
    {
        method: 'Mobile money',
        phone: '0999123456',
        transactionId: 'TXN-900123',
        success: true
    },
    {
        method: 'Courier',
        status: 'In Transit',
        "estimated Delivery": '2025-08-10',
    },
    ['NEWUSER10', 'FREESHIP'],
    40500,
    '2025-08-05T09:00:00Z',
    '2025-08-05T09:00:00Z'
)

console.log(functionProductObject);