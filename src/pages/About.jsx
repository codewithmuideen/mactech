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
        <section>
          <p className="text-sm font-semibold tracking-wide text-gray-600 text-center">
            About MacTech
          </p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl text-center">
            MacTech O.A Nigeria Enterprises
          </h1>

          {/* — Copy — */}
          <div className="mt-6 space-y-4 text-lg text-left text-gray-600 [&>p]:max-w-3xl [&>p]:mx-auto">
            <p>
              <strong>MacTech O.A Nigeria Enterprises</strong> builds scalable tech
              products that create real-world impact. Since 2014 we have tackled
              Africa’s systemic challenges with product-led digital solutions.
            </p>
            <p>
              Founded by <em>Afeez Akinfola Oyinloye</em>—a tech entrepreneur with
              degrees from the University of East London and Sheffield Hallam
              University—MacTech has grown from a local start-up into a trusted
              innovation partner powering mobility, civic systems, and enterprise
              growth nationwide.
            </p>
            <p>
              Our flagship <strong>WakaForMe Ride</strong> (2021) is Osun State’s
              first ride-hailing & logistics app, empowering <span className="font-semibold">500+ </span>
              drivers with real-time route optimisation and digital payments.
              Companion platform <strong>WakaForMe Errands</strong> boosts delivery
              efficiency by <span className="font-semibold">20 %</span> for SMEs and individuals.
            </p>
            <p>
              We’ve also shipped bespoke SaaS tools, cloud APIs, and enterprise
              web apps for <span className="font-semibold">300+ </span> clients across government,
              fintech, education, and the informal sector—saving Osun State
              ₦750 million through our biometric payroll system alone.
            </p>
            <p>
              Through the <strong>MacTech Tech Academy</strong>, we’ve trained
              <span className="font-semibold"> 500+ </span> young Nigerians in software engineering,
              product development, and cloud services—fueling Africa’s next
              generation of tech talent.
            </p>
            <p>
              Our stack—AI, cloud computing, cybersecurity, mobility, and
              API integrations—is built for scale and sustainability. Together
              we are shaping Africa’s digital future, one product at a time.
            </p>
            <p className="font-semibold">
              Join us where innovation meets scale.
            </p>
          </div>

          <div className="mt-10">
            <img
              src={bgAbout}
              alt="Modern office interior"
              className="w-full rounded-lg shadow-md"
            />
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