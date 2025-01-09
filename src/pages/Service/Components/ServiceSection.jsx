import React from 'react';
import { Check } from 'lucide-react';





export function ServiceSection({ title, items }) {
  return (
    <div className="mb-8">
   
        <h2 className="text-2xl font-bold text-[#1f1f1f] mb-4">{title}</h2>
        <div className="grid gap-4">
          {items.map((item, index) => (
           
              <div className="bg-[#faf8f4] rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#1f1f1f] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
          
          ))}
        </div>
    
    </div>
  );
}