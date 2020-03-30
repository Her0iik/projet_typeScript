"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
class Battle {
    static attackFirst(pok1, pok2) {
        if (pok1.speed > pok2.speed) {
            return pok1;
        }
        else if (pok2.speed > pok1.speed) {
            return pok2;
        }
        else {
            const rand = getRandomInt(2);
            return rand === 0 ? pok1 : pok2;
        }
    }
}
exports.Battle = Battle;
