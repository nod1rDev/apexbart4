import { useParams } from "react-router-dom";
import { GithubIcon, Globe, Calendar, Users, Layers, Code } from "lucide-react";
import { projects } from "../../../utils";
import Headerr from "../../../Components/Header2";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#f9f4e8] text-[#1f1f1f]">
      <Headerr />
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
          <div className="flex flex-wrap gap-4 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-[#1f1f1f]/5 text-[#1f1f1f] border border-[#1f1f1f]/10"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-6">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1f1f1f] text-[#f9f4e8] hover:bg-[#1f1f1f]/80 transition-colors"
            >
              <Globe className="w-5 h-5" />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1f1f1f]/10 text-[#1f1f1f] hover:bg-[#1f1f1f]/20 transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
              Source Code
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-[#1f1f1f]/70 whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-md"
                  >
                    <img
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.team.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#1f1f1f]/5"
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-[#1f1f1f]/70">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="sticky top-8">
              <div className="mb-8">
                <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                  <Layers className="w-5 h-5" />
                  Features
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-[#1f1f1f]/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1f1f1f]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                  <Code className="w-5 h-5" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-[#1f1f1f]/5 text-[#1f1f1f] text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
                  <Calendar className="w-5 h-5" />
                  Timeline
                </h3>
                <div className="space-y-4">
                  {project.timeline.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 text-[#1f1f1f]/70"
                    >
                      <div className="w-24 flex-shrink-0 text-sm">
                        {event.date}
                      </div>
                      <div className="flex-1 pb-4 border-b border-[#1f1f1f]/10">
                        {event.milestone}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
