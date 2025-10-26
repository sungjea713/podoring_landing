import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslation();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 px-6 md:px-12 lg:px-20 bg-beige-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-16"
        >
          {t.pricing.title}
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* 설치 비용 */}
          <motion.div
            variants={staggerItem}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t.pricing.installation.title}
              </h3>
              <p className="text-gray-600">{t.pricing.installation.subtitle}</p>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl md:text-5xl font-bold text-wine-600">
                  {t.pricing.installation.price}
                </span>
                <span className="text-2xl text-gray-500">~</span>
                <span className="text-4xl md:text-5xl font-bold text-wine-600">
                  {t.pricing.installation.priceTo}
                </span>
              </div>
              <p className="text-sm text-gray-500">{t.pricing.installation.vat}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {t.pricing.installation.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-wine-600 text-white rounded-full flex items-center justify-center mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 월 유지 비용 */}
          <motion.div
            variants={staggerItem}
            className="bg-gradient-to-br from-wine-600 to-wine-700 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 text-white relative overflow-hidden"
          >
            {/* 추천 배지 */}
            <div className="absolute top-4 right-4 bg-yellow-400 text-wine-600 px-4 py-1 rounded-full text-sm font-bold">
              {t.pricing.monthly.badge}
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                {t.pricing.monthly.title}
              </h3>
              <p className="text-wine-100">{t.pricing.monthly.subtitle}</p>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-bold">
                  {t.pricing.monthly.price}
                </span>
                <span className="text-xl pb-2">{t.pricing.monthly.period}</span>
              </div>
              <p className="text-sm text-wine-100">{t.pricing.monthly.vat}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {t.pricing.monthly.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-white text-wine-600 rounded-full flex items-center justify-center mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            {t.pricing.cta.text}
          </p>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-wine-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {t.pricing.cta.button}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
