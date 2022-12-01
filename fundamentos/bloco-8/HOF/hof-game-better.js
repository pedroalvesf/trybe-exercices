const mage = {
    healthPoints: 130,
    intelligence: 45,
    weaponDmg: 2,
    mana: 125,
    skills: {
        teleporte: 1, //doesn`t get hit for the round cost 50 mana / cannont use twice in a row
        fireBall: 1, // damage normal cost 15 mana / cannont use twice in a row
        blizzard: 1, // damage normal cost 25 mana / cannont use twice in a row
    },
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
    skills: {
        berserker: 1, // 100% chance max hit / can use only 2 times
        undying: 1, // Doesn`t lose HP / can use only 1 time
        basicAttack: 1, // basic attack
    }
};

const rogue = {
    healthPoints: 150,
    agility: 40,
    weaponDmg: 4,
    damage: undefined,
    skills: {
        vitalHit: 1, //100% chance max hit / can use only 1 time
        vanish: 1, // Don`t receive damage from the dragon / can only use one time
        basicAttack: 1, // basic attack
    }
};

const dragon = {
    healthPoints: 550,
    strength: 50,
    damage: undefined,
    skills: {
        fireBreath: "damage*2",//damage in every player / can`t use twice in a row - 2* result
        tailHit: 1, // damage in 2/3 players
        roar: "HP +" + 200
    },
};

const battleMembers = { mage, warrior, rogue, dragon };
const dragonDamage = () => {
    let dragonAttack = Math.floor(Math.random() * (dragon.strength - 15) + 15);
    return dragonAttack;
};
const dragonFireBreath = () => {
    let dragonAttack = (Math.floor(Math.random() * ((dragon.strength*2) - 50) + 50));
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
    };
    if(mage.mana < 15){
        mageAttack = {
            manaCost: 0,
            mageDmg: 0,
        };
        return mageAttack;
    };
    return mageAttack;
};
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
};
const gameActions = {
    playerTurn: (callback, classe) => {
        const attribute = attributeCheck(classe);
        const playerAt = callback(classe, attribute);
        if(classe.mana){
            if(classe.mana < 15){
                playerAt = 0;
            }else {
                classe.mana -= 15;
                dragon.healthPoints -= playerAt;
                classe.damage = playerAt;
            }
        } else {
            dragon.healthPoints -= playerAt;
            classe.damage = playerAt;
        }
    },
    dragonTurn: (skill) => {
        if(skill === 'fireBreath'){
            let dragonAt = dragonFireBreath();
            warrior.healthPoints -= dragonAt;
            rogue.healthPoints -= dragonAt;
            mage.healthPoints -= dragonAt;
            dragon.damage = dragonAt;
            dragon.skills.fireBreath = dragonAt;
        };
        if(skill === 'roar') {
            dragon.healthPoints += 200;
            dragon.damage = 0;
        };
        if(skill === 'tailHit'){
            let dragonAt = dragonDamage();
            warrior.healthPoints -= dragonAt;
            rogue.healthPoints -= dragonAt;
            mage.healthPoints -= dragonAt;
            dragon.damage = dragonAt;
            dragon.skills.tailHit = dragonAt;
        }
    },
};

gameActions.playerTurn(playerDamage, warrior);
gameActions.playerTurn(playerDamage, rogue);
gameActions.playerTurn(playerDamage, mage);
gameActions.dragonTurn('fireBreath');
console.log(battleMembers);