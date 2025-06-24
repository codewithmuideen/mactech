import React from 'react';

// 1. Import your images
import images from './../constants/images';

// 2. Import icons
import { FaMailchimp } from 'react-icons/fa';
import { SiZendesk, SiMedium } from 'react-icons/si';
import { TbPower } from 'react-icons/tb';
import { IoDocumentsOutline } from 'react-icons/io5';
import { FiRefreshCw } from 'react-icons/fi';
import { BsCodeSlash, BsDiamond } from 'react-icons/bs';
import { HiOutlineBell } from 'react-icons/hi';
import { CgSync } from 'react-icons/cg';

// --- Data for the integrations ---
const featuredIntegrations = [
  { logo: images.quickbooks, name: 'QuickBooks' },
  { logo: images.zapier, name: 'Zapier' },
  { logo: images.slack, name: 'Slack' },
  { logo: images.whatsapp, name: 'WhatsApp' },
  { logo: images.google, name: 'Google' },
  { logo: images.transpond, name: 'Transpond' },
  { logo: images.microsoft, name: 'Microsoft' },
  { logo: images.sage, name: 'Sage' },
  { logo: images.freeagent, name: 'FreeAgent' },
  { logo: images.xero, name: 'Xero' },
];

const otherIntegrations = [
  { icon: <span className="font-bold text-xl">F</span>, name: 'FreshBooks' },
  { icon: <TbPower size={24} />, name: 'Toggl' },
  { icon: <IoDocumentsOutline size={24} />, name: 'Documents' },
  { icon: <FaMailchimp size={24} />, name: 'Mailchimp' },
  { icon: <CgSync size={24} />, name: 'Sync' },
  { icon: <SiMedium size={24} />, name: 'Medium' },
  { icon: <FiRefreshCw size={24} />, name: 'Refresh' },
  { icon: <BsCodeSlash size={24} />, name: 'API' },
  { icon: <span className="text-sm font-semibold">osano</span>, name: 'Osano' },
  { icon: <HiOutlineBell size={24} />, name: 'Notifications' },
  { icon: <SiZendesk size={24} />, name: 'Zendesk' },
  { icon: <BsDiamond size={22} />, name: 'Diamond' },
  { icon: <span className="text-xs font-semibold">Quotient</span>, name: 'Quotient' },
];

const IntegrationCard = ({ logo, name }) => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
    <img src={logo} alt={`${name} logo`} className="w-10 h-10 object-contain" />
    <span className="font-medium text-gray-800">{name}</span>
  </div>
);

const IconCard = ({ icon, name }) => (
  <div
    title={name}
    className="flex items-center justify-center w-14 h-14 bg-gray-100 rounded-xl text-gray-400 cursor-pointer transition-colors hover:bg-gray-200 hover:text-gray-600"
  >
    {icon}
  </div>
);

const Integrations = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Your tools. Your way. Your MacTech
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
          MacTech's powerful integrations work seamlessly with your existing tech. We also support
          Zapier, Make, and others, so you can create bespoke integrations, just for your niche use
          case.
        </p>

        {/* Featured Integrations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mt-12">
          {featuredIntegrations.map((integration) => (
            <IntegrationCard key={integration.name} {...integration} />
          ))}
        </div>

        {/* Other Integrations */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-6xl mx-auto mt-8">
          {otherIntegrations.map((item, index) => (
            <IconCard key={index} icon={item.icon} name={item.name} />
          ))}
        </div>

        {/* Browse Button */}
        <div className="mt-12">
          <button className="bg-gray-900 text-white font-semibold py-4 px-8 rounded-full transition-transform hover:scale-105">
            Browse over 70 integrations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
