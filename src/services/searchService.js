import products from "../data/products.json";
import categories from "../data/categories.json";

export function searchProducts(query) {
  if (!query.trim()) return [];

  const search = query.toLowerCase();

  return products
    .filter((product) => {
      return (
        product.name.toLowerCase().includes(search) ||
        product.shortDescription.toLowerCase().includes(search)
      );
    })
    .map((product) => {
      const category = categories.find(
        (c) => c.id === product.categoryId
      );

      return {
        ...product,
        category,
      };
    });
}