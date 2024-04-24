import React from 'react';
import { motion } from 'framer-motion';
const contentS = {
    titleS: {
        S1: "Avec Sadeem réaliser vos idées n'a jamais été aussi simple!",
        S2: " Nos Projects",
        S3: "Nos Dernières Réalisations",
      },}
const ProjectCard = (className) => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      imageUrl: '/project1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat, justo at convallis mattis, felis nulla hendrerit lectus, non aliquam odio risus in turpis.'
    },
    {
      id: 2,
      title: 'Project 2',
      imageUrl: '/project2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat, justo at convallis mattis, felis nulla hendrerit lectus, non aliquam odio risus in turpis.'
    },
    {
        id: 3,
        title: 'Project 2',
        imageUrl: '/project2.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat, justo at convallis mattis, felis nulla hendrerit lectus, non aliquam odio risus in turpis.'
      },
  ];

  return (

    <section className={`${className}`}>
    <div className="container px-4 mx-auto">
      <div className="lg:flex justify-center mb-20 lg:mb-36">
        <div className="w-full lg:w-8/12 lg:flex gap-0 items-center">
          <div className="lg:w-7/12 mb-5 lg:mb-0 mt-4">
            {contentS.titleS.S2 && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
                viewport={{ once: true }}
                className="uppercase tracking-[3px] text-[15px] mb-5 text-sm inline-block text-gray-500"
              >
                {contentS.titleS.S2}
              </motion.span>
            )}
            {contentS.titleS.S1 && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }}
                viewport={{ once: true }}
                className="text-2xl lg:text-4xl"
              >
                {contentS.titleS.S1}
              </motion.h2>
            )}
          </div>
          <div className="lg:w-5/12 self-end">
            {contentS.titleS.S3 && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }}
                viewport={{ once: true }}
                className="text-gray-500"
              >
                {contentS.titleS.S3}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mb-14">
      {projects.map(project => (
        <div key={project.id} className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-56 object-cover object-center" src={project.imageUrl} alt={project.title} />
          <div className="p-4">
            <h2 className="text-gray-800 font-bold text-xl mb-2">{project.title}</h2>
            <p className="text-gray-700 text-base">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default ProjectCard;
