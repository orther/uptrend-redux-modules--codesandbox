import React from 'react'
import ReactParticles from 'react-particles-js'
import {Link} from 'react-router-dom'
import pt from 'prop-types'

import '../styles.css'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/roster">Roster</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
      </ul>
    </nav>
  </header>
)

function Particles({children}) {
  return (
    <div style={{position: 'relative'}}>
      <ReactParticles
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: false,
                value_area: 600,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000',
              },
            },
            opacity: {
              value: 0.2,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 10,
              direction: 'left',
              random: true,
              straight: true,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false,
                mode: 'grab',
              },
              onclick: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      />
      {children && <div style={{position: 'relative'}}>{children}</div>}
    </div>
  )
}

Particles.propTypes = {
  children: pt.node,
}

function Chrome({children}) {
  return (
    <div className="main">
      <Particles>
        <div className="container">
          <Header />
          {children}
        </div>
      </Particles>
    </div>
  )
}

Chrome.propTypes = {
  children: pt.node,
}

export default Chrome
