import { useState } from "react";

import { projects } from "../../utils";
import Headerr from "../../Components/Header2";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { ProjectCard } from "./Components/ProjectCard";

export function ProjectList() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <>
      <div className="min-h-screen bg-[#f9f4e8] text-[#1f1f1f] ">
        <Headerr />
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-[3rem] font-bold mb-4"><span className="text-red-600">Our</span> Projects</h1>
            <p className="text-[#1f1f1f]/70 max-w-2xl mx-auto">
              Discover our latest work and innovative solutions that push the
              boundaries of modern web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="flex justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-[#1f1f1f] text-[#f9f4e8] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1f1f1f]/80 transition-colors"
            >
              Previous
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => {
                  const diff = Math.abs(page - currentPage);
                  return (
                    diff === 0 ||
                    diff === 1 ||
                    page === 1 ||
                    page === totalPages
                  );
                })
                .map((page, i, arr) => (
                  <div key={page}>
                    {i > 0 && arr[i - 1] !== page - 1 && (
                      <span className="px-2">...</span>
                    )}
                    <button
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg ${
                        currentPage === page
                          ? "bg-[#1f1f1f] text-[#f9f4e8]"
                          : "bg-[#1f1f1f]/10 text-[#1f1f1f] hover:bg-[#1f1f1f]/20"
                      } transition-colors`}
                    >
                      {page}
                    </button>
                  </div>
                ))}
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-[#1f1f1f] text-[#f9f4e8] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#1f1f1f]/80 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
