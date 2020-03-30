import {Pokemon} from "../src/Pokemon";
import {Attack} from "../src/Attack";
import {Battle} from "../src/Battle";

describe('Test Battle.ts', () => {
    const attacks = [new Attack("charge", 40,  "physique", "normal", 100)]
    //const pikachu: Pokemon = new Pokemon("pikachu", 1,"Electrik",  attacks );
    const salameche: Pokemon = new Pokemon("salameche", 2, "Feu", 39, 43, 50, 52, 65, attacks);
    const Bulbizarre: Pokemon = new Pokemon("Bulbizarre", 3, "Herbe", 45, 49, 65, 49, 45, attacks);
    const Carapuce: Pokemon = new Pokemon("Carapuce", 4, "Eau", 44, 65, 64, 48, 43, attacks);

    test('Bulbizarre should be 1st', () => {
        expect(Battle.attackFirst(Bulbizarre, Carapuce)).toEqual([Bulbizarre,Carapuce]);
    });

    test('Salameche should be 1st', () => {
        expect(Battle.attackFirst(salameche, Bulbizarre)).toEqual([salameche,Bulbizarre]);
    });
/*
    test('Battle should get salameche as winner', async () => {
        expect(await Battle.fight(salameche, Bulbizarre)).toEqual(salameche);
    });*/

});