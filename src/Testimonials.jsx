import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Alex, 13",
    text: "Alex began our private classes with a keen interest in studying math, despite struggling with his school-level understanding of the subject. Over the course of the year, not only has his enthusiasm for math grown, but he has also started delving into various other facets of the subject through our guidance",
  },
  {
    id: 2,
    name: "Innokentiy, 17",
    text: "Innokentiy switched to private tutoring and began to grow rapidly in Codeforce  — a competitive coding community. He is now one of the top competitive programmers in Spain and in the process of getting into the top world universities.",
  },
  {
    id: 3,
    name: "Lily, 12",
    text: "Lily started her journey with Leagues of Code Summer Camp. She later on switched to group classes then eventually 1-on-1 classes. And with the help of our teachers, she’s grown fast and is making her own games on the web!",
  },
  {
    id: 4,
    name: "Anna - Parent",
    text: "I’m very happy that my daughter who studies Python at your academy. She liked it and decided to enter a programming class at her school next year. She finds it useful, interesting and it can help her to find a job in Norway in the future; this is her dream. She also liked the teacher Nikolai.",
  },

  {
    id: 5,
    name: "Susana - Teacher & Parent",
    text: "As a Math and IT teacher I'm often disappointed with the standard school curriculum, but I was very positively surprised to finally find an excellent program. Great teachers and excellent challenging materials will definitely motivate students. Thank you for the great job you're doing. I will surely recommend it to my students.",
  },

  {
    id: 6,
    name: "Zoya - Parent",
    text: "Our son was very excited to learn so many interesting things. I noticed that as the youngest, he was encouraged to speak up and express his opinion and I highly appreciate it. I like the platform for the daily assignments and that he received instant feedback. Henri’s professor has a high professional level and the ability to create a positive and inspiring atmosphere.",
  },
  {
    id: 7,
    name: "Irma - Parent",
    text: "It's good that Leagues of Code appeared exactly when my son was interested in programming. Here he found his mentor to communicate with. He has also made new friends. Leagues of Code gives children an opportunity to learn from the best, and also learn from each other. Working in a team. To compete. To win. As a parent, it's amazing how programming can be better than Minecraft or Fortnite",
  },
  
];

/** обчислюємо найкоротшу кругову відстань між i та current */
function deltaIndex(i, current, n) {
  let d = (i - current) % n;
  if (d < -n / 2) d += n;
  if (d >  n / 2) d -= n;
  return d; // ...,-2,-1,0,1,2,...
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const n = testimonials.length;

  const next = useCallback(() => setIndex(i => (i + 1) % n), [n]);
  const prev = useCallback(() => setIndex(i => (i - 1 + n) % n), [n]);

  // для доступності клавішами ← →
  const onKey = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft")  prev();
  };

  return (
    <section className="testimonials" id="testimonials" onKeyDown={onKey} tabIndex={0}>
      <div className="testi-head">
        <h2>What Students Say</h2>
        <div className="testi-controls">
          <button className="nav-btn" onClick={prev} aria-label="Previous">←</button>
          <button className="nav-btn" onClick={next} aria-label="Next">→</button>
        </div>
      </div>

      <div className="stage">
        {testimonials.map((t, i) => {
          const d = deltaIndex(i, index, n); 
          let x = 0, scale = 1, rotate = 0, z = 3, opacity = 1, pointer = "auto";
          if (d === 0) {
            x = 0; scale = 1; rotate = 0; z = 30; opacity = 1;
          } else if (d === -1) {
            x = "-32%"; scale = 0.92; rotate = -4; z = 20; opacity = 0.8;
          } else if (d === 1) {
            x = "32%"; scale = 0.92; rotate = 4; z = 20; opacity = 0.8;
          } else {
            // інші ховаємо (але залишаємо у DOM для плавного переходу)
            x = d < 0 ? "-70%" : "70%";
            scale = 0.85; rotate = d < 0 ? -6 : 6; z = 10; opacity = 0;
            pointer = "none";
          }

          return (
            <motion.article
              key={t.id}
              className="card"
              style={{ zIndex: z, pointerEvents: pointer }}
              initial={{ opacity: 0, scale: 0.96, x: 0 }}
              animate={{ x, scale, rotate, opacity }}
              transition={{ type: "spring", stiffness: 160, damping: 20 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -80) next();
                else if (info.offset.x > 80) prev();
              }}
            >
              <header className="card-top">
                {/* <img className="avatar" src={t.avatar} alt={t.name} /> */}
                <div>
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </header>
              <p className="quote">“{t.text}”</p>
            </motion.article>
          );
        })}
      </div>

      <div className="dots">
        {Array.from({ length: n }, (_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "is-active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
