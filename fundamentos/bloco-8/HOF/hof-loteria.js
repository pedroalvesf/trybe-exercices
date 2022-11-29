const check = (num, numero) => num === numero;

const result = (num, callback) => {
    const numero = Math.floor((Math.random() * 5) + 1);
    return callback(num, numero) ? "boa" : "bad";
};

console.log(result(2, check));

