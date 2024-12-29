import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming Ideas into
            <span className="text-indigo-600"> Digital Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Custom web development solutions that bring your vision to life. 
            From concept to deployment, I create stunning, performant websites 
            that drive results.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#portfolio" 
              className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:border-indigo-600 hover:text-indigo-600 transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}