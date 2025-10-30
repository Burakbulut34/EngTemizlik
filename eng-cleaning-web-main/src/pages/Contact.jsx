import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../styles/contact.css";
import Helmet from "../components/Helmet/Helmet";

export default function Contact({ withHelmet = false }) {
  return (
    <section className="contact">
        {withHelmet && <Helmet title="İletişim  " />}
      <div className="contact__container">
        {/* Sol Taraf */}
        <div className="contact__info">
          <h2 className="contact__title">Bizimle İletişime Geçin</h2>
          <p className="contact__desc">
            Kloxyn ekibi olarak sizinle her zaman iletişimde olmaktan mutluluk duyarız.
            Sorularınızı, önerilerinizi veya iş birliği taleplerinizi bize ulaştırabilirsiniz.
          </p>

          <div className="contact__details">
            <div className="contact__item">
              <FaPhoneAlt className="contact__icon" />
              <span>+90 541 201 08 01</span>
            </div>
            <div className="contact__item">
              <FaEnvelope className="contact__icon" />
              <span>info@engtemizlik.com</span>
            </div>
            <div className="contact__item">
              <FaMapMarkerAlt className="contact__icon" />
              <span>İstanbul, Türkiye</span>
            </div>
          </div>

          <div className="contact__socials">
            <a href="/" aria-label="Facebook"><FaFacebookF /></a>
            <a href="/" aria-label="Instagram"><FaInstagram /></a>
            <a href="/" aria-label="Twitter"><FaTwitter /></a>
            <a href="/" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Sağ Taraf - Form */}
        <div className="contact__form">
          <h3>Bize Mesaj Gönderin</h3>
          <form>
            <div className="form__group">
              <input type="text" placeholder="Adınız" required />
            </div>
            <div className="form__group">
              <input type="email" placeholder="E-posta adresiniz" required />
            </div>
            <div className="form__group">
              <textarea placeholder="Mesajınız" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn__submit">Gönder</button>
          </form>
        </div>
      </div>
    </section>
  );
}
