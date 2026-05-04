export default function ZigZagSteps({ title, items }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
        </div>
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-1/2">
                <div className={`bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-50 to-indigo-50' : 'from-indigo-50 to-blue-50'} rounded-xl p-8 shadow-sm`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Step {index + 1}</h3>
                  </div>
                  <p className="text-slate-700 text-lg">{item}</p>
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="text-3xl">🔄</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}