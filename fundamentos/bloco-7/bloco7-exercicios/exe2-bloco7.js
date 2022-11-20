const order = {
    name: "Rafael Andrade",
    phoneNumber: "11-98763-1416",
    address: {
        street: "Rua das Flores",
        number: "389",
        apartment: "701",
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
                type: "Coca-Cola Zero",
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: "Ana Silveira",
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    const address = "address";
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const customerName = order["name"];
    const customerPhone = order["phoneNumber"];
    const street = order[address].street;
    const number = order[address].number;
    const apartment = order[address].apartment;
    console.log(
        `Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`
    );
    //forma do gabarito acima
    // Adicione abaixo as informações necessárias.
    console.log(
        `Ola, ${order.order.delivery.deliveryPerson}, entrega para: ${order["name"]}, Telefone: ${order["phoneNumber"]}, ${order["address"]["street"]}, Numero: ${order["address"]["number"]}, AP: ${order["address"]["apartment"]}`
    );
};

customerInfo(order);
const orderModifier = (order) => {
    // // Adicione abaixo as informações necessárias.
    const pedidoMarguerita = order.order.pizza.marguerita.amount;
    const pedidoPepperoni = order.order.pizza.pepperoni.amount;
    const pedidoDrinks = order.order.drinks.coke.type;
    const pedidoQtdDrinks = order.order.drinks.coke.amount;
    let totalDoPedido =
        Number(order.order.pizza.marguerita.amount) *
        Number(order.order.pizza.marguerita.price) +
        Number(order.order.pizza.pepperoni.amount) *
        Number(order.order.pizza.pepperoni.price) +
        Number(order.order.drinks.coke.amount) *
        Number(order.order.drinks.coke.price);
    console.log(
        `Ola ${order["name"]
        }, o seu pedido de: ${pedidoMarguerita} Marguerita, ${pedidoPepperoni} Pepperoni e ${(pedidoQtdDrinks, pedidoDrinks)
        }, deu um total de R$ ${totalDoPedido}`
    );

    order.name = 'Luiz Silva'
    let totalDoPedido2 =
    Number(order.order.pizza.marguerita.amount) *
    Number(order.order.pizza.marguerita.price) +
    Number(order.order.pizza.pepperoni.amount) *
    Number(order.order.pizza.pepperoni.price) +
    Number(order.order.drinks.coke.amount) *
    Number(order.order.drinks.coke.price)
    -5;
    console.log(
        `Ola ${order["name"]
        }, o seu pedido de: ${pedidoMarguerita} Marguerita, ${pedidoPepperoni} Pepperoni e ${(pedidoQtdDrinks, pedidoDrinks)
        }, deu um total de R$ ${totalDoPedido - 5} com desconto`
    );
    console.log(
        `Ola ${order["name"]
        }, o seu pedido de: ${pedidoMarguerita} Marguerita, ${pedidoPepperoni} Pepperoni e ${(pedidoQtdDrinks, pedidoDrinks)
        }, deu um total de R$ ${totalDoPedido2} com desconto`
    );
};

orderModifier(order);

