import React, { useEffect } from "react";
import { ArrowRight, Check, Star } from "lucide-react";
import Footer from "../../Components/Footer";
import Headerr from "../../Components/Header2";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";

const AICompanyHistory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#f9f4e8] text-[#1f1f1f]">
      <Headerr />
      <Header />

      <main className="   py-8 max-w-[90%] mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-red-600">Our</span> Company Story
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <p className="mb-4">
                Founded in 2010, AI Innovations Inc. has been at the forefront
                of artificial intelligence research and development for over a
                decade. Our journey began with a small team of visionary
                computer scientists and has grown into a global leader in AI
                solutions.
              </p>
              <p className="mb-4">
                From our humble beginnings in a small garage office, we've
                expanded to multiple research centers across the globe,
                collaborating with top universities and industry partners to
                push the boundaries of what's possible with AI.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="/building.jpg"
                alt="AI Innovations Inc. Headquarters"
                className="w-full h-auto md:h-[450px] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-red-600">Key</span> Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { year: 2010, event: "Company founded" },
              { year: 2013, event: "First AI product launch" },
              { year: 2015, event: "Expansion to Europe" },
              {
                year: 2018,
                event: "Major breakthrough in natural language processing",
              },
              { year: 2020, event: "Launch of AI Ethics Board" },
              { year: 2023, event: "Reached 1000 employees globally" },
            ].map((milestone, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <p className="text-xl font-bold">{milestone.year}</p>
                <p>{milestone.event}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-red-600">Our</span> Innovations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="/AI-powered robotics.jpg"
                alt="AI-powered robotics"
                className="w-full h-auto md:h-[450px] rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">
                AI-Powered Robotics
              </h3>
              <p>
                Our cutting-edge robotics systems use advanced AI algorithms to
                perform complex tasks with unprecedented precision and
                efficiency.
              </p>
            </div>
            <div>
              <img
                src="/Natural Language Processing.jpg"
                alt="Natural Language Processing"
                className="w-full h-auto md:h-[450px] rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">
                Natural Language Processing
              </h3>
              <p>
                Our NLP technology has revolutionized human-computer
                interaction, enabling more natural and intuitive communication
                between people and machines.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-red-600">Our</span> Impact
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ul className="space-y-4">
              {[
                "Improved healthcare diagnostics accuracy by 40%",
                "Reduced energy consumption in smart cities by 30%",
                "Enhanced crop yields for sustainable agriculture by 25%",
                "Accelerated drug discovery processes by 60%",
              ].map((impact, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-green-500 mr-2" />
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">
            Join Us in Shaping the Future
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">
              At AI Innovations Inc., we're always looking for brilliant minds
              to join our team. Whether you're a seasoned AI researcher, a
              talented software engineer, or a visionary product manager, we
              have a place for you.
            </p>
            <Link to={"/contact"}>
              <button className="bg-[#1f1f1f] text-white py-2 px-4 rounded-lg flex items-center hover:bg-opacity-80 transition-colors">
                Explore Careers
                <ArrowRight className="ml-2" size={16} />
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AICompanyHistory;
