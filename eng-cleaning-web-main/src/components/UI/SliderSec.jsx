import React, { useEffect, useState } from "react";
import "../../styles/slider.css";
import img01 from "../../assets/slider-img/medium-shot-woman-cleaning-home.jpg";
import img02 from "../../assets/slider-img/professional-cleaning-service-person-using-vacuum-cleaner-office.jpg";
//import img04 from "../../assets/slider-img/workers-washing-windows-office-building.jpg";
const slides = [
  {
    id: 1,
    image: img01,
    titleEng: "ENGTEMİZLİK",
    title: "Ev Temziliği",
    description: "Konforunuzu ve zarafeti bir araya getiriyoruz. Deneyimli ekibimiz, profesyonel ekipman ve hijyenik ürünlerle evinizin her köşesinde kusursuz temizlik sağlar.<br> Tozdan, lekeden ve dağınıklıktan uzak; ferah, pırıl pırıl bir yaşam alanı sizi bekliyor. Ev temizliğinde kalite, detaylarda saklıdır <br>Biz o detayları sizin için düşünüyoruz.",
    link:"/tests"
  },
  {
    id: 2,
    image: img02,
    titleEng: "ENGTEMİZLİK",
    title: "Ofis Temizliği",
    description: "Ofisiniz, işinizin vitrini! Profesyonel temizlik ekibimizle çalışma alanlarınızı hijyenik, ferah ve düzenli hale getiriyoruz. Tozdan arınmış masalar, pırıl pırıl camlar ve tertemiz bir ortamla verimliliğinizi artırın. Siz işinize odaklanın, temizlik detaylarını bize bırakın!",
    link:"/tests"
  },
];

const Slider = ({ withHelmet = false }) => {
  const [page, setPage] = useState(0);

  // Otomatik geçiş
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="slider-container" aria-label="Ana slider">
      <div className="slide">
        <img
          src={slides[page].image}
          alt={slides[page].title}
          className="slide-img"
          draggable={false}
        />
        <div key={page} className="slide-text">
          <h1 className="slide-title">{slides[page].titleEng}</h1>

          <br />
          <h2>{slides[page].title}</h2>
          <p>{slides[page].description}</p>
        </div>
      </div>

      {/* Noktalar */}
      <div className="slider-dots" role="tablist" aria-label="Slayt seçimi">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${page === idx ? "active" : ""}`}
            onClick={() => setPage(idx)}
            aria-selected={page === idx}
            role="tab"
            tabIndex={page === idx ? 0 : -1}
            aria-label={`Slayt ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;