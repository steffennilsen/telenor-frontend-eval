const ROOT_URL = 'https://fakestoreapi.com/';
const PRODUCTS_URL = ROOT_URL + 'products';

export interface ProductRating {
    rate: number;
    count: number;
}

export interface Product {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: ProductRating;
    title: string;
}

class ProductService {
    async getAllProducts() {
        return fetch(PRODUCTS_URL).then((res) => res.json()) as Promise<Product[]>;
    }
}

export const productService = new ProductService();
