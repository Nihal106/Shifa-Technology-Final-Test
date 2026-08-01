import products from "../data/products.json";
import categories from "../data/categories.json";

export function searchProducts(query) {
  if (!query.trim()) return [];

  const search = query.toLowerCase();

  return products
    .filter((product) => {
      return (
        product.name.en.toLowerCase().includes(search) ||
        product.name.ar.toLowerCase().includes(search) ||
        product.shortDescription.en
          .toLowerCase()
          .includes(search) ||
        product.shortDescription.ar
          .toLowerCase()
          .includes(search)
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