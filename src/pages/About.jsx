import React from 'react';
import { BsPersonFill } from 'react-icons/bs';

// Import your images from the assets folder
import bgAbout from "../assets/business-office-with-blurred-people-casual-wear-with-blurred-bokeh-background-defocused-board-meeting-background-behind-glass-wall-blurred-office-with-people-working-behind-glass-wall-free-photo.jpg";
import afeez from "../assets/mac.jpg";
import muideen from "../assets/mui.jpg";
import hikmah from "../assets/hikmah.jpg";
import kazeem from "../assets/kaz.jpg";
import bolu from "../assets/bolu.jpg";
import mary from "../assets/mary.jpg";
import maleek from "../assets/maleek.jpg";
import adeola from "../assets/adeola.jpg";
import isreal from "../assets/isreal.jpg";
import ajayi from "../assets/john.jpg";

// Note: You provided more images than there are non-placeholder spots. 
// I've mapped them as logically as possible based on the design.

// --- Data for Team Members ---
// Using `null` for the image will render a placeholder avatar.
const teamData = [
  { name: 'Afeez Oyinloye Akinfola', role: 'CEO/FOUNDER', image: afeez },
  { name: 'Muideen Akinroye O.', role: 'Chief Technology Officer', image: muideen },
  { name: 'Kazeem Kolawole', role: 'Project Manager', image: kazeem },
  { name: 'Saidat Fatai', role: 'HR Manager', image: mary },
  { name: 'Maleek Asimiyu', role: 'Staff Engineer', image: maleek },
  { name: 'Adeola Adebayo', role: 'Frontend Developer', image: adeola },
  { name: 'Saheed Hikmah', role: 'Customer Support', image: hikmah },
  { name: 'Boluwaji Akinlosose', role: 'Head of Engineering', image: bolu },
  { name: 'Isreal Oyeboade', role: 'Backend Developer', image: isreal },
  { name: 'Ajayi Sunday', role: 'Ethical Hacker', image: ajayi },
];

// --- Reusable Team Member Card ---
const TeamMemberCard = ({ member }) => (
  <div className="text-center">
    {member.image ? (
      <img
        className="mx-auto h-24 w-24 rounded-full object-cover"
        src={member.image}
        alt={`Portrait of ${member.name}`}
      />
    ) : (
      <div className="mx-auto h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
        <BsPersonFill className="w-12 h-12 text-gray-400" />
      </div>
    )}
    <h3 className="mt-4 text-md font-bold text-gray-900">{member.name}</h3>
    <p className="text-sm text-gray-600">{member.role}</p>
  </div>
);

// --- Main About Component ---
const About = () => {
  return (
    <div className="bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* === Hero Section === */}
        <section className="text-center">
          <p className="text-sm font-semibold text-gray-600 tracking-wide">About MacTech</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-gray-900">
            We make CRM simple
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
MacTech O.A Nigeria Enterprises – Building Scalable Tech Products That Drive Real-World Impact

Since 2014, MacTech O.A Nigeria Enterprises has been on a mission to solve Africa’s systemic challenges through scalable, product-led digital solutions. Founded and led by Afeez Akinfola Oyinloye—a tech entrepreneur with global academic exposure from the University of East London and Sheffield Hallam University—MacTech has evolved from a local IT startup into a trusted innovation company powering mobility, civic systems, and enterprise growth across Nigeria.

Our flagship product, WakaForMe Ride, launched in 2021, is the first ride-hailing and logistics app in Osun State. It has revolutionized local transportation with real-time route optimization, digital payments, and driver onboarding systems that have empowered over 500 drivers and logistics riders. Its companion platform, WakaForMe Errands, enables SMEs and individuals to send and receive items affordably and reliably, with 20% improved delivery efficiency. These platforms collectively serve thousands of users and stand as proof of our ability to build high-impact, people-focused products.

We’ve also developed bespoke SaaS tools, cloud-based APIs, and enterprise web applications for over 300 clients across government, fintech, education, and the informal sector. MacTech is not just a service provider—we are product creators. Our in-house dashboards, biometric payroll systems (as implemented in Osun State, saving ₦750 million), and analytics-driven platforms help institutions reduce fraud, improve service delivery, and unlock new efficiencies.

At our core, we invest in building for scale and sustainability. Through the MacTech Tech Academy, we’ve trained more than 500 young Nigerians in product development, software engineering, and cloud services—ensuring a pipeline of talent that can power the next wave of African innovation.

Our technology stack spans AI, cloud computing, cybersecurity, mobility solutions, and API integrations, all built with a clear vision: to create scalable products that generate economic value and solve deep-rooted challenges.

With a founder who blends hands-on tech experience and business leadership, and a team grounded in user-focused design and agile delivery, MacTech O.A Nigeria Enterprises is more than a tech company—we are building Africa’s digital future, one product at a time.

Join us where innovation meets scale.
          </p>
          <div className="mt-10">
            <img className="rounded-lg shadow-md w-full" src={bgAbout} alt="Modern office interior" />
          </div>
        </section>

        {/* === Simplifying CRM Section === */}
        <section className="mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky top-8">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Simplifying CRM since 2014
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 text-base">
              <p>
                MacTech was launched following the founders’ frustration with existing CRM services that were either overly simplistic or far too complex for most businesses.
              </p>
              <p>
                We built MacTech to deliver on these values and today MacTech is used by thousands of businesses of all sizes all over the world.
              </p>
              <p>
                We're based in Osogbo, Nigeria, a city with a creative heart that was founded on science and industry and the birthplace of the modern computer.
              </p>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-xs text-gray-500">Headquarters</p>
              <p className="mt-1 font-semibold text-gray-800">Osogbo, Nigeria</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Established</p>
              <p className="mt-1 font-semibold text-gray-800">2009</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Team Members</p>
              <p className="mt-1 font-semibold text-gray-800">51</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Customers</p>
              <p className="mt-1 font-semibold text-gray-800">10,000+</p>
            </div>
          </div>
        </section>

        {/* === Values Section === */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center">
            We're driven by our values
            <span className="ml-4 h-px w-16 bg-gray-400"></span>
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-lg text-center">
              <p className="text-gray-700">We have integrity and give honest, constructive feedback</p>
            </div>
            <div className="bg-cyan-100 p-6 rounded-lg text-center">
              <p className="text-gray-700">We are open, welcoming and approachable</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg text-center">
              <p className="text-gray-700">We trust one another without the need for complex processes</p>
            </div>
          </div>
          <div className="mt-2 h-2 w-full bg-yellow-300 rounded-full"></div>
        </section>

        {/* === Team Section === */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Meet the people behind the product
          </h2>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-12">
            {teamData.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        {/* === CTA Section === */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Interested in joining our talented team?
          </h2>
          <a
            href="#"
            className="mt-6 inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Careers at MacTech
          </a>
        </section>

      </div>
    </div>
  );
};

export default About;