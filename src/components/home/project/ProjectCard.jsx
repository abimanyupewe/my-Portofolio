import React from "react";
import Badge from "./ColorMapping";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        {/* Badge untuk categoryProject */}
        <Badge type="categoryProject" value={project.category} />
        {/* Badge untuk language */}
        <Badge type="language" value={project.language} />
        {/* Badge untuk status */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Status <Badge type="status" value={project.status} /></p>
          <p className="text-sm text-gray-600">{project.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;