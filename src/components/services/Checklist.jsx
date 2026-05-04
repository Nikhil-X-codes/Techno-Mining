import { CheckSquare } from 'lucide-react';

export default function Checklist({ title, items }) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckSquare className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-slate-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}