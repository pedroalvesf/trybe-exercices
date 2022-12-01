const mage = {
    healthPoints: 130,
    intelligence: 45,
    weaponDmg: 2,
    mana: 125,
    skills: {
        teleporte: "NoDmg",
        blizzard: "Blizzard",
        fireBall: "Fire Ball",
    },
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
    skills: {
        berserker: "Max Hit",
        undying: "Doesn`t lose HP",
        basicAttack: "Basic Attack",
    },
};

const rogue = {
    healthPoints: 150,
    agility: 40,
    weaponDmg: 3,
    damage: undefined,
    skills: {
        vitalHit: "Critical Hit",
        vanish: "NoDmg",
        basicAttack: "Basic Attack",
    },
};

const dragon = {
    healthPoints: 550,
    strength: 50,
    damage: undefined,
    skills: {
        fireBreath: "damage*2",
        tailHit: "Basic Attack",
        roar: "HP +" + 200,
    },
};

const battleMembers = { mage, warrior, rogue, dragon };
const dragonDamage = () => {
    let dragonAttack = Math.floor(Math.random() * (dragon.strength - 15) + 15);
    return dragonAttack;
};
const dragonFireBreath = () => {
    let dragonAttack = Math.floor(
        Math.random() * (dragon.strength * 2 - 50) + 50
    );
    return dragonAttack;
};
const playerDamage = (classe, attribute) => {
    const playerAttack = Math.floor(
        Math.random() * (classe[attribute] * classe.weaponDmg - classe[attribute]) +
        classe[attribute]
    );
    return playerAttack;
};
const rogueBasicAttack = () => {
    const rogueAttack = Math.floor(Math.random() * (rogue.agility * rogue.weaponDmg - rogue.agility) + rogue.agility);
    return rogueAttack;
};
const rogueVitalHit = () => {
    return rogueVitalDmg = rogue.agility * rogue.weaponDmg
}
const warriorBasicAttack = () => {
    const warriorAttack = Math.floor(
        Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) +
        warrior.strength
    );
    return warriorAttack;
};

const warriorBerserkerAttack = () => {
    return (warriorAttack = warrior.strength * warrior.weaponDmg);
};
const mageFireballDamage = () => {
    const mageC = Math.floor(
        Math.random() * (mage.intelligence * mage.weaponDmg - mage.intelligence) +
        mage.intelligence
    );
    let mageAttack = {
        manaCost: 15,
        mageDmg: mageC,
    };
    if (mage.mana < 15) {
        mageAttack = {
            manaCost: 0,
            mageDmg: 0,
        };
        return mageAttack;
    }
    return mageAttack;
};

const mageBlizzardDamage = () => {
    const mageC = Math.floor(
        Math.random() * (mage.intelligence * mage.weaponDmg - mage.intelligence) +
        mage.intelligence +
        mage.intelligence
    );
    let mageAttack = {
        manaCost: 25,
        mageDmg: mageC,
    };
    if (mage.mana < 25) {
        mageAttack = {
            manaCost: 0,
            mageDmg: 0,
        };
        return mageAttack;
    }
    return mageAttack;
};

const attributeCheck = (classe) => {
    let attribute;
    if (classe.strength) {
        attribute = "strength";
    } else if (classe.agility) {
        attribute = "agility";
    } else {
        attribute = "intelligence";
    }
    return attribute;
};
const gameActions = {
    playerTurn: (callback, classe) => {
        const attribute = attributeCheck(classe);
        const playerAt = callback(classe, attribute);
        if (classe.mana) {
            if (classe.mana < 15) {
                playerAt = 0;
            } else {
                classe.mana -= 15;
                dragon.healthPoints -= playerAt;
                classe.damage = playerAt;
                mage.skills.fireBall = playerAt;
            }
        } else {
            dragon.healthPoints -= playerAt;
            classe.damage = playerAt;
        }
    },
    rogueTurn: (skill) => {

        if (skill === 'vitalHit') {
            const rogueAt = rogueVitalHit();
            dragon.healthPoints -= rogueAt;
            rogue.damage = rogueAt;
            rogue.skills.vitalHit = rogueAt;

        }
        if (skill === 'vanish') {
            rogue.healthPoints += dragon.damage;
            rogue.damage = 0;
        }
        if (skill === 'basicAttack') {
            const rogueAt = rogueBasicAttack();
            dragon.healthPoints -= rogueAt;
            rogue.damage = rogueAt;
            rogue.skills.basicAttack = rogueAt;
        }
    },
    warriorTurn: (skill) => {
        if (skill === "berserker") {
            const warriorAt = warriorBerserkerAttack();
            dragon.healthPoints -= warriorAt;
            warrior.damage = warriorAt;
            warrior.skills.berserker = warriorAt;
        }
        if (skill === "undying") {
            warrior.healthPoints += dragon.damage;
        }
        if (skill === "basicAttack") {
            const warriorAt = warriorBasicAttack();
            dragon.healthPoints -= warriorAt;
            warrior.damage = warriorAt;
            warrior.skills.basicAttack = warriorAt;
        }
    },
    mageTurn: (skill) => {
        if (skill === "fireBall") {
            let mageAt = mageFireballDamage();
            mage.mana -= 15;
            dragon.healthPoints -= mageAt.mageDmg;
            mage.damage = mageAt.mageDmg;
            mage.skills.fireBall = mageAt.mageDmg;
        }
        if (skill === "blizzard") {
            let mageAt = mageBlizzardDamage();
            mage.mana -= 25;
            dragon.healthPoints -= mageAt.mageDmg;
            mage.damage = mageAt.mageDmg;
            mage.skills.blizzard = mageAt.mageDmg;
        }
    },
    dragonTurn: (skill) => {
        if (skill === "fireBreath") {
            let dragonAt = dragonFireBreath();
            warrior.healthPoints -= dragonAt;
            rogue.healthPoints -= dragonAt;
            mage.healthPoints -= dragonAt;
            dragon.damage = dragonAt;
            dragon.skills.fireBreath = dragonAt;
        }
        if (skill === "roar") {
            dragon.healthPoints += 200;
            dragon.damage = 0;
        }
        if (skill === "tailHit") {
            let dragonAt = dragonDamage();
            warrior.healthPoints -= dragonAt;
            rogue.healthPoints -= dragonAt;
            mage.healthPoints -= dragonAt;
            dragon.damage = dragonAt;
            dragon.skills.tailHit = dragonAt;
        }
    },
};
gameActions.dragonTurn("fireBreath");
gameActions.warriorTurn("berserker");
gameActions.rogueTurn('vanish');
gameActions.mageTurn("blizzard");
console.log(battleMembers);
