import React, { useEffect } from "react";
import {
  Users,
  Brain,
  Award,
  Rocket,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Footer from "../../Components/Footer";
import Headerr from "../../Components/Header2";
import Header from "../../Components/Header";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "AI Research Lead",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      description:
        "Ph.D. in Machine Learning with 8+ years of experience in developing AI solutions.",
    },
    {
      name: "David Chen",
      role: "Senior Data Scientist",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      description: "Expert in neural networks and deep learning architectures.",
    },
    {
      name: "Emily Rodriguez",
      role: "AI Ethics Officer",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
      description:
        "Specializes in ethical AI development and responsible innovation.",
    },
    {
      name: "Michael Kim",
      role: "ML Engineer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
      description: "Expert in deploying large-scale machine learning systems.",
    },
  ];

  const achievements = [
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: "Innovation Excellence",
      description: "Pioneer in developing cutting-edge AI solutions",
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Industry Recognition",
      description: "Multiple awards for AI breakthroughs",
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-600" />,
      title: "Rapid Growth",
      description: "Successfully deployed 100+ AI projects",
    },
  ];

  return (
    <div className="bg-[#f9f4e8] text-[#1f1f1f]">
      <Headerr />
      <Header />
      {/* Hero Section */}
      <div className="relative mt-6 md:mt-0 h-screen overflow-hidden">
        <img
          src="/teamBack.avif"
          alt="AI Technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4"><span className="text-red-600">Our</span> AI Experts</h1>
            <p className="text-xl">
              Meet the minds behind our innovative AI solutions
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Leading the Future of  <span className="text-red-600">AI</span></h2>
          <p className="text-xl max-w-3xl mx-auto">
            Our team of dedicated AI professionals combines cutting-edge
            technology with human expertise to create solutions that transform
            industries and improve lives.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <h2 className="text-4xl font-bold text-center mb-12">Meet <span className="text-red-600">Our</span> Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-inhiret py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12"><span className="text-red-600">Get</span> in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-3" />
              <span>contact@aicompany.com</span>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-3" />
              <span>123 AI Street, Tech City</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
