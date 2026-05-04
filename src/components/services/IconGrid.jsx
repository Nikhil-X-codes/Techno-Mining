import { CheckCircle, Target, Shield, TrendingUp } from 'lucide-react';

const icons = [CheckCircle, Target, Shield, TrendingUp];

export default function IconGrid({ title, items }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-slate-700 font-medium">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}