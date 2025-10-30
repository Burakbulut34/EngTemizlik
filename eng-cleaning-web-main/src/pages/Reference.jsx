import React from "react";
import { motion } from "framer-motion";
import "../styles/reference.css";

import ref1 from "../assets/reference/asis-company-img.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const References = ({ withHelmet = false }) => {
  const references = [
    { name: "asis elektronik ve bilişim sistemleri a.ş.", image: ref1, link: "https://asiselektronik.com.tr/tr/" },
  ];

  return (
    <section className="references-section">
      <div className="references-container">
        <h1 className="references-title">Referanslar</h1>

        <div className="references-grid">
          {references.map((ref, i) => (
            <motion.a
              key={i}
              href={ref.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reference-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
            >
              <div className="reference-image">
                <img src={ref.image} alt={ref.name} />
                <div className="overlay">
                  <span>Siteye Git</span>
                </div>
              </div>
              <h3>{ref.name}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
