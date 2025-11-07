import React from "react";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DealCard = ({ deal, type = "normal" }) => {
  const sliderRef = React.useRef(null);

  const images = React.useMemo(() => {
    if (!deal) return [];
    if (!deal.images) return [];
    return Array.isArray(deal.images) ? deal.images : [deal.images];
  }, [deal]);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="
        group w-full max-w-[397px]
        bg-[#111111]
        border border-[#E5C07B]/20
        rounded-none rounded-tr-[18px]
        overflow-hidden flex flex-col
        shadow-[0_0_18px_rgba(229,192,123,0.15)]
        transition-all duration-300
        hover:shadow-[0_0_32px_rgba(229,192,123,0.45)]
        hover:scale-[1.03]
      "
    >
      {/* Image Section */}
      <div className="relative w-full h-[268px]">
        {deal.video ? (
          <video src={deal.video} controls className="w-full h-full object-cover" />
        ) : images.length > 1 ? (
          <Slider ref={sliderRef} {...sliderSettings}>
            {images.map((img, i) => (
              <div key={i} className="w-full h-full">
                <img src={img} alt={`deal-${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </Slider>
        ) : (
          <img src={images[0]} alt="deal" className="w-full h-full object-cover" />
        )}

        {/* Rating Badge */}
        {/* <div className="absolute top-3 right-3 bg-[#111111]/90 border border-[#E5C07B]/40 px-2 py-[3px] rounded-md flex items-center gap-1">
          <span className="text-[#E5C07B] text-[14px]">★</span>
          <span className="text-[#E5C07B] font-medium text-[14px]">
            {deal.rating ?? "--"}
          </span>
        </div> */}

        {/* Slider Controls */}
        {!deal.video && images.length > 1 && (
          <>
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 border border-[#E5C07B]/40 p-2 rounded-full hover:bg-black/60"
            >
              <LeftOutlined className="text-[#E5C07B]" />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 border border-[#E5C07B]/40 p-2 rounded-full hover:bg-black/60"
            >
              <RightOutlined className="text-[#E5C07B]" />
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2">
        <h3
          className="
            text-[24px] font-semibold font-elMessiri
            text-[#E5C07B]
            group-hover:text-[#F2D7A6]
            transition-colors
          "
        >
          {deal.title}
        </h3>

        {/* <p className="text-[#CCCCCC] text-[15px] mb-1">
          Starting at
        </p>

        <p className="text-[#F2D7A6] text-[22px] font-bold">
          ₹{deal.price}
        </p> */}
      </div>
    </div>
  );
};

export default DealCard;
