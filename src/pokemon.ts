import {getRandomNumber} from "./function";
import {Attack} from "./Attack";

export class Pokemon{
    name: string;
    level: number;
    type: string;
    hp: number;
    defPhysique: number;
    defPsychique: number;
    power: number;
    speed: number;
    crit: number;
    attackList: Attack[];
   

    constructor(name: string, level: number,type: string, hp: number, defPhysique: number, defPsychique: number, power: number, speed: number, attacks: Attack[]) {
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

    attack(target: Pokemon, attack: number, hit: boolean): void {
        if (hit) {
            // test if attakc.nature = physique or psychique and change the def
            const damage = Math.floor(Math.floor(Math.floor(2 * this.level / 5 + 2) * this.attackList[attack].power * this.power / target.defPhysique) / 50) + 2;
            target.hp -= damage;
        }
    }

    checkHit(attack: Attack): boolean{
        return getRandomNumber(100) <= attack.accuracy;
    }
}