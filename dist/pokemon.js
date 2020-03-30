"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
class Pokemon {
    constructor(name, level, type, hp, defPhysique, defPsychique, power, speed, attacks) {
        this.name = name;
        this.level = level;
        this.type = type;
        this.hp = hp;
        this.defPhysique = defPhysique;
        this.defPsychique = defPsychique;
        this.power = power;
        this.speed = speed;
        this.crit = power * 0.3;
        this.attackList = attacks;
    }
    attack(target, attack, hit) {
        if (hit) {
            // test if attakc.nature = physique or psychique and change the def
            const damage = Math.floor(Math.floor(Math.floor(2 * this.level / 5 + 2) * this.attackList[attack].power * this.power / target.defPhysique) / 50) + 2;
            target.hp -= damage;
        }
    }
    checkHit(attack) {
        return function_1.getRandomNumber(100) <= attack.accuracy;
    }
}
exports.Pokemon = Pokemon;
