import logo from '../assets/images/podoring_wms_logo.png';
import { Linkedin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const t = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F3F1EA] py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left - Logo & Tagline */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Podoring WMS Logo"
              className="h-12 w-auto"
            />
            <p className="text-gray-600 text-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* Center - Product & Company */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">{t.footer.product}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="hover:text-wine-600 transition-colors text-left"
                  >
                    {t.nav.features}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('pricing')}
                    className="hover:text-wine-600 transition-colors text-left"
                  >
                    {t.nav.pricing}
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">{t.footer.company}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="https://thunder-stem-d61.notion.site/WEBBER-17dffb2f1abc80c6b00ac47b8611e41a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-wine-600 transition-colors"
                  >
                    {t.footer.companyAbout}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-wine-600 transition-colors">
                    {t.footer.privacy}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">{t.footer.contactTitle}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="mailto:sj.kim@webber-ai.com"
                  className="hover:text-wine-600 transition-colors"
                >
                  {t.footer.email}: sj.kim@webber-ai.com
                </a>
              </li>
              <li>
                <a
                  href="tel:010-9229-8794"
                  className="hover:text-wine-600 transition-colors"
                >
                  {t.footer.phone}: 010-9229-8794
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sungjea-kim713/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-wine-600 transition-colors flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="border-t border-gray-300 pt-8">
          <p className="text-center text-sm text-gray-600">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
