import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Marta, 14",
    role: "Game Dev Track",
    text: "Було дуже захопливо! Зробила свою першу гру за тиждень і не могла зупинитися.",
    avatar: "/images/ava-1.jpg"
  },
  {
    id: 2,
    name: "Oleh, 16",
    role: "AI & ML Track",
    text: "Ментори — вогонь. Реальні проєкти й корисний фідбек. Додав до портфоліо.",
    avatar: "/images/ava-2.jpg"
  },
  {
    id: 3,
    name: "Anna, 12",
    role: "Robotics Track",
    text: "Нарешті зрозуміла електроніку. Дуже сподобались командні челенджі!",
    avatar: "/images/ava-3.jpg"
  },
  {
    id: 4,
    name: "Daniel, 15",
    role: "Full-Stack Track",
    text: "З нуля до працюючого сайту. Крута структура і підтримка після курсу.",
    avatar: "/images/ava-4.jpg"
  }
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
          const d = deltaIndex(i, index, n); // -2..2
          // позиційні стилі для трьох головних станів
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
                <img className="avatar" src={t.avatar} alt={t.name} />
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
