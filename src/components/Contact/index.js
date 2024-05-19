import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_YeJhZkgb',
        form.current,
        'your-token'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          // alert('Failed to send the message, please try again')
          console.log("Failed")
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e',]}
              idx={15}
            />
          </h1>

          <div>

          </div>
        </div>


        <div className="info-map">
          Manoj Kumar V,
          <br />
          Bannari Amman Institute of Technology,
          <br />
          Sathyamangalam,
          <br />
          Erode, 638402, <br />
          Tamil Nadu, India <br />
          <br />
          <span>manojvelusamy24@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[11.496851, 77.2772504]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[11.496851, 77.2772504]}>
              <Popup>Manoj lives here, come over for a best exprience:</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className="contact-details">
        <p>Email: <a href="mailto:manojvelusamy24@gmail.com" className="contact-link">manojvelusamy24@gmail.com</a></p>
        <p>Mobile: <a href="tel:+91 8754253549" className="contact-link">+91 8754253549</a></p>
        {/* <p>Feel free to reach out to me for any web development projects or collaboration opportunities!</p> */}
      </div>
      <Loader type="ball-clip-rotate-pulse" />
    </>
  )
}

export default Contact
