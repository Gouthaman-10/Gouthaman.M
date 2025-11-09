import React from 'react'
import { projects, skill } from '../../Data'
import { RiLink } from "react-icons/ri";
import './Projects.css';

const Projects = () => {
  return (
    <section className="project section">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="project-container container grid">
        {projects.map(({ id, img, title, description, skills, tag, link }) => {
          return (
            <article className='project-card' key={id} >
              <a href={link} className="project-img-wrapper">
                <img src={img} alt="" className="project-img" />
              </a>

              <h3 className="project-title">{title}</h3>
              <p className="project-description">{description}</p>

              <div className="project-tool">
                <div className="project-skills">
                  {skills.map((skill, index) => {
                    return (
                      <img src={skill} alt="" className="project-skill" key={index} />
                    )
                  })}
                </div>

                <span className="project-tag">{tag}</span>
              </div>
              <a href={link} className="project-link">
                <RiLink className='link-icon' />
                View Project
              </a>
            </article>
          );
        })}
      </div>
    </section>

  )
}

export default Projects
