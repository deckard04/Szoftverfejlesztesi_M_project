import { Product } from "./product";
import { Availables } from "./sizes";

export class CartItem {

    id: number;
    brand: string;
    model: string;
    imageUrl: string;
    quantity: number;
    price: number;
    size: number;
    sizeId: number;


    constructor(product: Product, available: Availables){
        this.id = product.id;
        this.brand = product.brand;
        this.model = product.model;
        this.imageUrl = product.imgUrl;
        this.quantity = 1;
        this.price = product.price;
        this.size = available.size;
        this.sizeId = available.id;

    }

}