const mage = {
    healthPoints: 130,
    intelligence: 45,
    weaponDmg: 2,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const rogue = {
    healthPoints: 150,
    agility: 40,
    weaponDmg: 4,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, rogue, dragon };

const dragonDamage = () => {
    let dragonAttack = Math.floor(Math.random() * (dragon.strength - 15) + 15);
    return dragonAttack;
};

const playerDamage =(classe, attribute) => {
    const playerAttack = (Math.floor(Math.random() * (classe[attribute] * classe.weaponDmg - classe[attribute]) + classe[attribute]));

    return playerAttack;
};

const mageDamage = () => {
    const mageC = Math.floor(Math.random() * (mage.intelligence * mage.weaponDmg - mage.intelligence) + mage.intelligence);
    let mageAttack = {
        manaCost: 15,
        mageDmg: mageC,
    }
    if(mage.mana < 15){
        mageAttack = {
            manaCost: 0,
            mageDmg: 0,
        };
        return mageAttack;
    }
    return mageAttack;
}
const attributeCheck = (classe) => {
    let attribute;
    if(classe.strength){
        attribute = 'strength';
    } else if(classe.agility){
        attribute = 'agility';
    } else{
        attribute = 'intelligence';
    }
    return attribute
}

const gameActions = {
    playerTurn: (callback, classe) => {
        const attribute = attributeCheck(classe);
        const playerAt = callback(classe, attribute);
        if(classe.mana){
            if(classe.mana < 15){
                playerAt = 0;
            }else {
                classe.mana -= 15;
                dragon.healthPoints -= playerAt.mageDmg;
                classe.damage = playerAt;
            }
        } else {
            dragon.healthPoints -= playerAt;
            classe.damage = playerAt;
        }
    },
    dragonTurn: () => {
        const dragonAt = dragonDamage();
        warrior.healthPoints -= dragonAt;
        rogue.healthPoints -= dragonAt;
        mage.healthPoints -= dragonAt;
        dragon.damage = dragonAt;
    },
};
console.log(battleMembers);
console.log("XXXXXXXXXXXXXXXXXXXX");
gameActions.playerTurn(playerDamage, warrior);
gameActions.playerTurn(playerDamage, rogue);
gameActions.playerTurn(mageDamage, mage);
gameActions.dragonTurn();
console.log(battleMembers);