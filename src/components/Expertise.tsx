import React from 'react';

const Expertise = () => {
  const logos = [
    { src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png", alt: "Google" },
    { src: "https://www.fedex.com/content/dam/fedex-com/logos/FedEx-Logo.png", alt: "FedEx" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png", alt: "Amazon" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Nikkor_Club_Logo%2C1968.jpg", alt: "Nikon" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/640px-Spotify_logo_without_text.svg.png", alt: "Shopify" }
  ];

  return (
    <div className="bg-[#D9E2FF] py-20">
      <div className="container py-10 mx-auto px-4">
        <h2 className="text-3xl border-b-4 py-3 border-[#fff] rounded-lg font-bold mb-12 flex justify-between">Expertise
          <span className='text-xl font-normal w-[40rem] px-2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio aperiam necessitatibu
            Lorem ipsum dolor, sit amet consectetur adipisicing elit
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {logos.map((logo) => (
            <img
            
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="w-40 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;