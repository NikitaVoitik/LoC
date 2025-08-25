import React from 'react'

function Container({ children }) {
  return <div className="container">{children}</div>
}

function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/0822.mov" type="video/mp4" />
        Ваш браузер не підтримує відео.
      </video>

      <div className="hero-content">
        <Container>
          <div className="hero-copy">
            <h1>A tech adventure for aspiring young innovators</h1>
            <div className="cta-row">
            <a
              className="btn btn-primary"
              href="https://harbour-space.typeform.com/to/qaVsoIqp?typeform-source=join.leaguesofcode.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              book a free lesson
            </a>              
            {/* <a className="btn btn-outline" href="#info">Request info</a> */}
            </div>
            
          </div>
        </Container>
      </div>
    </section>
  )
}


function Highlights() {
  const items = [
    { title: 'Learn by building', desc: 'Project-based sessions guided by experienced instructors.' },
    { title: 'Beginner → Advanced', desc: 'Tracks for all levels: from first steps to competition prep.' },
    { title: 'Global community', desc: 'Collaborate with peers from around the world.' },
  ]
  return (
    <section className="section">
      <Container>
        <div className="cards">
          {items.map((i, idx) => (
            <article className="card" key={idx}>
              <h3>{i.title}</h3>
              <p>{i.desc}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Tracks() {
  const tracks = [
    { name: 'Game Dev', note: 'Make your first playable game.', level: 'Beginner' },
    { name: 'Python', note: 'Automate and analyze data.', level: 'Beginner/Intermediate' },
    { name: 'Web Development', note: 'Build and deploy a site.', level: 'Intermediate' },
    { name: 'Competitive Programming', note: 'Sharpen problem‑solving.', level: 'Advanced' },
  ]
  return (
    <section id="tracks" className="section section-alt">
      <Container>
        <div className="section-head">
          <h2>Tracks</h2>
          <a className="link" href="#enroll">See curriculum</a>
        </div>
        <div className="grid-4">
          {tracks.map((t, idx) => (
            <article className="card" key={idx}>
              <div className="thumb" />
              <h3>{t.name}</h3>
              <p className="muted">{t.level}</p>
              <p>{t.note}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Schedule() {
  const rows = [
    { day: 'Mon', topics: 'Intro, tooling, team setup' },
    { day: 'Tue', topics: 'Core concepts & first project' },
    { day: 'Wed', topics: 'Iterate & add features' },
    { day: 'Thu', topics: 'Testing & polish' },
    { day: 'Fri', topics: 'Demo day & feedback' },
  ]
  return (
    <section id="schedule" className="section">
      <Container>
        <h2>Schedule (sample)</h2>
        <div className="table">
          <div className="table-row head">
            <div>Day</div>
            <div>Topics</div>
          </div>
          {rows.map((r, i) => (
            <div className="table-row" key={i}>
              <div className="cell-compact">{r.day}</div>
              <div>{r.topics}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function CTA() {
  return (
    <section id="enroll" className="cta">
      <Container>
        <div className="cta-grid">
          <div>
            <h2>Ready to join?</h2>
            <p className="muted">Reserve your spot and receive the full info pack via email.</p>
          </div>
          <a
            className="btn btn-primary"
            href="https://harbour-space.typeform.com/to/qaVsoIqp?typeform-source=join.leaguesofcode.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ placeSelf: 'center' }}   // или justifySelf: 'center'
          >
            book a free lesson
          </a>
        </div>
      </Container>
    </section>
  )
}

function FAQ() {
  const faqs = [
    { q: 'What ages can join?', a: 'Typically 8–18; adjust to your policy.' },
    { q: 'What are the prerequisites?', a: 'Tracks for all levels, from beginner to advanced.' },
    { q: 'Is it online or on‑site?', a: 'Replace with your actual delivery mode and timezone.' },
  ]
  return (
    <section id="faq" className="section">
      <Container>
        <h2>FAQ</h2>
        <div className="grid-2">
          {faqs.map((f, i) => (
            <article className="card" key={i}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer contact-cta">
      <Container>
        <div className="contact-grid">
          <div className="contact-copy">
            <h2 className="contact-kicker">How can we help?</h2>
            <h3 className="contact-headline">Contact us anytime</h3>
          </div>

          <div className="contact-card" role="complementary" aria-label="Contact options">
            <div className="contact-item">
              <span className="label">Send us a message</span>
              <a className="value" href="mailto:hello@leaguesofcode.com">hello@leaguesofcode.com</a>
            </div>

            <span className="divider" aria-hidden="true"></span>

            <div className="contact-item">
              <span className="label">Call us</span>
              <a className="value" href="tel:+34671498303">+34 671 498 303</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

import About from './About.jsx'
import Showcase from './Showcase.jsx'
import StackedCards from './StackedCards.jsx'
import Testimonials from './Testimonials.jsx'

export default function App() {
  return (
    <main>
      <Hero />
      <Showcase />
      <StackedCards />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
      
    </main>
  )
}
