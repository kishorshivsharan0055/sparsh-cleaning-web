import React from "react";

interface GridServicesProps {}

const GridServices: React.FC<GridServicesProps> = () => {
  const data = [
    {
      title: "Water Tank Cleaning",
      desc: "Best Water Tank Cleaning service is provided by Sparsh Cleaning solutions",
    },
    {
      title: "Window Cleaning",
      desc: "Best Window Cleaning service is provided by Sparsh Cleaning solutions",
    },
    {
      title: "Bathroom Deep Cleaning",
      desc: "Best Bathroom Deep Cleaning service is provided by Sparsh Cleaning solutions",
    },
  ];

  const housekeepData = [
    {
      title: "Pest Control",
      img: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f99e185a4e483edcec6968b%2FMan-Spraying-Pesticide-In-Kitchen%2F960x0.jpg%3Ffit%3Dscale",
    },
    {
      title: "Sofa Shampooing",
      img: "http://shineprofacilities.in/images/ss/ss1.jpg",
    },
    {
      title: "After Party & Event Cleaning",
      img: "https://jandevents.com/wp-content/uploads/jand-party.jpg",
    },
    {
      title: "Drain Chockup Cleaning",
      img: "https://magnificentplumbing.com/wp-content/uploads/2017/07/With-so-many-causes-of-clogged-drains-its-common-to-have-to-call-a-plumber-for-help.jpg",
    },
    {
      title: "Gardening",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/proud-gardener-royalty-free-image-539829042-1555499812.jpg",
    },
  ]

  return (
    <div>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-3">
            {data.map((item) => (
              <div className="p-6" key={item.title} data-aos="fade-up">
                <div className="flex items-center mb-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mr-3 text-blue-400 rounded-full bg-blue-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(72 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(144 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(216 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(288 12 12)"
                      ></line>
                    </svg>
                  </div>
                  <h1 className="text-xl font-semibold leading-none tracking-tighter text-neutral-600">
                    {" "}
                    {item.title}{" "}
                  </h1>
                </div>
                <p className="mx-auto text-base leading-relaxed text-gray-300">
                  {" "}
                  {item.desc}
                </p>                
              </div>
            ))}
          </div>
        </div>
      </section>


      <h3 className="text-3xl text-gray-900 font-semibold text-center ">House Keeping Services</h3>        
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto  md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            {housekeepData.map((item) => (
              <div className="p-6" data-aos="fade-up" key={item.title}>
              <img
                className="object-cover object-center w-full mb-8  lg:h-48 md:h-36 rounded-xl"
                src={item.img}
                alt="blog"
              />
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter  text-neutral-600 lg:text-3xl">
                {" "}
                {item.title}{" "}
              </h1>
            </div> 
            ))}
             
          </div>
        </div>
      </section>
    </div>
  );
};

export default GridServices;
