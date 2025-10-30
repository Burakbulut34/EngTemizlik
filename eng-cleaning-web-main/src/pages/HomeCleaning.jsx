import React from "react";
import "../styles/officeCleaning.css";
import officeImg from "../assets/slider-img/medium-shot-woman-cleaning-home.jpg"; // Görsel yolunu kendi projenle uyumlu yap
import Helmet from "../components/Helmet/Helmet";

const OfficeCleaning = ({ withHelmet = false }) => {
  return (
    <section className="office-cleaning-section">
      {withHelmet && <Helmet title="Ev Temizliği  " />}
      <div className="office-container">
        <div className="office-image">
          <img src={officeImg} alt="Ofis Temizliği" />
        </div>
        <div className="office-content">
          <h1>
            Ev Temizliği – Yaşam Alanlarınızda Ferahlık, Temizlik ve Konforun
            Buluştuğu Nokta
          </h1>
          <p>
            Ev, sadece yaşadığınız yer değil; huzur bulduğunuz, dinlendiğiniz ve
            sevdiklerinizle vakit geçirdiğiniz özel bir alandır. Bu nedenle,
            evinizin her zaman temiz, düzenli ve sağlıklı olması hem yaşam
            kalitenizi yükseltir hem de ruhunuzu dinlendirir.
          </p>
          <p>
            Profesyonel temizlik ekibimiz, evinizin her detayına özen göstererek
            kapsamlı bir temizlik hizmeti sunar. Mutfaktan banyoya, yatak
            odasından salona kadar tüm alanlar; toz, kir, leke ve kötü
            kokulardan tamamen arındırılır. Kullandığımız çevre dostu temizlik
            malzemeleri, hem eşyalarınıza zarar vermez hem de ailenizin
            sağlığını korur.
          </p>
          <p>
            Detaylı zemin temizliği, yüzey parlatma, perde ve halı bakımı gibi
            işlemlerle evinizi adeta yeniliyoruz. Günün sonunda sizi mis gibi
            kokan, ışıl ışıl ve ferah bir ortam karşılar.
          </p>

          <p>
            Biz temizlikle ilgilenirken siz sadece huzurun keyfini çıkarın.
            Temiz bir ev, temiz bir zihin ve daha mutlu bir yaşam demektir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfficeCleaning;
