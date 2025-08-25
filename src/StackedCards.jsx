import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    eyebrow: "Experience by Doing",
    title: "Enjoyable and Interactive Learning",
    text: "Our unique one-on-one teaching style with our awesome instructors and platform provide your child with the best chance of successful learning.",
    color: "#FADDE1",
    img: "/pexels-julia-m-cameron-4143800.jpg"
  },
  {
    id: 2,
    eyebrow: "Uniquely Yours",
    title: "Customised Learning Path",
    text: "No matter the case, if the goals are set up by you (the parent) or the child, we take care of all the assessments and planning to help you achieve them.",
    color: "#F6E7C1",
    img: "/pexels-julia-m-cameron-4145074.jpg"
  },
  {
    id: 3,
    eyebrow: "Track Consistently",
    title: "You're in control of your child’s progress",
    text: "We help you track your kids progress so that you can feel confident that your child is getting the best education possible.",
    color: "#E3F2FD",
    img: "/pexels-julia-m-cameron-4145354.jpg"
  }
];

export default function StackedCards() {
  return (
    <section className="stack" id="stack">
      {items.map((it, i) => (
        <div className="stack-row" key={it.id} style={{ "--i": i }}>
          <motion.article
            className="stack-card"
            style={{ "--card-bg": it.color }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4, once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="stack-text">
              <p className="eyebrow">{it.eyebrow}</p>
              <h3>{it.title}</h3>
              <p className="muted">{it.text}</p>
            </div>
            <div className="stack-media">
              <img src={it.img} alt={it.title} />
            </div>
          </motion.article>
        </div>
      ))}
    </section>
  );
}
