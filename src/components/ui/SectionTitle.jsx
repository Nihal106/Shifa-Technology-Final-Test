export default function SectionTitle({
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={center ? "text-center mb-12" : "mb-12"}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}