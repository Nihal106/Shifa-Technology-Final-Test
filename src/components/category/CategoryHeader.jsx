import Container from "../ui/Container";
import Breadcrumb from "../common/Breadcrumb";

export default function CategoryHeader({
  category,
 productCount,
}) {
  return (
<div className="bg-slate-100 py-12">
  <div className="mx-auto max-w-7xl px-6">

    <Breadcrumb
      items={[
        { label: "Home", path: "/" },
        { label: "Categories", path: "/" },
        { label: category.name }
      ]}
    />

    <h1 className="mt-4 text-4xl font-bold text-slate-900">
      {category.name}
    </h1>

    <p className="mt-3 max-w-2xl text-slate-600">
      {category.description}
    </p>

    <p className="mt-4 text-sm font-medium text-slate-500">
      Showing {productCount} Products
    </p>

  </div>
</div>
  );
}