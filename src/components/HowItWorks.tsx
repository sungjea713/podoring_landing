import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { staggerContainer, staggerItem } from '../utils/animations';
import cameraWine from '../assets/images/camera_wine.png';
import addScr2 from '../assets/images/add_scr_2.png';
import addScr3 from '../assets/images/add_scr_3.png';
import stockScr from '../assets/images/stock_scr.png';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslation();

  const steps = [
    {
      number: 1,
      title: t.howItWorks.steps[0].title,
      description: t.howItWorks.steps[0].description,
      image: cameraWine,
    },
    {
      number: 2,
      title: t.howItWorks.steps[1].title,
      description: t.howItWorks.steps[1].description,
      image: addScr2,
    },
    {
      number: 3,
      title: t.howItWorks.steps[2].title,
      description: t.howItWorks.steps[2].description,
      image: addScr3,
    },
    {
      number: 4,
      title: t.howItWorks.steps[3].title,
      description: t.howItWorks.steps[3].description,
      image: stockScr,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-beige-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-16"
        >
          {t.howItWorks.title}
        </motion.h2>

        {/* Desktop: Horizontal Timeline */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="hidden md:grid md:grid-cols-4 gap-6 relative"
        >
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <motion.div
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
              >
                {/* Number Badge */}
                <div className="w-12 h-12 bg-wine-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>

                {/* Image */}
                <div className="relative h-40 mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-wine-600/5 to-wine-600/10">
                  <motion.img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  />
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                  className="absolute -right-3 top-1/2 -translate-y-1/2 z-10"
                >
                  <div className="bg-wine-600 rounded-full p-2">
                    <ArrowRight className="text-white" size={20} />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Mobile: Vertical Stack */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="md:hidden space-y-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              {/* Number Badge */}
              <div className="w-12 h-12 bg-wine-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>

              {/* Image */}
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-wine-600/5 to-wine-600/10">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
