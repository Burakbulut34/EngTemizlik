import React from "react";
import  Helmet  from "../components/Helmet/Helmet";
import "../styles/contact.css";

const Contact = () => {
  return (
    <>
      <Helmet title="İletişim" />
      <section className="contact-section">
        <div className="contact-container">

          {/* Sol Taraf - Form */}
          <div className="contact-form">
            <h2 className="contact-title">Bize Ulaşın</h2>
            <p className="contact-desc">
              Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz.
            </p>
            <form action="https://formcarry.com/s/b81c3xSZFjj" method="POST">
              <div className="form-group">
                <label>Ad Soyad</label>
                <input type="text" placeholder="Adınızı girin" required  name="Ad - Soyad"/>
              </div>
              <div className="form-group">
                <label>E-posta</label>
                <input type="email" placeholder="E-posta adresiniz" required name="E-posta"/>
              </div>
              <div className="form-group">
                <label>Konu</label>
                <input type="text" placeholder="Mesaj konusu" required name="Konu"/>
              </div>
              <div className="form-group">
                <label>Mesaj</label>
                <textarea rows="5" placeholder="Mesajınızı yazın" required name="Mesaj"></textarea>
              </div>
              <button type="submit" className="contact-btn">Gönder</button>
            </form>
          </div>

          {/* Sağ Taraf - Bilgiler */}
          <div className="contact-info">
            <h3>İletişim Bilgileri</h3>
            <ul>
              <li><strong>📍 Adres:</strong> İstanbul, İstanbul</li>
              <li><strong>📞 Telefon:</strong> +90 541 201 08 01</li>
              <li><strong>✉️ E-posta:</strong> info@engtemizlik.com</li>
            </ul>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.88850531832!2d28.847372628072865!3d41.00546324300304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1762107056795!5m2!1str!2str"
                loading="lazy"
                title="map"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
