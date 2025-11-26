import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import "./footer.css";
import Logo from "../../assets/logo/site_logo.png";

export default function ModernResponsiveFooter() {
  return (
    <footer className="mrf">
      <div className="mrf__inner">
        {/* Sol: logo + about */}
        <div className="mrf__col mrf__col--left">
          <div className="mrf__brand">
            <div className="mrf__logo">
              <img src={Logo} alt="" width={70} heigth={70} />
            </div>
            <div className="mrf__about">
              <p>
                Eng Temizlik, yaşam alanlarınıza hijyen, konfor ve güven
                getirir. Bizim için temizlik, titizlikle yapılan bir yaşam
                sanatıdır. Siz keyfinize bakın, biz tertemiz bir ortam
                yaratalım.
              </p>
            </div>
          </div>

          <a
            className="mrf__whatsapp"
            href="https://api.whatsapp.com/send?phone=905412010801"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp /> <span>WhatsApp ile iletişime geç</span>
          </a>
        </div>

        {/* Orta: sayfa bağlantıları */}
        <div className="mrf__col mrf__col--mid">
          <h4 className="mrf__title">Sayfalar</h4>
          <ul className="mrf__links">
            <li>
              <a href="/">Ana Sayfa</a>
            </li>
            <li>
              <a href="/about.html">Hakkımızda</a>
            </li>
            <li>
              <a href="/references.html">Referanslar</a>
            </li>
            <li>
              <a href="/services.html">Hizmetler</a>
            </li>
            <li>
              <a href="/contact.html">İletişim</a>
            </li>
          </ul>
        </div>

        {/* Sağ: sosyal iconlar + telif */}
        <div className="mrf__col mrf__col--right">
          <h4 className="mrf__title">Bizi Takip Edin</h4>
          <div
            className="mrf__socials"
            role="navigation"
            aria-label="Sosyal Medya"
          >
            <a href="https://www.instagram.com/engtemizlik" aria-label="Instagram" target="blank">
              <FaInstagram />
            </a>
          </div>

          <div className="mrf__copy">
            <small>© 2025 EngTemizlik. Tüm hakları saklıdır.</small>
            <small>
              Designed by{" "}
              <a href="https://burakblog.vercel.app/" target="blank">
                Burak Bulut
              </a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
