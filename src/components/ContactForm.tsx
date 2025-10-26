import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, FormEvent } from 'react';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTranslation } from '../hooks/useTranslation';
import { fadeInUp } from '../utils/animations';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactForm = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslation();

  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const templateParams = {
        from_name: formData.name,
        contact: formData.contact,
        company: formData.company,
        message: formData.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus('success');
      setFormData({
        name: '',
        contact: '',
        company: '',
        message: '',
      });

      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-20 bg-beige-100">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-700">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10 space-y-6"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              {t.contact.form.nameRequired}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t.contact.form.namePlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-wine-600 focus:ring-2 focus:ring-wine-600/20 outline-none transition-all duration-300"
            />
          </div>

          {/* Contact */}
          <div>
            <label htmlFor="contact" className="block text-sm font-semibold text-gray-700 mb-2">
              {t.contact.form.contactRequired}
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              required
              value={formData.contact}
              onChange={handleChange}
              placeholder={t.contact.form.contactPlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-wine-600 focus:ring-2 focus:ring-wine-600/20 outline-none transition-all duration-300"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
              {t.contact.form.company}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder={t.contact.form.companyPlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-wine-600 focus:ring-2 focus:ring-wine-600/20 outline-none transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              {t.contact.form.messageRequired}
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder={t.contact.form.messagePlaceholder}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-wine-600 focus:ring-2 focus:ring-wine-600/20 outline-none transition-all duration-300 resize-none"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={formStatus === 'loading'}
            whileHover={{ scale: formStatus === 'loading' ? 1 : 1.02 }}
            whileTap={{ scale: formStatus === 'loading' ? 1 : 0.98 }}
            className={`w-full py-4 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
              formStatus === 'loading'
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-wine-600 hover:bg-wine-700 hover:shadow-xl'
            }`}
          >
            {formStatus === 'loading' ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                <span>{t.contact.form.sending}</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>{t.contact.form.submit}</span>
              </>
            )}
          </motion.button>

          {/* Status Messages */}
          {formStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center"
            >
              {t.contact.form.success}
            </motion.div>
          )}

          {formStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center"
            >
              {t.contact.form.error}
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
