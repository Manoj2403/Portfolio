import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['M', 'A', 'N', 'O', 'J', ' ', 'K', 'U', 'M', 'A', 'R',' ','V']
  const jobArray = [
    // 'w',
    // 'e',
    // 'b',
    // ' ',
    // 'd',
    // 'e',
    // 'v',
    // 'e',
    // 'l',
    // 'o',
    // 'p',
    // 'e',
    // 'r',
    // '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 1000)
  }, [])

  const textStyle={
    color: 'lightblue',
    fontSize: '23px',
  }
  const btnStyle={
    color: 'white',
    fontSize: '23px',

  }

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _13`}> </span>
            <span className={`${letterClass} _14`}>a</span>
            <span className={`${letterClass} _13`}>m</span>
            <span className={`${letterClass} _13`}> </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1 >
          <div>
            <h2  style={textStyle}>Information Science Engineer</h2>
            <p  style={textStyle}>Seeking Job opportunities in your esteemed organization to work in a dynamic and challenging environment and achieve professional growth while being enthusiastic, innovative and flexible, eager to contribute to the growth of the organization with a strong commitment to achieve organization goals.</p>
            <a  style={btnStyle} href="https://flowcv.com/resume/7ws4ip5oia" target='_blank' className="flat-button">
              RESUME
            </a>
          </div>
          <Link  style={btnStyle} to="/about" className="flat-button1">
            Go to Projects
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="ball-clip-rotate-pulse" />
    </>
  )
}

export default Home
