import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Sadece logo için
import { FaWhatsapp } from 'react-icons/fa';
import { Menu, X } from "lucide-react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Anasayfa", href: "/" },
    { name: "Hizmetler", href: "/services.html" },
    { name: "Referanslar", href: "/references.html" },
    { name: "Hakkımızda", href: "/about.html" },
    { name: "İletişim", href: "/contact.html" },
  ];

  // Scroll durumunu izleme
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ekran boyutu büyüyünce mobil menü kapansın
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar">
        {/* Logo */}
        <motion.a
          href="/"
          className="logo"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="https://res.cloudinary.com/dazvkvpch/image/upload/v1762104906/site_logo.png" alt="site-logo" width={100} height={100} />
        </motion.a>

        {/* Masaüstü Menü */}
        <nav className="nav-links">
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              className="nav-item"
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}

          <a className="mrf__whatsapp" href="https://api.whatsapp.com/send?phone=905412010801" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp /> <span>WhatsApp ile iletişime geç</span>
          </a>
        </nav>

        {/* Hamburger Buton */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü Aç/Kapat"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobil Menü - Animasyon olmadan, basit toggle */}
      {isOpen && (
        <nav className="mobile-menu">
          <ul>
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="mobile-item"
                  onClick={() => setIsOpen(false)} // Sadece menü kapatma
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            className="mrf__whatsapp"
            href="https://api.whatsapp.com/send?phone=905412010801"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            onClick={() => setIsOpen(false)} // Sadece menü kapatma
          >
            <FaWhatsapp /> <span>WhatsApp ile iletişime geç</span>
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;