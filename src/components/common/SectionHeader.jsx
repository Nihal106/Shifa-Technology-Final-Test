export default function SectionHeader({
  badge,
  title,
  highlightedText,
  description,
  center = true,
}) {
  return (
    <div className={center ? "mx-auto mb-12 max-w-3xl text-center" : "mb-12"}>
      {badge && (
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        {title}{" "}
        {highlightedText && (
          <span className="text-blue-600">
            {highlightedText}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}