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
            We believe the value of a modern CRM lies in the ability to help businesses stay organized, know more about their customers, build strong relationships and to make the most of sales opportunities, all while minimizing user input.
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
                Simplifying CRM since 2009
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 text-base">
              <p>
                Capsule was launched following the founders’ frustration with existing CRM services that were either overly simplistic or far too complex for most businesses.
              </p>
              <p>
                We built Capsule to deliver on these values and today Capsule is used by thousands of businesses of all sizes all over the world.
              </p>
              <p>
                We're based in Manchester, United Kingdom, a city with a creative heart that was founded on science and industry and the birthplace of the modern computer.
              </p>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-xs text-gray-500">Headquarters</p>
              <p className="mt-1 font-semibold text-gray-800">Manchester, UK</p>
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