import products from "../data/products.json";
import categories from "../data/categories.json";
import brands from "../data/brands.json";
import site from "../data/site.json";

export const getProducts = () => products;

export const getFeaturedProducts = () =>
  products.filter((product) => product.featured);

export const getCategories = () => categories;

export const getBrands = () => brands;

export const getSiteInfo = () => site;

export const getCategoryById = (id) =>
  categories.find((category) => category.id === id);

export const getCategoryBySlug = (slug) =>
  categories.find((category) => category.slug === slug);