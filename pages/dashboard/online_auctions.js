import React from "react";

const OnlineAuctionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-600">About Online Auctions</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-red-700 text-lg">
            Online auctions are virtual marketplaces where items are sold to the highest bidder.
            These auctions take place over the internet and provide a platform for individuals and
            businesses to buy and sell a wide range of items, from collectibles to real estate.
          </p>
          <p className="mt-4 text-gray-700 text-lg">
            In online auctions, participants place bids on items they are interested in purchasing.
            The highest bid at the end of the auction wins the item. Online auctions offer a dynamic
            and exciting way to acquire unique and valuable items.
          </p>
          <p className="mt-4 text-red-700 text-lg">
            Online auctions can be conducted in various formats, including timed auctions, live
            auctions, and sealed bid auctions. These platforms bring together bidders from around
            the world, creating a competitive environment that often results in fair market prices.
          </p>
          <p className="mt-4 text-gray-700 text-lg">
            One of the advantages of online auctions is the ability to participate from anywhere,
            eliminating geographical limitations. They provide transparency, convenience, and the
            opportunity to discover rare and one-of-a-kind items.
          </p>
          <p className="mt-4 text-red-700 text-lg">
            Online auctions have revolutionized the way people buy and sell items, offering a
            platform that combines the excitement of bidding with the convenience of online shopping.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnlineAuctionsPage;
