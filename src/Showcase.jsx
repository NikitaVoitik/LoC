import React from "react";
import { motion } from "framer-motion";

const cards = [
  { id: 1, title: "Game Dev", img: "/images/robot.jpg", color: "#E0F2FE" },
  { id: 2, title: "Algorithms", img: "/images/game.jpg", color: "#FDE68A" },
  { id: 3, title: "Math",  img: "/images/ai.jpg",   color: "#FBCFE8" },
];

const containerStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

const fromLeft = {
  hidden: { opacity: 0, y: 20, x: -40 },
  show:   { opacity: 1, y: 0,  x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fromRight = {
  hidden: { opacity: 0, y: 20, x: 60 },
  show:   { opacity: 1, y: 0,  x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Showcase() {
  return (
    <section className="showcase" id="showcase">
      <div className="showcase-grid">
        {/* Ліва колонка — текст випливає знизу/зліва */}
        <motion.div
          className="showcase-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fromLeft}
        >
          <p className="eyebrow">What we do</p>
          <h2>Hands-on projects that kids love</h2>
          <p className="muted">
            Discover the art of programming, game development, algorithms, 
            and math with our expert guidance. We are dedicated to nurturing 
            young talents and inspiring future innovators.
          </p>
          <a className="btn btn-primary" href="#enroll">Join the program</a>
        </motion.div>

        {/* Права колонка — картки з’являються справа, по черзі */}
        <motion.div
          className="showcase-right"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerStagger}
        >
          {cards.map(card => (
            <motion.article key={card.id} className="showcase-card" variants={fromRight}>
              <div className="card-color" style={{ background: card.color }} />
              <img src={card.img} alt={card.title} className="card-img" />
              <h3>{card.title}</h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
