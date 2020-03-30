import {Battle} from "../src/Battle";
import {Pokemon} from "../src/Pokemon";
import {Attack} from "../src/Attack";

describe('Test Pokemon.ts', () => {

    const attacks = [new Attack("charge", 40,  "physique", "normal", 100)]
    //const pikachu: Pokemon = new Pokemon("pikachu", 1,"Electrik",  attacks );
    const salameche: Pokemon = new Pokemon("salameche", 2, "Feu", 39, 43, 50, 52, 65, attacks);
    const Bulbizarre: Pokemon = new Pokemon("Bulbizarre", 3, "Herbe", 45, 49, 65, 49, 45, attacks);
    const Carapuce: Pokemon = new Pokemon("Carapuce", 4, "Eau", 44, 65, 64, 48, 43, attacks);

    test('should pick Bulbizarre', () => {
        expect(Battle.attackFirst(Bulbizarre, Carapuce)).toBe(Bulbizarre);
    });

    test('should pick salameche', () => {
        expect(Battle.attackFirst(salameche, Bulbizarre)).toBe(salameche);
    });

     //console.log(salameche.attack(Bulbizarre, 0, false));

    test('salameche should have 39 hp', () => {
        Bulbizarre.attack(Bulbizarre, 0, true);
        expect(salameche.hp).toBe(39);
    });

    test('Carapuce should have 41 hp', () => {
        Bulbizarre.attack(Carapuce, 0, true);
        expect(Carapuce.hp).toBe(41);
    });

    test('Carapuce should lost 0 hp and stay at 41 hp', () => {
        Bulbizarre.attack(Carapuce, 0, false);
        expect(Carapuce.hp).toBe(41);
    });
});