import { useTranslation } from "react-i18next";

import Container from "../ui/Container";
import Breadcrumb from "../common/Breadcrumb";

export default function CategoryHeader({
  category,
  productCount,
}) {
  const { t, i18n } = useTranslation("common");

  const lang =
    i18n.language === "ar" ? "ar" : "en";

  return (
    <div className="bg-slate-100 py-10 lg:py-12">
      <Container>

        <Breadcrumb
          items={[
            {
              label: t("nav.home"),
              path: "/",
            },
            {
              label: t("nav.categories"),
              path: "/",
            },
            {
              label: category.name[lang],
            },
          ]}
        />

        <h1 className="mt-4 text-4xl font-bold text-slate-900">
          {category.name[lang]}
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          {category.description[lang]}
        </p>

<p className="mt-4 text-sm font-medium text-slate-500">
  {t("category.products", { count: productCount })}
</p>
      </Container>
    </div>
  );
}