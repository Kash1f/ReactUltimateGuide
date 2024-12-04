import React from 'react';

const PRODUCT_DATA = {
  name: 'Sweater in Everyday Cotton',
  description: 'The Boxy Sweater in Everyday Cotton is a layering essential. Featuring a chunky rib stitch at the crew neckline, along the hem, and sleeve cuffs, it has dropped shoulders for a relaxed edge. It\'s made with 100% organic cotton and designed to be styled solo or easily topped with a blazer or cardigan.',
  price: 40,
  imageUrl: 'https://via.placeholder.com/300x400',
};

const ProductPage = () => {
  const handleAddToCart = () => {
    // TODO: Implement add to cart functionality
    console.log('Added to cart');
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <article className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={PRODUCT_DATA.imageUrl}
              alt={PRODUCT_DATA.name}
            />
          </div>
          
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {PRODUCT_DATA.name}
            </div>
            
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              The perfect boxy-fit sweater
            </h1>
            
            <p className="mt-2 text-gray-500">
              {PRODUCT_DATA.description}
            </p>
            
            <div className="flex items-center justify-between mt-4">
              <div>
                <span className="text-indigo-600 font-bold text-2xl">
                  ${PRODUCT_DATA.price}
                </span>
              </div>
              <button 
                onClick={handleAddToCart}
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default ProductPage;