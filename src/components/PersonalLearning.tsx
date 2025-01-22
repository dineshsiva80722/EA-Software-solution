import React from 'react';
import { ArrowRight } from 'lucide-react';

const PersonalLearning = () => {
  return (
    <div className="relative h-[30rem]">
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
        alt="Abstract technology"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-600/90" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="w-full flex justify-start">
          <h2 className="text-5xl text-white font-bold w-[40rem] mb-4">
            Personal learning with us. Dedicated to your goals and success.
          </h2>
          <div className="rounded-full w-20 h-20 flex items-center justify-center relative left-60 bg-black/50 p-4 group hover:w-[30rem] transition-all duration-[0.7s] overflow-hidden">
            <div className="flex items-center justify-center w-full">
              <ArrowRight className="text-white size-8 group-hover:hidden " />
              <span className="hidden group-hover:block text-white text-3xl whitespace-nowrap">
                Explore Personal Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalLearning;