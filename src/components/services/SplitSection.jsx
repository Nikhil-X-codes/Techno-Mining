export default function SplitSection({ title, description }) {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center">
              <div className="text-6xl text-blue-600">📋</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}