import { useLocation, useParams } from "react-router-dom";

import { useState } from "react";
import Container from "../components/ui/Container";
import brands from "../data/brands.json";
import CategoryHeader from "../components/category/CategoryHeader";
import CategorySidebar from "../components/category/CategorySidebar";
import ProductGrid from "../components/category/ProductGrid";

import products from "../data/products.json";
import categories from "../data/categories.json";

export default function Category() {
    const [searchTerm, setSearchTerm] = useState("");

  const { slug } = useParams();
  const location = useLocation();

const highlightProduct =
  location.state?.highlightProduct;

  const category = categories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    return (
      <Container className="py-20">
        <h1 className="text-3xl font-bold">
          Category Not Found
        </h1>
      </Container>
    );
  }

const filteredProducts = products.filter((product) => {
  const matchesCategory = product.categoryId === category.id;

  const matchesSearch =
    product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    product.shortDescription
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

  return matchesCategory && matchesSearch;
});

  return (
    <>
      <CategoryHeader
  category={category}
  productCount={filteredProducts.length}
/>

      <Container className="py-12">

        <div className="grid gap-8 lg:grid-cols-4">

          <CategorySidebar
  categories={categories}
  brands={brands}
  selectedCategory={category}
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
/>
          <div className="lg:col-span-3">
            <ProductGrid
  products={filteredProducts}
  highlightProduct={highlightProduct}
/>
          </div>

        </div>

      </Container>
    </>
  );
}