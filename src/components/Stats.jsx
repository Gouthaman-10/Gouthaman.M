import React from 'react'
import { stats } from '../Data'
import parse from 'html-react-parser';

const Stats = () => {
  return (
    <>
      {stats.map(({no, title, link, links}, index) =>{
        return(
            <div className="stats-box" key={index}>
                <h3 className="stats-no">{no}</h3>
                <p className="stats-title">{parse(title)}</p>
                <a className='stats-link' href={links}>{link}</a>
            </div>
        )
      })}
    </>
  )
}

export default Stats
