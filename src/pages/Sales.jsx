import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/solid';
import images from '../constants/images';

// Optional StarIcon
const StarIcon = ({ className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className={className}>
    <path d="M10.868 2.884c.321-.662 1.134-.662 1.456 0l1.494 3.085a1 1 0 00.95.69h3.24c.731 0 1.04.939.503 1.353l-2.617 1.9a1 1 0 00-.364 1.118l.995 3.58a1 1 0 00-1.451 1.054L11.21 13.9a1 1 0 00-1.175 0l-2.91 2.12a1 1 0 00-1.45-1.054l.994-3.58a1 1 0 00-.363-1.118l-2.617-1.9c-.537-.414-.228-1.353.503-1.353h3.24a1 1 0 00.95-.69L10.868 2.884z" />
  </svg>
);

const Sales = () => {
  const listItems = [
    'Schedule a demo with a member of our team (min. 5 users)',
    'Discover which plan is best for your business',
    'Explore use cases based on your industry',
  ];

  return (
    <div className="bg-[#627ABE] text-white min-h-screen pt-20 pb-12 px-4 lg:px-16" style={{marginTop:'5%'}}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Sales</h1>
          <p className="text-lg text-gray-300">
            Get in touch with our friendly team today to learn more about how Capsule can benefit your business.
            We're happy to answer your questions.
          </p>

          <ul className="space-y-4">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckIcon className="w-6 h-6 text-green-400 mt-1" />
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-400">
            Alternatively, check out our{' '}
            <Link to="/platform-tour" className="underline hover:text-white">platform tour</Link> or visit our{' '}
            <Link to="/support" className="underline hover:text-white">support docs</Link>.
          </p>

          <div className="bg-indigo-900/50 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
                         10-4.48 10-10S17.52 2 12 2zm0 
                         18c-4.41 0-8-3.59-8-8s3.59-8 
                         8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">4.7 rating</span>
            </div>
            <div className="relative h-12 w-full">
              <img
                src={images.g2AwardsComposite}
                alt="Customer rating"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div>
            <Link to="/product-tour" className="text-lg font-semibold hover:underline">
              Join the next Product Tour →
            </Link>
            <p className="text-gray-400 mt-2">
              We host regular product webinars where you can get a real-time overview of Capsule, ask questions or just listen in.
            </p>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input type="text" id="name" name="name" required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email Address <span className="text-red-500">*</span>
              </label>
              <input type="email" id="email" name="email" required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div>
              <label htmlFor="job-title" className="block text-sm font-medium text-gray-700 mb-1">
                Your Job Title
              </label>
              <input type="text" id="job-title" name="job-title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="users" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of users
                </label>
                <select id="users" name="users"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>1-4</option>
                  <option>5-10</option>
                  <option>11-50</option>
                  <option>51+</option>
                </select>
              </div>
              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                  Region
                </label>
                <select id="region" name="region"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>North America</option>
                  <option>Europe</option>
                  <option>Asia</option>
                  <option>South America</option>
                  <option>Australia/Oceania</option>
                  <option>Africa</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Is there anything specific you would like to discuss?
              </label>
              <textarea id="message" name="message" rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            </div>

            <div>
              <button type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-full hover:bg-indigo-700 transition duration-300">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sales;
