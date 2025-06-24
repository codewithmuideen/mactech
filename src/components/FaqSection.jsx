// src/components/FaqSection.jsx

import React, { useState } from 'react';

// You can fetch this data from an API or define it as a constant
const faqData = [
  {
    question: 'What is a CRM?',
    answer: 'CRM stands for Customer Relationship Management. It\'s a technology for managing all your company’s relationships and interactions with customers and potential customers. The goal is simple: Improve business relationships.'
  },
  {
    question: 'What does a CRM system do?',
    answer: 'A CRM system helps companies stay connected to customers, streamline processes, and improve profitability. It gathers customer data from different channels, like your website, email, and social media, into one central location.'
  },
  {
    question: 'How can MacTech CRM help your business?',
    answer: 'MacTech CRM is designed to be simple to use yet powerful. It helps you build stronger customer relationships, make more sales, and save time by organizing your contacts, sales pipeline, and tasks all in one place.'
  },
  {
    question: 'Why do you need an online CRM system?',
    answer: 'An online CRM (or cloud-based CRM) gives you access to your customer data from anywhere, on any device. It ensures your data is always up-to-date for your entire team, facilitates collaboration, and is typically more scalable and cost-effective.'
  },
  {
    question: 'What makes MacTech CRM different from other CRM solutions?',
    answer: 'MacTech focuses on simplicity and ease of use without sacrificing powerful features. It integrates seamlessly with popular business apps, offers predictable pricing, and provides excellent customer support to help you get the most out of it.'
  },
  {
    question: 'Who can benefit from simple CRM software?',
    answer: 'Small to medium-sized businesses, startups, freelancers, and sales teams in larger organizations can all benefit. If you need to manage customer interactions, track leads, and organize your sales process without a steep learning curve, a simple CRM is for you.'
  }
];

// Reusable accordion item component
const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75 rounded"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <span className="text-2xl text-indigo-500 transform transition-transform duration-300">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};


// Main FAQ Section component
const FaqSection = () => {
  // State to track the currently open FAQ item
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    // If the clicked item is already open, close it. Otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-3">
          {/* Left Column: Title */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Right Column: FAQ List */}
          <div className="lg:col-span-2">
            <div className="space-y-1">
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;