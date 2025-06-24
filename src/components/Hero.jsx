// src/components/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white">
      {/* py-24 adds significant padding top/bottom. lg:py-32 makes it even larger on big screens. */}
      <div className="container mx-auto px-4 py-24 lg:py-32">
        {/* Flexbox container to center all content vertically and horizontally */}
        <div className="flex flex-col items-center text-center">

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight bg-gradient-to-r from-[#5C7CC2] to-[#C3628C] text-transparent bg-clip-text">
  Win more. Do more.
  <br />
  Grow fast.
</h1>


          {/* Subheading Paragraph */}
          <p className="mt-6 text-lg lg:text-xl text-brand-gray-text max-w-2xl">
           MacTech is what your small business needs to win more deals, be more
            productive, and delight your customers.
          </p>

          {/* Call-to-action Button */}
          <a
            href="/signup"
            className="mt-10 inline-block bg-black text-white font-bold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors duration-200"
          >
            Try Free
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;