import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const textStyle = {
    fontSize: '23px',
    color: 'white',
  };

  const head = {
    fontSize: '23px',
    color: 'lightgreen',
    textDecoration: 'underline',
  }
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    color: 'white',
    fontSize: '23px',
  };

  const thTdStyle = {
    border: '1px solid white',
    padding: '10px',
    textAlign: 'center',
    backgroundColor: 'transparent',
    
  };
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={0}
            />
          </h1>
          <div >
            <p style={textStyle}>Hey, I am <span className="highlight">Manoj Kumar V</span>. I am from Karur pursuing a B.E. degree in Information Science and Engineering at Bannari Amman Institute of Technology.</p>
            <p style={head}>Education:</p>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thTdStyle}>Qualification</th>
                  <th style={thTdStyle}>Score</th>
                  <th style={thTdStyle}>Passing Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={thTdStyle}>B.E. - Bannari Amman Institute of Technology</td>
                  <td style={thTdStyle}>8.42</td>
                  <td style={thTdStyle}>2024</td>
                </tr>
                <tr>
                  <td style={thTdStyle}>12th Grade - Cheran Matric High Sec School</td>
                  <td style={thTdStyle}>92.546%</td>
                  <td style={thTdStyle}>2020</td>
                </tr>
                <tr>
                  <td style={thTdStyle}>10th Grade - Cheran Matric High Sec School</td>
                  <td style={thTdStyle}>90.04%</td>
                  <td style={thTdStyle}>2018</td>
                </tr>
              </tbody>
            </table>
            {/* <p style={textStyle}><span className="highlight">12th Grade - Cheran Matric High Sec School</span>             : 92.546%</p>
            <p style={textStyle}><span className="highlight">10th Grade - Cheran Matric High Sec School</span>             : 90.04%</p> */}
            <p style={head}>I am proficient in:</p>
          </div>
          <ul className="skills-list">
            <li>OOPs</li>
            <li>DBMS</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>MERN</li>
          </ul>
          <p style={head}>Explore My Projects:</p>
          <a href="https://manoj2403.github.io/Bus-Transport/" target='_blank' className="flat-button1">
            Bus Transport
          </a>
          <a href="https://github.com/Manoj2403/charity-BIT" target='_blank' className="flat-button1">
            Charity Donation
          </a>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="ball-clip-rotate-pulse" />
    </>
  )
}

export default About
