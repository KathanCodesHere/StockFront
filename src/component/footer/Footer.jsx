import { Menu, ChevronDown, X, Phone, Mail, MapPin, Map, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  // Social media icon configuration
  const socialIcons = [
    { Icon: Facebook, href: '#facebook' },
    { Icon: Twitter, href: '#twitter' },
    { Icon: Linkedin, href: '#linkedin' },
    { Icon: Instagram, href: '#instagram' },
    { Icon: Youtube, href: '#youtube' },
  ];

  const ContactItem = ({ Icon, text, link, isFax = false }) => (
    <div className="flex items-start mb-3 text-sm">
      <div className="text-white-600 text-[14px] font-[400] leading-[22px] text-[#FFFFFF]  mr-3 mt-1 shrink-0">
        <Icon className={`w-4 h-4 ${isFax ? 'rotate-90' : ''}`} />
      </div>
      {link ? (
        <a href={link} className="hover:text-red-400 transition-colors text-[14px] font-[400] leading-[22px] text-[#FFFFFF]">
          {text}
        </a>
      ) : (
        <p className="leading-relaxed text-[14px] font-[400] leading-[22px] m-0 text-[#FFFFFF]">{text}</p>
      )}
    </div>
  );

  return (
    <footer className="bg-[#001529] text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Column 1: Logo and Company Description */}
          <div>
            {/* Reusing the logo component, adjusting for dark background */}
            <div className="flex items-center text-3xl font-extrabold cursor-default mb-4">
              <span className="text-blue-500">C</span>
              <span className="text-red-500 text-4xl">X</span>
              <span className="text-gray-100 ml-1">Meta</span>
            </div>

            <p className="text-[14px] font-[400] leading-[22px] mb-6 text-[#FFFFFF]">
              We are a diversified company specialized in providing
              comprehensive financial solutions for individuals and businesses.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {socialIcons.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-gray-500 rounded-full text-[14px] font-[400] leading-[22px] text-[#FFFFFF] hover:border-red-600 hover:text-red-600 transition-colors"
                  aria-label={Icon.name}
                >
                  <Icon className="w-4 h-4 text-[#FFFFFF]" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Information */}
          <div>
            <h3 className="text-[14px] font-[600] leading-[22px] text-[#FFFFFF] mb-6 capitalize">Contact</h3>

            <ContactItem
              Icon={Phone}
              text="+91- +61 28863 2866"
              link="tel:+9161288632866"
            />
            <ContactItem
              Icon={Mail}
              text="support@cxmeta.com"
              link="mailto:support@cxmeta.com"
            />
            <ContactItem
              Icon={MapPin}
              text="World Trade Centre 23rd Floor, Unit No 2238, Brigade Bangalore KARNATAKA 560055"
            />
            <ContactItem
              Icon={Phone}
              text="FAX: - +61 28076 8664"
              isFax={true} // Using a flag to rotate the phone icon for a better Fax visual
            />
            <ContactItem
              Icon={Map}
              text="Head office- 60 paya lebar road, #04-32, paya lebar square, singapore 409051"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar: Copyright and Links */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            Copyright ©{new Date().getFullYear()} All rights reserved |
            <span className="ml-1 text-gray-400 hover:text-red-400 transition-colors cursor-pointer">
              CapitalOne
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;