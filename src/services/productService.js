import products from "../data/products.json";
import categories from "../data/categories.json";
import brands from "../data/brands.json";

export function getFeaturedProducts() {
  return products
    .filter((product) => product.featured)
    .map((product) => ({
      ...product,
      category: categories.find(
        (category) => category.id === product.categoryId
      ),
      brand: brands.find(
        (brand) => brand.id === product.brandId
      ),
    }));
}