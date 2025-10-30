import React from 'react';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './footer.css';
import Logo from "../../assets/logo/site_logo.png"

export default function ModernResponsiveFooter() {
  return (
    <footer className="mrf">
      <div className="mrf__inner">
        {/* Sol: logo + about */}
        <div className="mrf__col mrf__col--left">
          <div className="mrf__brand">
            <div className="mrf__logo"><img src={Logo} alt="" width={70} heigth={70}/></div>
            <div className="mrf__about">
              <p>
                Kloxyn — modern, güvenilir ve kullanıcı dostu çözümler sunar. Hedefimiz
                işletmenizi dijitalde güçlendirmek. Hizmetlerimiz web, mobil ve bulut
                altyapıları üzerine odaklanır.
              </p>
            </div>
          </div>

          <a className="mrf__whatsapp" href="https://api.whatsapp.com/send?phone=905412010801" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp /> <span>WhatsApp ile iletişime geç</span>
          </a>
        </div>

        {/* Orta: sayfa bağlantıları */}
        <div className="mrf__col mrf__col--mid">
          <h4 className="mrf__title">Sayfalar</h4>
          <ul className="mrf__links">
            <li><a href="/">Ana Sayfa</a></li>
            <li><a href="/about">Hakkımızda</a></li>
            <li><a href="/services">Hizmetler</a></li>
            <li><a href="/contact">İletişim</a></li>
          </ul>
        </div>

        {/* Sağ: sosyal iconlar + telif */}
        <div className="mrf__col mrf__col--right">
          <h4 className="mrf__title">Bizi Takip Edin</h4>
          <div className="mrf__socials" role="navigation" aria-label="Sosyal Medya">
            <a href="/" aria-label="Facebook"><FaFacebookF /></a>
            <a href="/" aria-label="Instagram"><FaInstagram /></a>
            <a href="/" aria-label="Twitter"><FaTwitter /></a>
            <a href="/" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>

          <div className="mrf__copy">
            <small>© 2025 EngTemizlik. Tüm hakları saklıdır.</small>
            <small>Designed by Burak Bulut</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

