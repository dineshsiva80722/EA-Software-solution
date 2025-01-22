import React from 'react';

const AboutUs = () => {
  const sections = [
    { title: 'Aim', content: 'By implementing innovative technology solutions that help IT and business simply connect, we strive to provide outstanding solutions that drive business growth, enhance productivity, and increase customer opportunities.' },
    { title: 'Mission', content: 'To provide unparalleled software solutions, foster learning through high-skilled courses, and propel careers. Empowering society to reach new heights through future-ready technology integration.' },
    { title: 'Progress', content: 'As a consulting center, progress is measured by the satisfied attitude of our customers. We are proud to say that we have successfully trained many aspiring professionals in our IT and development courses.' }
  ];

  return (
    <div className="py-20 container mx-auto px-4">
      <h2 className="text-6xl font-medium mb-16 pb-12 border-b-2">About Us</h2>
      
      <div className="flex justify-start gap-5">
        <div>
          <p className="text-gray-600 w-[35rem] text-xl text-justify mb-8">
            Welcome to Your Company Name, where innovation meets excellence. As a leading provider of comprehensive IT solutions and training, we are dedicated to delivering cutting-edge technology solutions while nurturing talent through our extensive educational initiatives. Years of experience...
          </p>
          <button className="bg-purple-600 text-white px-20 py-7 my-10 rounded-full">
            More about us
          </button>
        </div>
        <div className="space-y-8 w-[50rem  ">
          {sections.map((section) => (
            <div key={section.title} className='flex p-10 items-center gap-10  justify-start '>
              <h3 className="font-normal text-center text-4xl w-96  ">{section.title}</h3>
              <p className="text-lg  ml-5">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;