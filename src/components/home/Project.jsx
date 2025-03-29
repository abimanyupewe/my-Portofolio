import React, { useState } from 'react';
import TabBar from "./project/TabBar";
import ProjectCard from "./project/ProjectCard";
import ProjectPopup from "./project/ProjectPopup";
import FilterCheckbox from "./project/FilterCheckbox";
import { dataProjects } from "../../assets/data/project/dataProject.js";
import Title from '../props/Title.jsx';
import LanguageFilter from './project/LanguageFilter.jsx';
import { assets } from '../../assets/assets.js';

const Project = () => {
  const [activeTab, setActiveTab] = useState("All Project");
  const [selectedProject, setSelectedProject] = useState(null);
  const [filters, setFilters] = useState([]);
  const [filtersLanguage, setFiltersLanguage] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Enhanced filtering function
  const filteredProjects = dataProjects.filter((project) => {
    // Filter by category tab
    if (activeTab !== "All Project") {
      if (Array.isArray(project.category)) {
        if (!project.category.includes(activeTab)) return false;
      } else if (project.category !== activeTab) {
        return false;
      }
    }

    // Filter by status (supports array of statuses in project)
    if (filters.length > 0) {
      // If project.status is array, check if any matches
      if (Array.isArray(project.status)) {
        if (!project.status.some(s => filters.includes(s))) return false;
      }
      // If project.status is string, check direct inclusion
      else if (!filters.includes(project.status)) {
        return false;
      }
    }

    // Filter by language (supports array or string languages in project)
    if (filtersLanguage.length > 0) {
      // If project.language is array, check if any matches
      if (Array.isArray(project.language)) {
        if (!project.language.some(lang => filtersLanguage.includes(lang))) return false;
      }
      // If project.language is string, check direct inclusion
      else if (!filtersLanguage.includes(project.language)) {
        return false;
      }
    }

    return true;
  });

  return (
    <section id='project' className='min-h-screen py-20 lg:py-36 mb-48 lg:mb-40'>
      <div className="flex justify-center flex-col items-center">
        <Title text1={"MY"} text2={"PROJECTS"} />
        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden bg-purple-400 text-white px-4 py-2 rounded-md mt-4 flex items-center gap-2"
        >
          {isSidebarOpen ? "Hide Filters" : "Show Filters"}
          <img src={assets.chevron_right} alt="" className={`w-4 h-4 transition-transform ${isSidebarOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}

      <div className="flex p-4 mt-10">
        {/* Sidebar */}
        <div
          className={`fixed md:static inset-y-0 left-0 w-64 bg-white p-4 space-y-4 overflow-y-auto transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 transition-transform duration-300 ease-in-out z-40 shadow-md md:shadow-none`}
        >
          <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
          <FilterCheckbox filters={filters} setFilters={setFilters} />
          <LanguageFilter
            filtersLanguage={filtersLanguage}
            setFiltersLanguage={setFiltersLanguage}
          />
        </div>

        {/* Main Content */}
        <div className="w-full h-[750px] overflow-y-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <p className="text-lg">No projects found</p>
              <p className="text-sm">Try adjusting your filters</p>
            </div>
          )}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectPopup
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Project;