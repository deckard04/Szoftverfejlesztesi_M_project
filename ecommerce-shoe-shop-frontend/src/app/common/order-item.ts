import { CartItem } from "./cart-item";

export class OrderItem {
    part_price: number;
    quantity: number;
    product_id: number;

    constructor(cartItem: CartItem){
        this.product_id = cartItem.id;
        this.quantity = cartItem.quantity;
        this.part_price = cartItem.price;
    }
}
