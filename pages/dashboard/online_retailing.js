import React from "react";

const OnlineRetailingPage = () => {
  return (
    <div
      className="min-h-screen bg-gray-100 py-10"
      style={{
        backgroundImage: `url("/online_retailing_image.jpg")`, // Path to the image in the public directory
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-black">
          About Online Retailing
        </h1>
        <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-md">
          <p className="text-black text-lg">
            Online retailing, also known as e-commerce, refers to the practice
            of selling products and services through the internet. It has become
            an integral part of modern commerce, offering convenience and
            accessibility to both businesses and consumers.
          </p>
          <p className="mt-4 text-black text-lg">
            Online retailers operate digital platforms where customers can
            browse and purchase items from a wide range of categories, such as
            clothing, electronics, groceries, and more. Customers can make
            purchases from the comfort of their homes or on-the-go using their
            computers, tablets, or smartphones.
          </p>
          <p className="mt-4 text-black text-lg">
            Online retailing has several advantages, including a broader reach,
            cost savings, personalized shopping experiences, and the ability to
            compare products and prices easily. It has also given rise to
            innovative business models, such as dropshipping and subscription
            services, that have transformed the way goods are sold and
            delivered.
          </p>
          <p className="mt-4 text-black text-lg">
            As technology continues to evolve, online retailing continues to
            adapt and expand, shaping the future of commerce. It's an exciting
            and dynamic industry that offers opportunities for businesses and
            consumers alike.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnlineRetailingPage;
