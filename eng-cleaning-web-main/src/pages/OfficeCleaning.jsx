import React from "react";
import "../styles/officeCleaning.css";
import officeImg from "../assets/slider-img/professional-cleaning-service-person-using-vacuum-cleaner-office.jpg"; // Görsel yolunu kendi projenle uyumlu yap
import Helmet from "../components/Helmet/Helmet";

const OfficeCleaning = ({ withHelmet = false }) => {
  return (
    <section className="office-cleaning-section">
      {withHelmet && <Helmet title="Ofis Temizliği"/>}
      <div className="office-container">
        <div className="office-image">
          <img src={officeImg} alt="Ofis Temizliği" />
        </div>
        <div className="office-content">
          <h1>
            Ofis Temizliği – Profesyonel, Hijyenik ve Verimli Çalışma Alanları
          </h1>
          <p>
            Ofisiniz, markanızın ilk izlenimidir. Temiz, düzenli ve ferah bir
            ofis; hem çalışan motivasyonunu artırır hem de misafirleriniz
            üzerinde profesyonel bir etki bırakır. ENG Temizlik olarak,
            ofislerinizi yalnızca görünürde değil, derinlemesine hijyen
            sağlayacak şekilde temizliyoruz.
          </p>
          <p>
            Deneyimli ekibimiz, modern ekipmanlarımız ve çevre dostu temizlik
            ürünlerimizle çalışma alanlarınızı baştan aşağı yeniler. Masalar,
            bilgisayar ekipmanları, zeminler, camlar ve kapılar gibi tüm
            detaylara özen gösteririz. Tozdan arınmış, ferah bir ofiste
            çalışmanın keyfini yaşarsınız.
          </p>
          <p>
            Sadece bir defalık temizlik değil; dilerseniz periyodik temizlik
            planları ile ofisinizin her zaman hijyenik kalmasını
            sağlayabilirsiniz. Amacımız, sizin işinize odaklanmanızı sağlamak —
            temizlik detaylarını bize bırakın, gerisini biz halledelim.
          </p>

          <p>
            Temizlik bizim işimiz, siz işinize odaklanın.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfficeCleaning;
