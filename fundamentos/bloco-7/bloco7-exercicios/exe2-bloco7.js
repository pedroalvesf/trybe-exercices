const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    console.log(`Ola, ${order['name']}, entrega para: ${order['name']}, Telefone: ${order['phoneNumber']}, ${order['address']['street']}, Numero: ${order['address']['number']}, AP: ${order['address']['apartment']}`)
};

customerInfo(order);

const orderModifier = (order) => {
    const data = Object.keys(order);
    console.log('xxxxxxxxxxxxxxxxxxxxxxx');
    for(const index in data){
        console.log(`${data[index]}`)
    }
    console.log(data.order);
    console.log('xxxxxxxxxxxxxxxxxxxxxxx');
    // Adicione abaixo as informações necessárias.
    const nome = order['name'];
    const pedido = order['pizza'];
    console.log(`Ola, ${nome}, o total do seu pedido deu R$ ${order['payment']['total']}`)
}
;

orderModifier(order);