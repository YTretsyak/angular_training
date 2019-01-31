
interface IProduct{
    name:string;
    description?:string;
    price:number;
    GetPriceinDollars():number;
}

export class Product implements IProduct{
    name: string;    description?: string;
    price: number;
    constructor(name:string, price:number, description?:string){
        this.name = name;
        this.description = description;
        this.price= price;
    }

    GetPriceinDollars(): number {
        return this.price * 2.14;
    }
}