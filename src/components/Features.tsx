import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Package, TrendingUp } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { staggerContainer, staggerItem } from '../utils/animations';
import addScr3 from '../assets/images/add_scr_3.png';
import stockScr from '../assets/images/stock_scr.png';
import dashboardScr from '../assets/images/dashboard_scr.png';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslation();

  const features = [
    {
      icon: Camera,
      title: t.features.items[0].title,
      description: t.features.items[0].description,
      image: addScr3,
    },
    {
      icon: Package,
      title: t.features.items[1].title,
      description: t.features.items[1].description,
      image: stockScr,
    },
    {
      icon: TrendingUp,
      title: t.features.items[2].title,
      description: t.features.items[2].description,
      image: dashboardScr,
    },
  ];

  return (
    <section id="features" className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-16"
        >
          {t.features.title}
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-wine-600/5 to-wine-600/10">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-wine-600 text-white rounded-xl">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
