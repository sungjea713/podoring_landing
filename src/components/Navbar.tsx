import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import logo from '../assets/images/podoring_wms_logo.png';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'features', label: t.nav.features, type: 'scroll' as const },
    { id: 'pricing', label: t.nav.pricing, type: 'scroll' as const },
    { id: 'about', label: t.nav.about, type: 'external' as const, url: 'https://www.webber-ai.com' },
    { id: 'contact', label: t.nav.contact, type: 'scroll' as const },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img
              src={logo}
              alt="Podoring WMS"
              className="h-10 w-auto"
            />
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.type === 'external' ? (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-medium transition-colors hover:text-wine-600 ${
                    isScrolled ? 'text-gray-700' : 'text-gray-900'
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-wine-600 ${
                    isScrolled ? 'text-gray-700' : 'text-gray-900'
                  }`}
                >
                  {link.label}
                </button>
              )
            ))}
          </div>

          {/* Right Side - Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
              <Globe size={16} className="text-gray-600" />
              <button
                onClick={() => setLanguage('ko')}
                className={`text-sm font-medium transition-colors ${
                  language === 'ko' ? 'text-wine-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                🇰🇷 KOR
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm font-medium transition-colors ${
                  language === 'en' ? 'text-wine-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                🇺🇸 ENG
              </button>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
            >
              {t.nav.cta}
            </motion.button>
          </div>

          {/* Mobile Menu Button & Language */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Selector */}
            <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1.5 shadow-sm">
              <button
                onClick={() => setLanguage('ko')}
                className={`text-xs font-medium ${
                  language === 'ko' ? 'text-wine-600' : 'text-gray-600'
                }`}
              >
                🇰🇷
              </button>
              <span className="text-gray-300 text-xs">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs font-medium ${
                  language === 'en' ? 'text-wine-600' : 'text-gray-600'
                }`}
              >
                🇺🇸
              </button>
            </div>

            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-wine-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              {t.nav.contact}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
