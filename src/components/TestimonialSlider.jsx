// src/components/TestimonialSlider.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ✅ Replace SiG2 with a valid icon
import { SiGmail } from 'react-icons/si'; 
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FiExternalLink, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const testimonialsData = [
  {
    title: "A great, effortless CRM, the best I've ever used...",
    quote: "\"I've used MacTech for eight years (and continue to do so). I've used many different CRMs in my career and the main reason I love MacTech, and recommend it to others, is that it's not over-complicated and pretty effortless to use - it is used constantly in our business.\"",
    author: "Matt C",
    role: "G2 Reviewer"
  },
  {
    title: "The perfect tool for small businesses.",
    quote: "\"MacTech is intuitive, easy to set up, and a joy to use. The integration with third-party apps like Mailchimp and Xero is seamless and saves us a huge amount of time. It's the central hub of our business operations.\"",
    author: "Sarah L",
    role: "Agency Owner"
  },
  {
    title: "Changed the way we handle sales.",
    quote: "\"The sales pipeline feature alone is worth the price. We have a clear overview of every deal, can forecast accurately, and nothing falls through the cracks anymore. It's a game-changer.\"",
    author: "David P",
    role: "Sales Director"
  },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="bg-brand-gray-light py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <SiGmail className="text-red-500 text-2xl" />
              <div className="flex items-center gap-1 text-red-500">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              </div>
              <p className="text-sm text-brand-gray-text">4.7 rating <span className="text-gray-300 mx-1">|</span> 300+ reviews</p>
            </div>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
              Our customers.
              <br />
              Their words; not ours.
            </h2>
            
            <a href="#" className="mt-8 inline-flex items-center gap-2 self-start bg-gray-100 hover:bg-gray-200 transition-colors px-6 py-3 rounded-full font-semibold text-brand-dark">
              <span>View all G2 reviews</span>
              <FiExternalLink />
            </a>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex flex-col justify-between min-h-[300px] border-t lg:border-t-0 lg:border-l border-gray-200 lg:pl-12 pt-8 lg:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <h3 className="text-xl font-semibold text-brand-dark">{testimonialsData[activeIndex].title}</h3>
                <p className="mt-4 text-brand-gray-text leading-relaxed">{testimonialsData[activeIndex].quote}</p>
                <p className="mt-6 font-semibold text-brand-dark">{testimonialsData[activeIndex].author}</p>
                <p className="text-sm text-brand-gray-text">{testimonialsData[activeIndex].role}</p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-3 self-end mt-8">
              <button onClick={handlePrev} className="bg-gray-200 hover:bg-gray-300 text-brand-dark rounded-full p-3 transition-colors" aria-label="Previous testimonial">
                <FiArrowLeft />
              </button>
              <button onClick={handleNext} className="bg-gray-200 hover:bg-gray-300 text-brand-dark rounded-full p-3 transition-colors" aria-label="Next testimonial">
                <FiArrowRight />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
