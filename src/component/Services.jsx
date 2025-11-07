import {
  PiggyBank, Handshake, Sprout, DollarSign
} from 'lucide-react';

// --- Services Data ---
const SERVICES = [
  {
    title: 'Loans Against Shares',
    Icon: PiggyBank,
    description: 'A loan where you pledge your shares, mutual funds or life insurance policies as collateral.',
  },
  {
    title: 'Equity Derivatives',
    Icon: Handshake,
    description: 'Financial instruments whose value is based on equity movement of underlying assets.',
  },
  {
    title: 'Commodities',
    Icon: Sprout,
    description: 'Commodities are raw materials or agricultural products that can be bought or sold.',
  },
  {
    title: 'Wealth Management',
    Icon: DollarSign,
    description: 'Personalized financial planning & investment advisory to grow your wealth.',
  },
  {
    title: 'Commodities',
    Icon: Sprout,
    description: 'A commodity is a fungible economic good used in commerce.',
  },
  {
    title: 'Loans Against Shares',
    Icon: PiggyBank,
    description: 'Use your financial assets as collateral to unlock liquidity.',
  },
];

const ServiceCard = ({ service }) => {
  return (
    <div
      className="
        group p-6 rounded-xl relative overflow-hidden
        border border-[#D4AF37]/35
        shadow-[0_0_14px_rgba(212,175,55,0.18)]
        transition-all duration-300
        hover:shadow-[0_0_26px_rgba(212,175,55,0.55)]
        hover:scale-[1.04]

        flex flex-col items-center text-center
      "
      style={{
        background: "linear-gradient(145deg, #0b0b0b 0%, #1a1a1a 40%, #2e2a1f 100%)",
      }}
    >
      {/* Icon */}
      <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-lg bg-[#0F0F0F] border border-[#D4AF37]/50">
        <service.Icon className="w-8 h-8 text-[#D4AF37]" />
      </div>

      {/* Title */}
      <h3 className="text-[22px] font-semibold text-[#F8E9C9] group-hover:text-[#FFFFFF] transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[#CFCFCF] mt-2 leading-relaxed text-[15px] max-w-[260px]">
        {service.description}
      </p>

      {/* Gold Glow Hover Overlay */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-20
        bg-gradient-to-br from-[#D4AF37] to-transparent
        transition-opacity duration-500 pointer-events-none
      "></div>
    </div>
  );
};


const ServicesSection = ({ section }) => {

  // If section="about" → show only first 4 cards
  const displayedServices = section === "about" ? SERVICES.slice(0, 4) : SERVICES;

  return (
    <section id="services" className="py-16 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h2 className="text-4xl font-elMessiri font-bold text-center text-[#F2D7A6] mb-12 tracking-wide">
          {section === "about" ? "What We Offer" : "Our Services"}
        </h2>

        {/* Services Grid */}
        <div
          className={`grid gap-8
            ${section === "about"
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
            }
          `}
        >
          {displayedServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;