import { Price } from "./price";

export class Item {
    name:string;
    prices: Price[];
    providers: string[];

    constructor(name:string, prices:Price[], providers:string[]){
        this.name = name;
        this.prices = prices;
        this.providers = providers;
    }
}
