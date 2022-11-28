const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
    const dragonAttack = Math.floor(Math.random() * (dragon.strength - 15) + 15);
    return dragonAttack;
};

// console.log("Dragon damage: " + dragonDamage() + "\nHealth: " + dragon.healthPoints);

const warriorDamage = () => {
    const warriorAttack = Math.floor(Math.random() * (warrior.strength*warrior.weaponDmg - warrior.strength) + warrior.strength);
    return warriorAttack;
}

// console.log("Warrior damage: " + warriorDamage() + "\nHealth: " + warrior.healthPoints);

const mageDamage = () => {
    let mageDmg = Math.floor(Math.random() * (mage.intelligence*2 - mage.intelligence) + mage.intelligence);
    let mageAttack = {
        manaCost: 15,
        dmg: mageDmg,
    };
    if(mage.mana < 15) {
        mageAttack = {
        manaCost: 0,
        dmg: 'Não possui mana suficiente',
        };
        return mageAttack;
    };
    return mageAttack;
};

// console.log("Mage damage: " + mageDamage().dmg + "\nHealth: " + mage.healthPoints);

const gameActions = {
    // Crie as HOFs neste objeto.
    warriorTurn: () => {
        const warriorAt =  warriorDamage();
        dragon.healthPoints -= warriorAt;
        warrior.damage = warriorAt;
    },
    mageTurn: () => {
        const mageAt =  mageDamage();
        mage.mana -= mageAt.manaCost;
        dragon.healthPoints -= mageAt.dmg;
        mage.damage = mageAt;
    },
    dragonTurn: () => {
        const dragonAt =  dragonDamage();
        mage.healthPoints -= dragonAt;
        warrior.healthPoints -= dragonAt;
        dragon.damage = dragonAt;
    },
    turnResults: () => battleMembers,
};

gameActions.warriorTurn();
gameActions.mageTurn();
gameActions.dragonTurn();
console.log(gameActions.turnResults());