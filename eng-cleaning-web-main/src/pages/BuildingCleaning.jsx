import React from "react";
import "../styles/officeCleaning.css";
import officeImg from "../assets/slider-img/building-cleaning.avif"; // Görsel yolunu kendi projenle uyumlu yap
import Helmet from "../components/Helmet/Helmet";

const OfficeCleaning = ({ withHelmet = false }) => {
  return (
    <section className="office-cleaning-section">
      {withHelmet && <Helmet title="İnşaat Sonrası Temizlik" />}
      <div className="office-container">
        <div className="office-image">
          <img src={officeImg} alt="Ofis Temizliği" />
        </div>
        <div className="office-content">
          <h1>🚧 İnşaat Sonrası Temizlik: Detaylı Teslimatın Anahtarı</h1>
          <p>
            Yeni bir yapının teslim edilmesinden önceki son ve en kritik adım
            inşaat sonrası temizliktir. Bu süreç, geride kalan zorlu kalıntıları
            (alçı, boya, çimento, toz) temizleyerek yapıyı yaşamaya hazır, pırıl
            pırıl bir alana dönüştürür.
          </p>
          <p><b>İnşaat Sonrası Temizliğin Zorlukları</b></p>
          <p>
            İnşaat Sonrası Temizliğin Zorlukları Normal temizliğin aksine,
            inşaat sonrası temizlik;
          </p>
          <p>Yoğun ve İncelikli Toz: Yapı
            malzemelerinden (alçı, sıva) kaynaklanan ince toz, en ufak
            aralıklara bile nüfuz eder. Özel HEPA filtreli vakumlar bu tozun
            temizlenmesinde şarttır.</p>

            <p>Ağır ve Yapışkan Kalıntılar: Zeminlere ve
            camlara bulaşmış çimento sıçramaları, boya lekeleri, harç ve silikon
            artıkları normal yöntemlerle çıkarılamaz. Bu, doğru kimyasalları ve
            kazıma tekniklerini gerektirir.</p>
            
            <p>Riskli Alanlar: Yüksek camlar,
            hassas yeni yüzeyler ve dar alanlar dikkatli ve profesyonel
            ekipmanlarla çalışmayı zorunlu kılar.</p>
          <p>
            <b>Neden Profesyonel Hizmet Şarttır?</b>
          </p>
          <p>
            Yeni bitmiş bir yapının hak ettiği
            parlaklığı kazanması ve mülkün değerinin en üst seviyede sunulması
            için profesyonel inşaat sonrası temizlik hayati önem taşır. Bu,
            sadece temizlik değil, aynı zamanda teslim öncesi son kalite
            kontrolüdür.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfficeCleaning;
