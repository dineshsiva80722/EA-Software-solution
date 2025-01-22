import React from 'react';

const Milestones = () => {
  const stats = [
    { label: 'Projects Completed', value: '+69' },
    { label: 'Happy Customer', value: '+25' },
    { label: 'Customer Satisfaction', value: '97%' },
    { label: 'Year of Experience', value: '+3' }
  ];

  return (
    <div className="py-20 container mx-auto px-4">
      <h2 className="text-7xl font-light mb-12">Milestones</h2>
      <p className="text-gray-600 text-xl w-5/12 mb-12">
        Explore Company Social media activity to stay up to date on the latest news, events, and developing the understanding world behind technology.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-8xl font-bold text-purple-600 mb-2">{stat.value}</div>
            <div className="text-gray-600 text-xl">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Milestones;