import { userService } from './userService';

const ROOT_URL = 'https://fakestoreapi.com/'; // copypaste :S
const CARTS_URL = ROOT_URL + 'carts';

export interface PRODUCT_QUANTITY {
  productId: number;
  quantity: number;
}

interface _CART_RAW {
  id: number;
  userId: number;
  products: PRODUCT_QUANTITY[];
}

interface CART_RAW extends _CART_RAW {
  date: string;
}

interface CART extends _CART_RAW {
  date: Date;
}

class CartService {
  timestamp?: Date;
  id?: number;
  products: PRODUCT_QUANTITY[] = [];

  async addProductToCart(products: PRODUCT_QUANTITY[]) {
    if (!this.timestamp) {
      this.timestamp = new Date();
    }

    const response = (await fetch(CARTS_URL, {
      method: 'POST',
      body: JSON.stringify({
        userId: userService.id,
        date: this.timestamp,
        products,
      }),
    }).then((res) => res.json())) as CART_RAW;

    this.id = response.id;
    this.products = response.products;
    this.timestamp = new Date(response.date);
  }

  async updateProductInCart() {
    // noop
  }
}

export const cartService = new CartService();
