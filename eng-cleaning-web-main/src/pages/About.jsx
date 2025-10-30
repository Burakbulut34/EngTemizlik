import React, { useEffect, useRef, useState } from 'react'
import "../styles/about.css";
import Helmet from "../components/Helmet/Helmet";

const About = ({ withHelmet = false }) => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // bir kez çalışsın
        }
      },
      { threshold: 0.2 } // %20 görünür olunca tetiklenir
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);
  
  
  return (
    <section  ref={aboutRef} className={`about-section ${isVisible ? "animate" : ""}`}>
     {withHelmet && <Helmet title="Hakkımızda" />}
  <div className="container">
    <div className="row">
      {/* Content Column */}
      <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 order-lg-1">
        <div className="inner-column">
          <div className="sec-title">
            <span className='title'>Hakkımızda</span>
          </div>
          <div className="text">
            <p>
                Eng Temizlik olarak, yaşam ve çalışma alanlarınızı hijyenik, ferah ve konforlu hale getirmek için profesyonel temizlik hizmetleri sunuyoruz.
            </p>

            <p>
                Deneyimli ekibimiz, modern ekipmanlarımız ve kaliteli temizlik ürünlerimizle her detaya özen gösteriyoruz.
            </p>

            <p>
                Misyonumuz, müşterilerimize sadece temizlik değil; güven, huzur ve memnuniyet sunmaktır.
            </p>

            <p>
                Ev, ofis, inşaat sonrası veya periyodik temizlik fark etmeksizin, her mekâna özel çözümler üretiyoruz.
            </p>
            
            <p> 
                Bizim için temizlik bir iş değil, titizlikle yapılan bir yaşam alanı sanatıdır. Siz rahat edin, biz tertemiz bir ortam yaratalım.
            </p>
          </div>
          <ul className="list-style-one">
            <li>Ev Temizliği</li>
            <li>Ofis Temizliği</li>
            <li>Koltuk Temizliği</li>
            <li>Cam Temizliği</li>
          </ul>
          <div className="btn-box">
            <a href="/contact.html" className="theme-btn btn-style-one">Detaylı</a>
          </div>
        </div>
      </div>

      {/* Image Column */}
      <div className="image-column col-lg-6 col-md-12 col-sm-12 order-1 order-lg-2">
        <div className="inner-column">
          <figure className="image-1">
            <img src="https://img.freepik.com/free-photo/full-shot-people-cleaning-office_23-2150454494.jpg?t=st=1761681361~exp=1761684961~hmac=c60457214e802cb72fe19d7791656bc2b73bd0bfaf7c595e0437a0889fcfc54b&w=1480" alt="About 1" />
          </figure>
          <figure className="image-2">
            <img src="https://img.freepik.com/free-photo/medium-shot-woman-cleaning-home_23-2150453325.jpg?t=st=1761681448~exp=1761685048~hmac=b5a655b2275a6036ad8fa59e74146b8fc4b2e8a28f152e4b28c1453bcb5c63b1&w=1480" alt="About 2"  width={500} height={500}/>
          </figure>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default About