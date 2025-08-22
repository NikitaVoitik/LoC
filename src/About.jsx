import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}     // старт: нижче та прозорий
        whileInView={{ opacity: 1, y: 0 }} // коли видно: на місці й видно
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}           // анімація тільки 1 раз
      >
        <h2>What We Offer</h2>
        <p>
          Discover the art of programming, game development, 
          algorithms, and math with our expert guidance. 
          We are dedicated to nurturing young talents and inspiring 
          future innovators.
        </p>
      </motion.div>
    </section>
  );
}
