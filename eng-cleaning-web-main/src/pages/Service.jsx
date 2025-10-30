import React from "react";
import { motion } from "framer-motion";
import "../styles/service.css";
import img1 from "../assets/slider-img/professional-cleaning-service-person-using-vacuum-cleaner-office.jpg";
import img2 from "../assets/slider-img/medium-shot-woman-cleaning-home.jpg";
import img3 from "../assets/slider-img/front-view-woman-cleaning-chair.jpg";
import img4 from "../assets/slider-img/workers-washing-windows-office-building.jpg";
import Helmet from "../components/Helmet/Helmet";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3, // her kutu arasında gecikme
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Services = ({ withHelmet = false }) => {
  const services = [
    {
      title: "Ofis Temizliği",
      desc: "Ofisiniz, işinizin vitrini! Profesyonel temizlik ekibimizle çalışma alanlarınızı hijyenik, ferah ve düzenli hale getiriyoruz. Tozdan arınmış masalar, pırıl pırıl camlar ve tertemiz bir ortamla verimliliğinizi artırın. Siz işinize odaklanın, temizlik detaylarını bize bırakın!",
      img: img1,
      reverse: false,
      link: "/OfficeCleaning.html",
    },
    {
      title: "Ev Temizliği",
      desc: "Konforunuzu ve zarafeti bir araya getiriyoruz. Deneyimli ekibimiz, profesyonel ekipman ve hijyenik ürünlerle evinizin her köşesinde kusursuz temizlik sağlar. Tozdan, lekeden ve dağınıklıktan uzak; ferah, pırıl pırıl bir yaşam alanı sizi bekliyor. Ev temizliğinde kalite, detaylarda saklıdır — biz o detayları sizin için düşünüyoruz.",
      img: img2,
      reverse: true,
      link: "/HomeCleaning.html",
    },
    {
      title: "Koltuk Yıkama",
      desc: "Ev veya ofis koltuklarınız zamanla kirlenebilir ve hijyenik olmaktan uzaklaşabilir. ENG Temizlik olarak, koltuklarınızı derinlemesine temizleyen, lekeleri çıkaran ve kumaşlarınıza zarar vermeyen profesyonel koltuk yıkama hizmeti sunuyoruz.",
      img: img3,
      reverse: false,
      link: "/SofaCleaning.html",
    },
    {
      title: "Cam Temizliği",
      desc: "Pencereleriniz ve cam yüzeyleriniz ışıl ışıl! ENG Temizlik, tüm camları çiziksiz ve lekesiz yapan profesyonel cam temizliği hizmeti sunar.",
      img: img4,
      reverse: true,
      link: "/WindowCleaning.html", 
    },
  ];

  return (
    <>
    {withHelmet && <Helmet title="Hizmetler" />}
    <section className="services-section">
      <div className="service-container">
        {services.map((service, i) => (
          <motion.div
            className={`service-box ${service.reverse ? "reverse" : ""}`}
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
          >
            <div className={`service-image ${service.reverse ? "right" : "left"}`}>
              <img src={service.img} alt={service.title} />
            </div>
            <div className={`service-content ${service.reverse ? "left" : "right"}`}>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            <button className="service-btn">
              <a href={service.link}>Detaylı İncele</a>
            </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Services;
