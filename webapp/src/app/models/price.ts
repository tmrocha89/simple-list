export class Price {
    date: Date;
    storeName: string;
    value: number;
    url: string;
    productName: string;

    constructor(productName:string, value:number, date:Date, storeName:string, url:string){
        this.productName = productName;
        this.value = value;
        this.storeName = storeName;
        this.date = date;
        this.url = url;
    }
}
