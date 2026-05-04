export default function Timeline({ title, items }) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          <div className="space-y-8">
            {items.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                {/* Content */}
                <div className="ml-8 bg-white rounded-lg shadow-sm p-6 flex-1">
                  <p className="text-slate-700 text-lg">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}