import React from 'react';
import { FaUsers, FaNetworkWired } from 'react-icons/fa';
import { IoCodeSlashOutline, IoBriefcaseOutline } from 'react-icons/io5';
import { BsArrowRight, BsCheckCircleFill } from 'react-icons/bs';
import headerImage from "../assets/header-image.webp";
import benefitImage from "../assets/benefits.webp";

// Partner Types Data
const partnerTypes = [
  {
    icon: <FaUsers />,
    title: 'Affiliate Partner',
    description: 'Content creators, SaaS reviewers, business advisors who use content to reach their audiences and want to recommend MacTech and Transpond to earn commission.',
    links: [{ text: 'Become an affiliate', href: '/affiliate' }],
  },
  {
    icon: <IoCodeSlashOutline />,
    title: 'Technology Partner',
    description: 'Integrate with MacTech and Transpond as an official Technology Partner and promote it via our marketplace for increased exposure.',
    links: [
      { text: 'Learn more', href: '/partners/technology' },
      { text: 'App Marketplace', href: '/marketplace' },
    ],
  },
  {
    icon: <IoBriefcaseOutline />,
    title: 'Solution Provider',
    description: 'Consultants, systems integrators, business advisors, accountants and CRM specialists who want to recommend MacTech and Transpond on a 1-2-1 basis as part of their client solutions.',
    links: [
      { text: 'Learn more', href: '/partners/solution' },
      { text: 'Partner Directory', href: '/directory' },
    ],
  },
  {
    icon: <FaNetworkWired />,
    title: 'SMB Partner',
    description: 'Networks, organisations or membership bodies that provide advice and services to startups and SMBs, with an audience of over 10,000 and want to offer exclusive deals to their members.',
    links: [{ text: 'Learn more', href: '/partners/smb' }],
  },
];

// Benefit Data
const benefitsData = [
  {
    title: 'Earn up to 30% lifetime commissions',
    description: 'Generous recurring commissions for every paying customer you refer, for as long as they stay with us.',
  },
  {
    title: 'Recommend trusted, easy-to-use solutions',
    description: 'MacTech CRM and Transpond are built to be intuitive, powerful, and flexible, making them easy for your clients to implement and benefit from.',
  },
  {
    title: 'Access ready-made promotional resources',
    description: 'Get started quickly with our Affiliate Starter Pack, implementation plans, feature guides, social media templates, product comparisons and more.',
  },
  {
    title: 'Dedicated support',
    description: 'Our Partnerships team is here to help you activate, grow, and maximise your earnings at every stage of your journey with us.',
  },
  {
    title: 'Expand your offering without extra complexity',
    description: 'MacTech CRM and Transpond fit perfectly alongside the other solutions you promote.',
  },
];

// Reusable Partner Card
const PartnerCard = ({ icon, title, description, links }) => (
  <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 hover:shadow-lg transition">
    <div className="bg-indigo-100 text-indigo-600 w-12 h-12 flex items-center justify-center rounded-full mb-6">
      {React.cloneElement(icon, { className: 'w-6 h-6' })}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <div className="mt-6 flex flex-wrap gap-4">
      {links.map(link => (
        <a key={link.href} href={link.href} className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center gap-1 group">
          {link.text}
          <BsArrowRight className="transition-transform group-hover:translate-x-1" />
        </a>
      ))}
    </div>
  </div>
);

// Reusable Benefit List Item
const BenefitListItem = ({ title, description }) => (
  <div className="flex items-start gap-4">
    <BsCheckCircleFill className="w-5 h-5 text-indigo-500 mt-1" />
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Partners = () => {
  return (
    <div className="bg-white font-sans">
      {/* Sub Navigation */}
      <div className="bg-indigo-600 py-3 px-4 text-sm text-white" style={{marginTop:'10%'}}>
        <div className="flex flex-wrap gap-x-4 overflow-x-auto">
          <a href="/partners" className="font-bold text-white">Partner Program</a>
          <span className="text-white/30">|</span>
          <a href="/partners/affiliate" className="hover:text-white">Affiliate Partner</a>
          <a href="/partners/solution" className="hover:text-white">Solution Provider</a>
          <a href="/partners/technology" className="hover:text-white">Technology Partner</a>
          <a href="/partners/smb" className="hover:text-white">SMB Partner</a>
          <a href="/partners/terms" className="hover:text-white">Terms & Conditions</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
          The MacTech and Transpond Partner Program
        </h1>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a href="#choose" className="bg-indigo-600 text-white py-2 px-5 rounded-full hover:bg-indigo-700">
            Choose a program
          </a>
          <a href="/login" className="bg-black text-white py-2 px-5 rounded-full hover:bg-indigo-700">
           Partner log in
          </a>
          {/* <a href="/login" className="text-gray-700 font-semibold hover:text-indigo-600">
            Partner log in
          </a> */}
        </div>
        <div className="mt-10 max-w-5xl mx-auto">
  <img
    src={headerImage}
    alt="Team collaborating in a modern office"
    className="rounded-lg shadow-xl w-full max-h-[400px] object-cover"
  />
</div>

      </section>

      {/* Intro Section (Fixed Layout) */}
      <section className="py-16 bg-slate-50 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
          The MacTech and Transpond Partner Program
        </h1>
          </div>
          <div>
            <p className="text-gray-600 text-lg">
              If you’re looking for an easy-to-use CRM and marketing solution to recommend to your clients, audience or network — while building a reliable revenue stream, the MacTech and Transpond Partner Program is the right fit for you.
            </p>
            <p className="mt-4 text-gray-600 text-lg">
              We’ve designed the program to be simple to join, easy to promote and rewarding for you in the long term.
            </p>
            <p className="mt-4 text-gray-600 text-lg">
              Whether you’re an affiliate marketer, a consultant, a technology vendor, or an SMB network, there’s a path that fits you — with dedicated support and resources to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-16 px-4" id='choose'>
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Who is the Partner Program for?</h2>
          <p className="text-lg text-gray-600 mt-4">
            We offer different partnership types depending on your business model and goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {partnerTypes.map((partner) => (
            <PartnerCard key={partner.title} {...partner} />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={benefitImage}
              alt="Diverse team in a meeting"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why partner with MacTech and Transpond?</h2>
            <div className="space-y-6">
              {benefitsData.map((benefit) => (
                <BenefitListItem key={benefit.title} {...benefit} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-600 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <h2 className="text-2xl text-white font-semibold">
            Ready to get started? Join today and start building your revenue stream
          </h2>
          <a href="/partners/join" className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors">
            Become a partner
          </a>
        </div>
      </section>
    </div>
  );
};

export default Partners;
