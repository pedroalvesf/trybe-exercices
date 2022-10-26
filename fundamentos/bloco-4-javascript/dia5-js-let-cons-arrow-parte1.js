// // Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// );

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

// let nome = 'Pedro';


// console.log(`Ola ${nome}`)

// let pessoa = {
//     nome: 'Pedro',
//     idade: 28,
//     anoNascimento: 1994
// }

// console.log(`Nome: ${pessoa.nome} 
// \nTem ${pessoa.idade} anos de idade 
// \nNasceu em ${pessoa.anoNascimento}`)

// const multiplyByTwo = number => number * 2;
// console.log(multiplyByTwo(10));

// const multiplication = (number, multi) => number * multi;
// console.log(multiplication(8, 2));

// const soma = (a, b) => a + b;
// console.log(soma(1, 2))

    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    //just to change const to let 
    // let pessoa = {
    //     nome: 'Henri',
    //     idade: 20
    //   }
    //   pessoa = {
    //     nome: 'Luna',
    //     idade: 19
    //   } // Altere essa estrutura para corrigir o erro.
    //   console.log('Nome:', pessoa.nome);
    //   console.log('Idade:', pessoa.idade);
// commom way 
    // function numeroAleatorio() {
    //     return Math.random()
    //   }
    //   console.log(numeroAleatorio());
    // arrow function way
    //   const numeroAleatorio2 = () => Math.random();
    //   console.log(numeroAleatorio2())

    // function hello(nome) {
    //     return `Olá, ${nome}!`
    //   }
    //   let nome = 'Ivan';
    //   console.log(hello(nome));

    //   const olar = nome => `Ola, ${nome}!`;
    //   console.log(olar(nome))

    // let nome = 'Ivan';
    // let sobrenome = 'Pires';

    // function nomeCompleto(nome, sobrenome) {
    //     return `${nome} ${sobrenome}`
    //   }
    //   const nomeCompleto2 = (nome, sobrenome) =>`${nome} ${sobrenome}`


    //   console.log(nomeCompleto(nome, sobrenome))
    //   console.log(nomeCompleto2(nome, sobrenome));
    let speed = 90;
    const speedCar = (speed) => {
      if (speed >= 120) {
        return `Você ultrapassou o limite de velocidade`;
      } else {
        return `Você está na velocidade permitida`;
      }
    };
    console.log(speedCar(speed));

    let speed2 = 190;
    const speedCar2 = (speed2) => (speed2 >= 120 ? 
        `Você ultrapassou o limite de velocidade`:
        `Você está na velocidade permitida`);
    console.log(speedCar(speed2));