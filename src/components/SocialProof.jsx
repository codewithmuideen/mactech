import React from 'react';
import images from './../constants/images';

const SocialProof = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-24">

          {/* Top Block */}
          <div className="flex flex-col items-center w-full text-center">
            <p className="text-lg text-brand-gray-text sm:text-left sm:w-auto w-full">
              Trusted by 40,000+ customers since 2009
            </p>
            <img
              src={images.g2AwardsComposite}
              alt="G2 awards badges for Grid Leader, Regional Leader, and High Performer"
              className="mt-10 w-full sm:w-1/2 max-w-full h-auto"
            />
          </div>

          {/* Bottom Block */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark tracking-tight">
              Your business in one place
            </h2>
            <p className="mt-4 text-xl text-brand-gray-text">
              (and not everywhere else)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProof;
