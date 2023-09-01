import React from 'react';

const Content = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Hello!!! Welcome To Our WebSite</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">An ecommerce site offers a powerful platform for businesses to expand their reach, streamline operations, gather insights, and provide convenient shopping experiences, making it a crucial tool in the modern business landscape.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* First Item */}
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="game.jpg" alt="content" />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Electrics</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Gaming Accessories</h2>
              <p className="leading-relaxed text-base">Here customers can find their electric gamming products, where used and non-used both are avaliable.</p>
            </div>
          </div>
          {/* Second Item */}
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="beauty.jpg" alt="content" />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Beauty pics</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Cosmetics</h2>
              <p className="leading-relaxed text-base">Shop makeup, skin care, hair care, fragrances and more.</p>
            </div>
          </div>
          {/* Third Item */}
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="electric.jpg" alt="content" />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Products</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Electronics</h2>
              <p className="leading-relaxed text-base">Shop home entertainment, TVs, home audio, headphones, cameras, accessories and more.</p>
            </div>
          </div>
          {/* Fourth Item */}
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="home.jpg" alt="content" />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">House Products</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Home & Kitchen Under $30</h2>
              <p className="leading-relaxed text-base">Price and other details may vary based on product size and color.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
