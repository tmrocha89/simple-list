import { Item } from "./item";

export class List {
    name:string
    items: Item[];


    constructor(name:string, items?:Item[]){
        this.name = name;
        this.items = items ? items : [];
    }
}
