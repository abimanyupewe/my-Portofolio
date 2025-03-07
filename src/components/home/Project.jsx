import React, { useState } from 'react';
import TabBar from "./project/TabBar";
import ProjectCard from "./project/ProjectCard";
import ProjectPopup from "./project/ProjectPopup";
import FilterCheckbox from "./project/FilterCheckbox";
import { dataProjects } from "../../assets/data/project/dataProject.js";
import Title from '../props/Title.jsx';
import LanguageFilter from './project/LanguageFilter.jsx';
// import { assets } from '../../assets/assets.js';

const Project = () => {
  const [activeTab, setActiveTab] = useState("All Project");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filters, setFilters] = useState([]);
  const [filtersLanguage, setFiltersLanguage] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State untuk toggle sidebar

  // Fungsi filter project
  const filteredProjects = dataProjects.filter((project) => {
    if (activeTab !== "All Project" && project.category !== activeTab) return false;
    if (filters.length > 0 && !filters.includes(project.status)) return false;
    if (filtersLanguage.length > 0 && !filtersLanguage.includes(project.language)) return false;
    return true;
  });

  return (
    <section id='project' className='h-screen py-20 lg:py-36 mb-48 lg:mb-40'>
      <div className="flex justify-center flex-col items-center">
        <Title text1={"MY"} text2={"PROJECTS"} />
        {/* Tombol Toggle untuk Mobile */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden bg-purple-300 text-white px-4 py-2 rounded-sm shadow-lg mt-4 flex items-center justify-end gap-2"
        >
          {isSidebarOpen ? "Hide Filters" : "Show Filters"}
          {/* <img
            className={`h-3 transition-transform duration-300 ${isSidebarOpen ? "rotate-180" : ""}`}
            src={assets.dropdown_icon} // Pastikan path ini valid
            alt="Dropdown Icon"
          /> */}
        </button>
      </div>

      {/* Overlay untuk Mobile */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}

      <div className="flex p-4 mt-10">
        {/* Sidebar */}
        <div
          className={`fixed md:static inset-y-0 left-0 w-64 bg-white p-4 space-y-4 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
        >
          {/* TabBar */}
          <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* FilterCheckbox */}
          <p>Filters</p>
          <FilterCheckbox filters={filters} setFilters={setFilters} />

          {/* LanguageFilter */}
          <LanguageFilter filtersLanguage={filtersLanguage} setFiltersLanguage={setFiltersLanguage} />
        </div>

        {/* Main Content */}
        <div className="w-full h-[650px] overflow-y-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Menampilkan proyek yang sudah difilter */}
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectPopup project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
  );
};

export default Project;