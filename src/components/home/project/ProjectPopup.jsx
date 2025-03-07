import React from "react";
import Badge from "./ColorMapping";

const ProjectPopup = ({ project, onClose }) => {
  return (
    <div className="fixed z-50 h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <button onClick={onClose} className="absolute right-6 md:right-28 lg:right-72 top-12 text-gray-600 hover:text-gray-900 bg-purple-300 px-3 rounded-md py-1">
        &times;
      </button>
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
        <h2 className="text-2xl font-bold mt-4">{project.title}</h2>
        <p className="text-gray-700 mt-2 mb-10">{project.description}</p>
        <div className="flex items-center justify-between">
        <p className="text-gray-600">Kategori: <Badge type="categoryProject" value={project.category} /></p>
        <p className="text-gray-600">Languange: <Badge type="language" value={project.language} /></p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 mt-2">Status: <Badge type="status" value={project.status} /></p>
          <p className="text-gray-600">{project.createdAt}</p>
        </div>
        <a
          href={project.previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-purple-300 text-white px-4 py-2 rounded hover:bg-purple-600 justify-center items-center flex w-full"
        >
          Preview
        </a>
      </div>
    </div>
  );
};

export default ProjectPopup;