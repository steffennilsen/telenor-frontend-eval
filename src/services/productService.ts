const ROOT_URL = 'https://fakestoreapi.com/';
const PRODUCTS_URL = ROOT_URL + 'products';

export interface ProductRating {
  rate: number;
  count: number;
}

export interface ProductData {
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
    return fetch(PRODUCTS_URL).then((res) => res.json()) as Promise<
      ProductData[]
    >;
  }

  async getProduct(id: string) {
    return fetch(`${PRODUCTS_URL}/${id}`).then((res) => res.json()) as Promise<ProductData>;
  }

  /**
   * No dummy API call for this so we infer from the products
   * Doing in the simplest form since the dummy data is so small
   * we are just going to string compare and use their index
   */
  getProductCategories(products: ProductData[]) {
    const categories: string[] = [];
    products.forEach((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    });
    return categories.sort();
  }
}

export const productService = new ProductService();
