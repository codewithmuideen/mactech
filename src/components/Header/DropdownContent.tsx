import React from 'react';
import images from '../../constants/images'; // Make sure all image keys below are defined in this file

const IconTextItem = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-2 text-sm text-brand-dark">
    <img src={icon} alt={text} className="w-5 h-5" />
    {text}
  </div>
);

export const ProductDropdown = () => (
  <div className="w-screen max-w-6xl p-8 text-sm" style={{marginLeft:'1%'}}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {[
        ["Contact Management", "Centralize all your customer data"],
        ["Email Marketing & Tools", "Send campaigns that get results"],
        ["Tasks & Calendar", "Get more done"],
        ["Sales Pipeline", "Stay on top of opportunities"],
        ["Sales Analytics", "Make more informed decisions"],
        ["Projects", "Manage every project"],
        ["Workflow Automation", "Reduce manual work"],
        ["AI Content Assistant", "Quickly respond to emails"],
        ["Collaboration", "Connect your team"],
      ].map(([title, desc], i) => (
        <div key={i} className="min-w-[200px] break-words" style={{ marginLeft: '6%' }}>
          <h3 className="font-semibold text-brand-dark mb-1 text-base leading-snug">{title}</h3>
          <p className="text-brand-gray-text">{desc}</p>
        </div>
      ))}
    </div>

    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-4">
      <h4 className="font-bold text-brand-dark mb-2">✨ Switch to MacTech Nigeria</h4>
      <p className="text-brand-gray-text mb-4">
        We make it easy to get started, with a variety of ways to bring your data into MacTech Nigeria.{' '}
        <a href="#" className="text-brand-blue font-semibold">Learn more.</a>
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 text-xs text-gray-600">
        {[
          { name: "HubSpot", icon: images.hubspot },
          { name: "Salesforce", icon: images.salesforce },
          { name: "Pipedrive", icon: images.pipeline },
          { name: "Copper", icon: images.copper },
        ].map(({ name, icon }, i) => (
          <IconTextItem key={i} icon={icon} text={name} />
        ))}
      </div>
    </div>

    <div className="flex gap-6 justify-center font-medium text-brand-dark">
      <a href="#" className="hover:text-brand-blue">All features</a>
      <a href="#" className="hover:text-brand-blue">Security & Permissions</a>
      <a href="#" className="hover:text-brand-blue">Customization</a>
    </div>
  </div>
);

export const IntegrationsDropdown = () => {
  const integrations = [
    { name: "QuickBooks", icon: images.quickbooks },
    { name: "Gmail", icon: images.gmail },
    { name: "Transpond", icon: images.transpond },
    { name: "Outlook", icon: images.outlook },
    { name: "Xero", icon: images.xero },
    { name: "Zapier", icon: images.zapier },
    { name: "FreshBooks", icon: images.freshbooks },
    { name: "Slack", icon: images.slack },
    { name: "FreeAgent", icon: images.freeagent },
    { name: "WhatsApp", icon: images.whatsapp },
    { name: "Google", icon: images.google },
    { name: "Microsoft", icon: images.microsoft }
  ];

  return (
    <div className="w-screen max-w-4xl p-8 text-sm">
      <h3 className="font-semibold text-brand-dark mb-4">Popular Integrations</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
        {integrations.map(({ name, icon }, i) => (
          <IconTextItem key={i} icon={icon} text={name} />
        ))}
      </div>
      <hr style={{ marginBottom: '14px' }} />
      <div className="flex justify-center gap-6 font-medium">
        <a href="#" className="text-brand-blue hover:underline">API for Developers</a>
        <a href="#" className="text-brand-blue hover:underline">Technology Partners</a>
      </div>
    </div>
  );
};

export const UseCasesDropdown = () => (
  <div className="w-screen max-w-5xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10 text-sm">
    <div>
      <h3 className="font-bold mb-4 text-brand-dark">Business Types</h3>
      <ul className="space-y-2 text-brand-gray-text">
        <li>Small Business</li>
        <li>Mid-Size Business</li>
        <li>Growth Business</li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold mb-4 text-brand-dark">Industries</h3>
      <ul className="grid grid-cols-2 gap-2 text-brand-gray-text">
        {[
          "Professional Services", "Hotels & Hospitality", "IT & Technology", "Manufacturers",
          "Travel & Tourism", "Real Estate", "Construction", "Architects",
          "Schools", "Accountants", "Recruitment", "Legal"
        ].map((industry, i) => (
          <li key={i}>{industry}</li>
        ))}
      </ul>
    </div>
  </div>
);

export const ResourcesDropdown = () => (
  <div className="w-screen max-w-4xl p-8 grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
    {[
      "Support Docs", "Product Webinars", "Video Tutorials", "Capsule Blog",
      "Customer Stories", "Partner Program", "What is a CRM?", "The Podcast"
    ].map((item, i) => (
      <a key={i} href="#" className="text-brand-gray-text hover:text-brand-blue">
        {item}
      </a>
    ))}
    <div className="col-span-full text-center mt-6">
      <a href="#" className="text-brand-blue font-medium">Partner Directory</a>
    </div>
  </div>
);

export const LanguageDropdown = () => (
  <div className="w-48 p-2 text-sm">
    {["English", "Español", "Français", "Português (Brasil)"].map((lang, i) => (
      <a
        key={i}
        href="#"
        className="block px-4 py-2 text-brand-dark rounded-md hover:bg-gray-100"
      >
        {lang}
      </a>
    ))}
  </div>
);
