import React from 'react';

const FreeTrialBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#5C7CC2] to-[#C3628C] font-sans">
      <div className="container mx-auto max-w-7xl px-6 py-3">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
          
          {/* Main message */}
          <p className="text-base leading-6 text-white sm:text-lg">
            <strong>Try MacTech free for 14-days. Pay later.</strong>
          </p>

          {/* Call-to-action button */}
          <a
            href="/signup"
            className="flex-none rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-200"
          >
            Try Free
          </a>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialBanner;
