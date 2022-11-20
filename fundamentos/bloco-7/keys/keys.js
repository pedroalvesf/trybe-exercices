const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
};
console.log(customer1.firstName);

console.log(customer2['firstName']);


customer1.lastName = "Faria";
customer2['lastName'] = "Thamires"

console.log(customer1)
console.log(customer2)

let newKey = 'city'
const city = 'Recife';

//align the data inside the parameters with the return inside the funtion
const addCity = (obj, newProp, vl) => {
    obj[newProp] = vl;
}

addCity(customer1, newKey, city);

console.log(customer1)

newKey = 'fullName';

const fullName = `${customer1.firstName} ${customer1.lastName}`

console.log(fullName)