import { Phone, Mail, MapPin, Map, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const socialIcons = [
    { Icon: Facebook, href: '#facebook' },
    { Icon: Twitter, href: '#twitter' },
    { Icon: Linkedin, href: '#linkedin' },
    { Icon: Instagram, href: '#instagram' },
    { Icon: Youtube, href: '#youtube' },
  ];

  const ContactItem = ({ Icon, text, link, isFax = false }) => (
    <div className="flex items-start mb-3 text-sm">
      <div className="mr-3 mt-1 shrink-0 text-[#D4AF37]">
        <Icon className={`w-4 h-4 ${isFax ? 'rotate-90' : ''}`} />
      </div>
      {link ? (
        <a
          href={link}
          className="text-[#F5F5F5] hover:text-[#D4AF37] transition-colors"
        >
          {text}
        </a>
      ) : (
        <p className="text-[#C8C8C8] leading-relaxed">{text}</p>
      )}
    </div>
  );

  return (
    <footer className="bg-[#0D0D0D] text-[#F5F5F5]  border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

          {/* Logo + Description */}
          <div>
            <div className="flex items-center text-3xl font-extrabold cursor-default mb-4">
              <span className="text-[#D4AF37]">Octa</span>
              {/*<span className="text-[#D4AF37] text-4xl">X</span>*/}
              <span className="text-[#F5F5F5] ml-1">Broking</span>
            </div>

            <p className="text-[#C8C8C8] text-sm mb-6">
              We provide premium trading insights and guidance to help you make
              informed financial decisions in global markets.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              {socialIcons.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-[#D4AF37]/50 rounded-full text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 hover:shadow-[0_0_12px_#D4AF37]"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-6">Contact</h3>

            <ContactItem Icon={Phone} text="+91- +61 28863 2866" link="tel:+9161288632866" />
            <ContactItem Icon={Mail} text="support@cxmeta.com" link="mailto:support@cxmeta.com" />
            <ContactItem Icon={MapPin} text="World Trade Centre 23rd Floor, Brigade Bangalore 560055" />
            <ContactItem Icon={Phone} text="FAX: - +61 28076 8664" isFax />
            <ContactItem Icon={Map} text="Head Office: 60 Paya Lebar Road, #04-32 Singapore 409051" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-[#C8C8C8]">
          © {new Date().getFullYear()} All Rights Reserved — 
          <span className="text-[#D4AF37] ml-1 cursor-pointer hover:underline">
            OctaBroking
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
