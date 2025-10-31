import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp} from 'react-icons/fa';

import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import "./header.css";
import Logo from "../../assets/logo/site_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Anasayfa", href: "/" },
    { name: "Hizmetler", href: "/services.html" },
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top - 70,
        behavior: "smooth",
      });
    }
  };

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
          <img src={Logo} alt="site-logo" width={100} height={100} />
        </motion.a>

        {/* Masaüstü Menü */}
        <nav className="nav-links">
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              className="nav-item"
              onClick={() => scrollToSection(link.href.replace("#", ""))}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              href={link.href}
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

      {/* Mobil Menü */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <ScrollLink
                    onClick={() => {
                      scrollToSection(link.href.replace("#", ""));
                      setIsOpen(false);
                    }}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="mobile-item"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>

             <a className="mrf__whatsapp" href="https://api.whatsapp.com/send?phone=905412010801" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp /> <span>WhatsApp ile iletişime geç</span>
          </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
