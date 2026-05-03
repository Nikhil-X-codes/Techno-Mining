export default function ServiceSection({ title, description, items }) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{title}</h2>
        {description ? <p className="mt-2 text-slate-600">{description}</p> : null}
      </div>
      {Array.isArray(items) && items.length > 0 ? (
        <ul className="grid gap-3 md:grid-cols-2">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
