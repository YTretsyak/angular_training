import { ProductInterface } from "./product-interface";

export class Product implements ProductInterface {
    constructor(public name:string,public description:string, public price:number){

    }

    writeInfoToConsole(){
        console.log("Name:" + this.name + "description: " + this.description+"price: " + this.price);
    }
}
