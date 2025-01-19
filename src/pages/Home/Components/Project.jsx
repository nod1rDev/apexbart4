import { GithubIcon, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../../utils";
import { motion } from "framer-motion";
function ProjectShowCase() {
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.prod.website-files.com/6427c6c769d01c2f58037956/6429745b66cfe6b77f861dbe_Line%206.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
      }}
      className="min-h-screen mt-[70px] bg-[#1f1f1f] "
    >
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-seaction mb-4 text-[#f9f4e8] ">
            <span className="text-red-500">Our</span> Projects
          </h1>
          <p className="text-zinc-400 text-xl font-italian max-w-2xl mx-auto">
            Discover our latest work and innovative solutions that push the
            boundaries of modern web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project) => (
            <Link to={"/project/" + project.id}>
              <div
               
                key={project.id}
                className="group cursor-pointer relative bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700/50 backdrop-blur-sm hover:border-zinc-500/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-zinc-700/50 text-zinc-300"
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
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link to={"/projects"}>
          <button className="bg-[#c21717] mt-[40px] mx-auto hover:bg-[#e63b3b] transition-all duration-700 rounded-full text-[18px] flex justify-center items-center text-[#f9f4e8]   py-[20px] px-[45px] font-[500]">
            View All Projects
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectShowCase;
