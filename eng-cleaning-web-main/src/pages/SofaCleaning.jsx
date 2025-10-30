import React from "react";
import "../styles/officeCleaning.css";
import officeImg from "../assets/slider-img/front-view-woman-cleaning-chair.jpg"; // Görsel yolunu kendi projenle uyumlu yap
import Helmet from "../components/Helmet/Helmet";

const OfficeCleaning = ({ withHelmet = false }) => {
  return (
    <section className="office-cleaning-section">
      {withHelmet && <Helmet title="Koltuk Yıkama" />}
      <div className="office-container">
        <div className="office-image">
          <img src={officeImg} alt="Ofis Temizliği" />
        </div>
        <div className="office-content">
          <h1>Koltuk Yıkama – Temizlikte Derinlemesine Hijyen ve Tazelik</h1>
          <p>
            Koltuklar, hem evlerde hem de ofislerde en çok kullanılan eşyaların
            başında gelir. Gün boyunca toz, kir, ter ve lekeler koltuk kumaşına
            işler; zamanla kötü kokular ve bakteri oluşumu başlar. Sıradan
            temizlik yöntemleri bu kirleri yüzeysel olarak giderir, ancak gerçek
            hijyen için profesyonel bir koltuk yıkama işlemi gerekir.
          </p>
          <p>
            ENG Temizlik olarak, gelişmiş buharlı temizlik makineleri ve özel
            temizlik solüsyonlarıyla koltuklarınızı derinlemesine temizliyoruz.
            Kumaş türüne uygun ekipman ve ürünler kullanarak, koltuğunuza zarar
            vermeden leke, toz akarları ve bakterileri tamamen ortadan
            kaldırıyoruz.
          </p>
          <p>
            Temizlik işlemi sonrasında koltuklarınız sadece tertemiz görünmekle
            kalmaz, aynı zamanda daha canlı, yumuşak ve hoş kokulu hale gelir.
            Bu sayede hem evinizin havası değişir hem de yaşam alanlarınızda
            hijyen seviyesi en üst düzeye çıkar.
          </p>

          <p>
            Sağlığınız ve konforunuz için profesyonel dokunuşlara güvenin.
            Koltuklarınız ilk günkü tazeliğine kavuşsun, siz de rahatlığın
            tadını çıkarın.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfficeCleaning;
