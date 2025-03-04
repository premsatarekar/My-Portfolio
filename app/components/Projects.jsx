import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 min-h-screen py-20">
      <h1 className="text-4xl font-bold mb-4">🚀 My Projects</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-md">
        I’ve built some amazing projects, but they aren't hosted yet.  
        Meanwhile, you can explore my work on GitHub!  
      </p>
      <a
        href="https://github.com/premsatarekar"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-semibold text-lg"
      >
        <FaGithub className="text-2xl" /> Check My GitHub
      </a>
    </div>
  );
};

export default Projects;
