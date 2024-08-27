"use client";
import React, { useEffect, useRef } from "react";
import { projectsData } from "../../../lib/resume";

import { motion, useInView } from "framer-motion";
import SingleProject from "../../../components/SingleProject";

const Project = ({ params }: { params: { projectsId: string } }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const projectId = +params.projectsId;

  const project = filterProjectById(projectId);

  function filterProjectById(projectId: number) {

    const filteredProject = projectsData.filter(
      (project) => project.id === projectId
    );
   

    if (filteredProject.length === 0) {
      console.log("Project with ID", projectId, "not found.");
      return null;
    }
    return filteredProject[0];
  }



  return (
    <div ref={ref}>
      {project ? (
        <motion.li
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3 }}
        >
          <SingleProject
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        </motion.li>
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
};

export default Project;
