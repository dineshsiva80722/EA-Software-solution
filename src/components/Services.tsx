import React from 'react';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'ERP',
      description: 'Enterprise software that helps organizations manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations.'
    },
    {
      title: 'CRM',
      description: 'Software consulting that not only provides solutions but also helps you understand your customers better and build stronger relationships.'
    },
    {
      title: 'HRM',
      description: 'HR is more than payroll. We provide complete HR solutions that help manage employee data, time and attendance, and performance appraisals.'
    },
    {
      title: 'APP',
      description: 'We create all the unique mobile applications your business needs. From concept to deployment, we handle it all with expertise and innovation.'
    }
  ];

  return (
    <div className="py-20 container mx-auto px-4">
      <h2 className=" font-medium mb-12 flex  border-b-4 py-5 border-gray-400 rounded-lg justify-between text-5xl">Services
      <span className='text-xl font-normal w-[40rem] px-2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio aperiam necessitatibu
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </span>
      </h2>
      <div className="grid grid-cols-1  p-2 items-center  md:grid-cols-4 gap-10">
        {services.map((service) => (
          <div key={service.title} className="group relative hover:bg-purple-800 hover:text-white w-80 h-80 p-8 rounded-lg">
            <h3 className="text-4xl font-semibold mb-4 group-hover:text-white">{service.title}</h3>
            <p className="text-gray-600 text-lg mb-4 group-hover:text-white">{service.description}</p>
            <ArrowRight  className="text-purple-600 size-8 absolute bottom-4 right-4 group-hover:translate-x-2 group-hover:text-white transition-transform" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;