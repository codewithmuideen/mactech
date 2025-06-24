import React from 'react';

// Data for the feature blocks. This makes the component clean and easy to update.
const features = [
  {
    title: 'Zero onboarding fees',
    description: 'Unlike other CRMs it costs nothing to set up and implement MacTech. What you see is what you get.',
  },
  {
    title: 'Rapid implementation, rapid time to value',
    description: "Create bespoke workflows, email templates and automations for the tedious tasks you're bogged down with.",
  },
  {
    title: 'Workflows that just work',
    description: 'As soon as you sign up, you can start using MacTech immediately. Import your data in lots of different ways and start growing your business.',
  },
  {
    title: 'Your MacTech; your way',
    description: 'With over 60 native integrations, the ability to label and tag data the way you need, and customizable automations, MacTech is yours to do with as you please.',
  },
];

// A smaller, reusable component for each feature item.
const FeatureItem = ({ title, description }) => (
  <div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);


const WhyMactech = () => {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Why MacTech Nigeria
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 gap-x-12 lg:gap-x-20">
          {features.map((feature) => (
            <FeatureItem 
              key={feature.title} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhyMactech;