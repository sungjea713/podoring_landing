import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, slideInFromRight, scaleIn } from '../utils/animations';
import { useTranslation } from '../hooks/useTranslation';
import logo from '../assets/images/podoring_wms_logo.png';
import dashboardScr from '../assets/images/dashboard_scr.png';

const Hero = () => {
  const t = useTranslation();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Logo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <img
              src={logo}
              alt="Podoring WMS Logo"
              className="h-16 md:h-20 w-auto"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            {t.hero.tagline}
          </motion.h1>

          {/* Sub Headline */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            {t.hero.subtitle}
            <br />
            <span className="font-semibold text-wine-600">{t.hero.subtitleBold}</span>
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ delay: 0.7 }}
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-wine-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {t.hero.cta}
          </motion.button>
        </div>

        {/* Right Content - Dashboard Screenshot */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromRight}
          transition={{ delay: 0.5 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
            <img
              src={dashboardScr}
              alt="Podoring WMS Dashboard"
              className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
            />
            {/* Floating effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-wine-600/10 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
