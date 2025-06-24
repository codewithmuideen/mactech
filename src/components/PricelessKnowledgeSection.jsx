import React from 'react';
// The import assumes you have an 'images' barrel file in a 'constants' directory
// which exports the images needed for the cards.
// e.g., in /constants/images.js:
// import aiTools from './../assets/ai-tools.png';
// import crmImplementation from './../assets/crm-implementation.png';
// import zapierIntegration from './../assets/zapier-integration.png';
// export { aiTools, crmImplementation, zapierIntegration };
import images from './../constants/images';

// Reusable Blog Card Component
const BlogCard = ({ image, category, title }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
      />
      <div className="ml-4">
        <p className="text-sm font-semibold text-indigo-600">{category}</p>
        <h3 className="mt-1 text-base font-medium text-gray-900">{title}</h3>
      </div>
    </div>
  );
};

// Main Section Component
const PricelessKnowledgeSection = () => {
  const blogPosts = [
    {
      image: images.mysale, // First image from the original screenshot
      category: 'Sales',
      title: '10+ best free AI tools for businesses',
    },
    {
      image: images.mycrm, // Second image from the original screenshot
      category: 'CRM',
      title: 'How to implement a CRM',
    },
    {
      image: images.myproduct, // Third image from the original screenshot
      category: 'Product',
      title: 'Make the most of Zapier and MacTech: Use...',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Priceless knowledge for small businesses
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our blog is packed with useful tips and tricks - so there's always
            something for you to learn.
          </p>
        </div>

        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              category={post.category}
              title={post.title}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-black text-white font-semibold py-3 px-8 rounded-full text-base hover:bg-gray-800 transition-colors duration-300">
            Discover more insights
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricelessKnowledgeSection;