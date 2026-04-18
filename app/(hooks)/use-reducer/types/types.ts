export type ProductType = {
    id: number;
    name: string;
    price: number;
}

export type CartItemType = {
    product: ProductType;
    quantity: number;
}