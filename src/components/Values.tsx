import React from 'react';
import { Users2, MessageCircle, Lock } from 'lucide-react';

const Values = () => {
  /**
   * Values that guide our company.
   *
   * @constant
   * @type {Array<{icon: ReactElement, title: string, description: string}>}
   */
  const values = [
    {
      icon: <Users2 size={60} className="text-purple-600" />,
      title: 'Experience',
      description: 'Our team brings years of expertise across various industries, ensuring we deliver solutions that not only meet but exceed expectations.'
    },
    {
      icon: <MessageCircle size={60} className="text-purple-600" />,
      title: 'Communication',
      description: 'We maintain clear and consistent communication throughout every project, ensuring all stakeholders are aligned and informed.'
    },
    {
      icon: <MessageCircle size={60} className="text-purple-600" />,
      title: 'Communication',
      description: 'We maintain clear and consistent communication throughout every project, ensuring all stakeholders are aligned and informed.'
    },
    {
      icon: <Lock size={60} className="text-purple-600" />,
      title: 'Openness',
      description: 'Transparency and honesty are core values that guide our interactions with clients and team members alike.'
    }
  ];

  return (
    <div className="py-40 container mx-auto px-4">
      <h2 className="text-8xl font-light border-b-4 py-3 border-[#000] rounded-lg  mb-12 flex justify-between">Values
        <span className='text-xl font-normal w-[40rem] px-2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio aperiam necessitatibu
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {values.map((value) => (
          <div key={value.title}>
              {value.icon}
            <h3 className="text-6xl font-semibold my-4">{value.title}</h3>
            <p className="text-gray-600 text-xl">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Values;