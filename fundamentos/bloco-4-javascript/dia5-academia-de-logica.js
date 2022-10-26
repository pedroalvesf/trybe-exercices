// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato abaixo:


// let objeto = {
//     area: 0,
//     perimetro: 0,
//   };
  
  // Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura

  function calculaAreaEPerimetro(base, altura){
    let objeto = {
        area: 0,
        perimetro: 0
    }
    
     objeto['area'] = base * altura;
     objeto.perimetro = (2*base) + (2*altura)

    return objeto;
  }

  console.log(calculaAreaEPerimetro(2,4))