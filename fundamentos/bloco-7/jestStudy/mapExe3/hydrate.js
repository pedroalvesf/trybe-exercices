function hydrate = (string) => {
    const stringSplitada = string.split('');
    let agua = 0;

    for(let index = 0; index < stringSplitada.length ; index++){
        const numberAgua = Number(stringSplitada[index]);

        if(numberAgua){
            agua += numberAgua;
        }
        if(agua > 1){
            return `${agua} copos de agua`
        }else{
            return `${agua} copo de agua`
        }
    }
}

module.exports = hydrate;