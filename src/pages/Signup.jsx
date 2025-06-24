


import React, { useState } from 'react';
import { BsPerson, BsGraphUp, BsPeople, BsCheck, BsQuestionCircle, BsArrowRight } from 'react-icons/bs';
import benefitImage from "../assets/transpond-callout-4667156f70c12c851432bdb798321a20.png";
import g2Images from "../assets/g2-three-badges.webp"; // For modal image

const plans = [
  {
    id: 'free',
    icon: BsPerson,
    title: 'Free',
    description: 'Ideal to trial how MacTech CRM helps you take control of your relationship management and admin.',
    price: { annual: 0, monthly: 0 },
    priceDetails: { annual: 'Free Forever.', monthly: 'Free Forever.' },
    userLimit: 'Maximum 2 users.',
    ctaText: 'Get started',
    featuresIntro: 'Free includes:',
    features: [
      { text: '250 Contacts' }, { text: '5 custom fields' }, { text: '1 Sales Pipeline' },
      { text: 'Activity Log' }, { text: 'Contact History' }, { text: 'Outlook & Gmail add-in' },
      { text: 'Mobile app access' }, { text: 'Upgrade to a paid plan anytime' },
    ],
  },
  {
    id: 'starter',
    icon: BsArrowRight,
    title: 'Starter',
    description: 'Perfect for businesses with one to five employees. Finally, get clarity and control over your business relationships and work delivered.',
    price: { annual: 28000, monthly: 21 },
    priceDetails: { annual: 'Billed Annually.', monthly: 'Billed Monthly.' },
    ctaText: 'Try Free',
    trialInfo: 'Free 14-day trial. No card required.',
    featuresIntro: 'Our Starter plan gives you:',
    features: [
      { text: '30,000 Contacts' }, { text: 'Email Templates', hasInfo: true },
      { text: 'AI-Powered Email Assistant', hasInfo: true }, { text: 'Shared Mailbox', hasInfo: true },
      { text: 'Basic Reporting' }, { text: 'Premium Integrations', hasInfo: true },
      { text: 'Goals', hasInfo: true },
    ],
  },
  {
    id: 'growth',
    icon: BsGraphUp,
    title: 'Growth',
    description: 'Best for small businesses with sales teams. Give your organization the firepower to prospect, sell, and deliver work — fast.',
    price: { annual: 56000, monthly: 42 },
    priceDetails: { annual: 'Billed Annually.', monthly: 'Billed Monthly.' },
    ctaText: 'Try Free',
    trialInfo: 'Free 14-day trial. No card required.',
    isPopular: true,
    featuresIntro: 'Everything in Starter, plus:',
    features: [
      { text: '60,000 Contacts' }, { text: 'Workflow Automations', hasInfo: true },
      { text: 'Advanced Sales Reporting', hasInfo: true }, { text: 'Reporting Dashboards', hasInfo: true },
      { text: 'Multiple Sales Pipelines' }, { text: 'Multiple Project Boards' },
      { text: 'Project Management', hasInfo: true }, { text: 'Team & Access Controls' },
      { text: 'Business Enrichment', hasInfo: true },
    ],
  },
  {
    id: 'advanced',
    icon: BsPeople,
    title: 'Advanced',
    description: 'For bigger sales teams, with more than one salesperson. Prospect faster, close quicker, and speed up growth.',
    price: { annual: 85000, monthly: 63 },
    priceDetails: { annual: 'Billed Annually.', monthly: 'Billed Monthly.' },
    ctaText: 'Try Free',
    trialInfo: 'Free 14-day trial. No card required.',
    featuresIntro: 'Everything in Growth, plus:',
    features: [
      { text: '120,000 Contacts' }, { text: 'Contact Enrichment', hasInfo: true },
      { text: '50 project boards' },
    ],
  },
];


const PricingPlanCard = ({ plan, isAnnual, onCtaClick }) => {
  const Icon = plan.icon;

  return (
    <div className={`relative flex flex-col p-8 mt-8 bg-white border rounded-lg shadow-sm ${plan.isPopular ? 'border-indigo-500' : 'border-gray-200'}`}>
      {plan.isPopular && (
        <div className="absolute top-0 right-8 -translate-y-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <div className="flex-grow">
        <div className="flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-lg">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="mt-6 text-xl font-semibold text-gray-900">{plan.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
        <div className="mt-6">
          <span className="text-4xl font-bold text-gray-900">
            &#8358;{isAnnual ? plan.price.annual : plan.price.monthly}
          </span>
          <span className="ml-1 text-sm text-gray-500">
            {plan.id !== 'free' && 'Per user, per month.'}
          </span>
        </div>
        <p className="mt-1 text-xs text-gray-500">{plan.userLimit || (isAnnual ? plan.priceDetails.annual : plan.priceDetails.monthly)}</p>
        {plan.id === 'free' && <p className="mt-1 text-xs text-gray-500">{isAnnual ? plan.priceDetails.annual : plan.priceDetails.monthly}</p>}

        <button
          onClick={onCtaClick}
          className={`mt-8 block w-full text-center rounded-lg px-6 py-3 text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700`}
        >
          {plan.ctaText}
        </button>

        {plan.trialInfo && <p className="mt-2 text-xs text-center text-gray-500">{plan.trialInfo}</p>}

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-600">{plan.featuresIntro}</p>
          <ul className="mt-4 space-y-3">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <BsCheck className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <span className="ml-3 text-sm text-gray-600">{feature.text}</span>
                {feature.hasInfo && <BsQuestionCircle className="ml-1 w-3 h-3 text-gray-400 flex-shrink-0 mt-1" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a href="#" className="mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-800">
        See all features
      </a>
    </div>
  );
};

const Signup = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
          {plans.map(plan => (
            <PricingPlanCard key={plan.id} plan={plan} isAnnual={isAnnual} onCtaClick={() => setShowModal(true)} />
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Select a plan that suits you
          </h2>
        </div>

        <div className="flex items-center justify-center mt-8 space-x-4">
          <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Pay Annually (Save up to 14%)
          </span>
          <label htmlFor="billing-toggle" className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" id="billing-toggle" className="sr-only peer" checked={!isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
          <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Pay Monthly
          </span>
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800">
            Compare all plan features <BsArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Enhance your plan with our add-ons
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Available to activate from within your MacTech account
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/2">
              <img className="h-full w-full object-cover" src={benefitImage} alt="Marketing automation workflow" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900">Marketing add-on</h3>
              <p className="mt-4 text-gray-600">
                Align your sales and marketing activities with our Marketing add-on. Deliver engaging email campaigns, view key contact information in one place and create powerful automations.
              </p>
              <div className="mt-8 flex items-center">
                <a href="#" className="px-6 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  Learn more
                </a>
                <div className="ml-6">
                  <p className="text-sm text-gray-600">Starting from</p>
                  <p className="text-2xl font-bold text-gray-900">$11 <span className="text-sm font-normal text-gray-500">per month</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg max-w-3xl w-full p-6 sm:p-10 relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 text-center md:text-left">
                  <p className="text-sm text-gray-600">Rated 4.7 on G2</p>
                  <p className="text-yellow-500">★★★★★</p>
                  <img src={g2Images} alt="G2 Badges" className="my-4 mx-auto md:mx-0" />
                  <blockquote className="text-sm text-gray-700 italic">
                    "Capsule perfectly fulfils our organization's needs with its simple interface, ease of use and customization"
                  </blockquote>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">Get started with our Free CRM</h2>
                  <p className="text-xs text-gray-400 mb-4">No card required</p>
                  <input type="email" placeholder="Your work email" className="w-full border px-4 py-2 rounded mb-4" />
                  <button className="w-full bg-indigo-600 text-white py-2 rounded mb-4 hover:bg-indigo-700">Get started</button>
                  <div className="text-center text-gray-400 mb-2">or</div>
                  <button className="w-full border py-2 rounded mb-2 flex items-center justify-center gap-2">
                    <img src="https://img.icons8.com/color/16/000000/microsoft.png" alt="Microsoft logo" /> Continue with Microsoft
                  </button>
                  <button className="w-full border py-2 rounded flex items-center justify-center gap-2">
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" /> Continue with Google Workspace
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;


