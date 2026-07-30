import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-2">
              {isLast ? (
                <span className="font-medium text-slate-900">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    to={item.path}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>

                  <ChevronRight size={16} />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}