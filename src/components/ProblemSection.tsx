import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileSpreadsheet, Search, BarChart3 } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { staggerContainer, staggerItem } from '../utils/animations';

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslation();

  const problems = [
    {
      icon: FileSpreadsheet,
      title: t.problem.items[0],
    },
    {
      icon: Search,
      title: t.problem.items[1],
    },
    {
      icon: BarChart3,
      title: t.problem.items[2],
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
          {t.problem.title}
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-wine-600/10 text-wine-600 rounded-xl mb-4">
                <problem.icon size={32} strokeWidth={2} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed">
                {problem.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
