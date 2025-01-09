import { GithubIcon, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export function ProjectCard({ project }) {
  return (
    <div className="group relative bg-[#f9f4e8] rounded-xl overflow-hidden border border-[#1f1f1f]/10 hover:border-[#1f1f1f]/30 transition-all duration-300 shadow-md hover:shadow-xl">
      <Link to={`/project/${project.id}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-6">
        <Link to={`/project/${project.id}`}>
          <h3 className="text-xl font-semibold mb-2 text-[#1f1f1f] hover:text-[#1f1f1f]/70 transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-[#1f1f1f]/70 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-[#1f1f1f]/5 text-[#1f1f1f]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#1f1f1f]/70 hover:text-[#1f1f1f] transition-colors"
          >
            <Globe className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#1f1f1f]/70 hover:text-[#1f1f1f] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
