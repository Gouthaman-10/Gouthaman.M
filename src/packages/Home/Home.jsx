import React from 'react'
import Profile from '../../assets/portfolio-home.jpg'
import { Link } from 'react-router'
import { RiArrowRightLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import './Home.css';

const Home = () => {
  return (
    <section className="home-container grid">
      <img src={Profile} alt="" className="home-img" />

      <div className="home-content">
        <h1 className="home-title">
          <span>I'm Gouthaman M</span> <br />Developer | Cloud
        </h1>

        <p className="home-description">
          I am a passionate Java Full Stack Developer and AWS Cloud Engineer skilled in Spring Boot, React.js, and MySQL.
          I focus on building scalable, secure, and high-performance web applications with seamless AWS Cloud integration,
          delivering efficient and user-focused digital solutions.
        </p>

        <div className="social">
          <a onClick={() => window.open('https://www.linkedin.com/in/gouthamanm', '_black')}><FaLinkedin /></a>
          <a onClick={() => window.open('https://wa.me/9500693300', '_black')}><IoLogoWhatsapp /></a>
          <a onClick={() => window.open('https://github.com/Gouthaman-10', '_black')}><FaGithub /></a>
        </div>
        
        <Link to='/about' className='button'>More About Me
          <span className="button-icon">
            <RiArrowRightLine />
          </span>
        </Link>

      </div>

      <div className="color-block">

      </div>
    </section>
  )
}

export default Home
