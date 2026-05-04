import { Star } from 'lucide-react';

export default function HighlightSection({ title, items }) {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="mb-4">
                <Star className="w-12 h-12 text-yellow-400 mx-auto" />
              </div>
              <p className="text-white text-lg font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}