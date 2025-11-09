import React from 'react'
import Info from "../../components/Info";
import { RiDownload2Line } from "react-icons/ri";
import Cv from '../../pdf/Gouthaman.pdf';
import Stats from '../../components/Stats';
import { skill } from '../../Data';
import SkillsItem from '../../components/SkillsItem';
import { resume } from '../../Data';
import ResumeItem from '../../components/ResumeItem';
import './About.css';

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title">About <span>Me</span></h2>

        <div className="about-container grid">
          <div className="about-info">
            <h3 className="section-subtitle">Personal Infos</h3>

            <ul className="info-list grid">
              <Info />
            </ul>

            <a href={Cv} className="button">
              Download CV

              <span className="button-icon">
                <RiDownload2Line />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills" id='skills'>
        <h3 className="section-subtitle subtitle-center">My Skills</h3>

        <div className="skills-container grid">
          <div className="skills-group">
            <h3 className="skills-title">Front-End Tech</h3>

            <div className="skills-items grid">
              {skill.map((val) => {
                if (val.category === 'frontend') {
                  return <SkillsItem key={val.id} {...val} />
                }
              })}
            </div>
          </div>

          <div className="skills-group">
            <h3 className="skills-title">Back-End Tech</h3>

            <div className="skills-items grid">
              {skill.map((val) => {
                if (val.category === 'backend') {
                  return <SkillsItem key={val.id} {...val} />
                }
              })}
            </div>
          </div>

          <div className="skills-group">
            <h3 className="skills-title">Cloud | Database </h3>

            <div className="skills-items grid">
              {skill.map((val) => {
                if (val.category === 'ad') {
                  return <SkillsItem key={val.id} {...val} />
                }
              })}
            </div>
          </div>

          <div className="skills-group">
            <h3 className="skills-title">Testing | Others </h3>

            <div className="skills-items grid">
              {skill.map((val) => {
                if (val.category === 'tool') {
                  return <SkillsItem key={val.id} {...val} />
                }
              })}
            </div>
          </div>

        </div>
      </section>

      <div className="separator"></div>

      <section className="resume" id='resume'>
        <h3 className="section-subtitle subtitle-center">
          Internship & Education
        </h3>

        <div className="resume-container grid">
          <div className="resume-group grid">
            {resume.map((val) => {
              if (val.category === 'INTERNSHIP') {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>

          <div className="resume-group grid">
            {resume.map((val) => {
              if (val.category === 'education') {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
