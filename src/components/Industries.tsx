import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';

const Industries = () => {
  return (
    <div className="py-64 bg-[#D9E2FF]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-8xl font-normal  mb-6">Industries</h2>
            <p className="text-black py-5 text-xl mb-8">
              We Expertly Serve Every Industry We Cater To.
              Our solutions are tailored to meet the unique needs of various sectors, helping businesses thrive.
              Let us help you take your business forward.
            </p>
            <button className="bg-purple-600 text-white px-20  h-20 rounded-full">
              All Client
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg  shadow-lg">
            <div className="flex justify-between items-center p-5 mb-4">
              <h3 className="text-6xl font-semibold ">Technology</h3>
              {/* <Instagram size={24} /> */}
            </div>
            <p className="text-gray-600 mb-4">
              Fast-paced tech advancement requires staying ahead of emerging trends...
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil obcaecati repudiandae dolorem, aperiam harum, ex accusantium ullam consectetur rem minima placeat ipsum error explicabo blanditiis dolore architecto ea non eum?
            </p>
            <ArrowRight className="text-purple-600 float-right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries;