import React from 'react'
import parse from 'html-react-parser'

const ResumeItem = ({icon, year, title, loc, date, desc}) => {
  return (
    <div className='resume-item'>
      <div className="resume-icon">{[icon]}</div>

      <span className="resume-date">{year}</span>
      <h3 className="resume-subtitle">{parse(title)}</h3>
      <h3 className="resume-location">{parse(loc)}</h3>
      <h3 className="resume-time">{parse(date)}</h3>
      <h3 className="resume-description">{parse(desc)}</h3>
    </div>
  )
}

export default ResumeItem
