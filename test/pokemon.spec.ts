import {Battle} from "../src/Battle";
import {Pokemon} from "../src/Pokemon";

describe('Test Pokemon.ts', () => {
    const pika: Pokemon = new Pokemon("pikachu", 10);
    const salamech: Pokemon = new Pokemon("salamech", 11);
    const draco: Pokemon = new Pokemon("dracofeu", 5);

    test('should pick pikachu', () => {
        expect(Battle.attackFirst(pika, draco)).toEqual(pika);
    });

    test('should pick salamech', () => {
        expect(Battle.attackFirst(pika, salamech)).toEqual(salamech);
    });
});