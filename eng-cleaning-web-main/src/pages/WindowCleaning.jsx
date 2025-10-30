import React from "react";
import "../styles/officeCleaning.css";
import officeImg from "../assets/slider-img/workers-washing-windows-office-building.jpg"; // Görsel yolunu kendi projenle uyumlu yap
import Helmet from "../components/Helmet/Helmet";

const OfficeCleaning = ({ withHelmet = false }) => {
  return (
    <section className="office-cleaning-section">
      {withHelmet && <Helmet title="Cam Temizliği" />}
      <div className="office-container">
        <div className="office-image">
          <img src={officeImg} alt="Ofis Temizliği" />
        </div>
        <div className="office-content">
          <h1>Cam Temizliği – Işığın ve Ferahlığın Gerçek Yansıması</h1>
          <p>
            Camlar, bir mekânın hem dışarıya açılan penceresi hem de temizlik
            anlayışının aynasıdır. Zamanla yağmur, toz, egzoz dumanı ve parmak
            izleri cam yüzeylerde birikir; bu da hem görüntüyü bozar hem de iç
            mekânın doğal ışık almasını engeller. Matlaşmış ve kirli camlar, en
            şık ofisleri bile solgun gösterir.
          </p>
          <p>
            ENG Temizlik olarak, camlarınızı sadece temizlemekle kalmıyor;
            onlara yeniden parlaklık ve canlılık kazandırıyoruz. Profesyonel
            ekibimiz, yüksek kaliteli ekipmanlar, saf su teknolojisi ve iz
            bırakmayan özel temizlik ürünleriyle çalışır. Bu sayede camlarınızda
            hiçbir leke, iz veya buğulanma kalmaz — sadece pırıl pırıl, kristal
            bir parlaklık elde edilir.
          </p>
          <p>
            İster yüksek katlı bir iş merkezi, ister geniş cam cepheli bir villa
            olsun; tüm zorluk seviyelerinde güvenli, etkili ve titiz temizlik
            çözümleri sunuyoruz. Cam çerçeveleri ve kenar detaylarını da özenle
            temizleyerek, sadece görsel değil tam anlamıyla hijyenik bir sonuç
            sağlıyoruz.
          </p>

          <p>
            Temizlik sonrası farkı anında hissedeceksiniz: Camlarınızdan süzülen
            güneş ışığı ortama yeniden enerji katacak, manzaranız daha net ve
            ferah görünecek. ENG Temizlik farkıyla, dünyayı yeniden cam gibi
            görün.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfficeCleaning;
