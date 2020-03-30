export class Attack{
    name: string;
    power: number;
    nature: string;
    type: string;
    accuracy: number;

    constructor(name: string, power: number, nature: string, type: string, accuracy: number) {
        this.name = name;
        this.power = power;
        this.nature = nature;
        this.type = type;
        this.accuracy = accuracy;
    }
}