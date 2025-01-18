import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const comments = [
  {
    name: "Adeline M.",
    p: ` They helped us streamline our workflow and cut down our workload significantly. We are now able to focus on what matters most to our business, and it has resulted in a noticeable increase in productivity."`,
  },
  {
    name: "Trevor D.",
    p: `" which has given me back so much time in my day. I can now focus on the things that I'm passionate about in my business without feeling overwhelmed."`,
  },
  {
    name: "Meredith L.",
    p: `" the way to go. They helped me automate everything from social media management to customer support, which has allowed me to take my business to the next level without burning out."`,
  },
  {
    name: "Michael H.",
    p: `" a significant increase in productivity. I can't imagine running my business without their help."`,
  },
  {
    name: "Alice K.",
    p: `"ate all of my repetitive tasks, which has given me more time to focus on the things that matter most in my business. I'm so grateful for their help!"`,
  },
  {
    name: "Corey W.",
    p: `"and energy. I no longer feel like I'm drowning in my work, and I'm able to focus on growing my business."`,
  },
];

const companyLogos = [
  {
    name: "Company 1",
    img: `https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Funicon-soft.png&w=640&q=75`,
  },
  {
    name: "Company 1",
    img: `https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FTL.png&w=640&q=75`,
  },
  {
    name: "Company 1",
    img: `https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Fasaxiy.png&w=640&q=75`,
  },
  {
    name: "Company 1",
    img: `https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FitechArt.png&w=640&q=75`,
  },
  {
    name: "Company 1",
    img: `https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2Fjafton.png&w=640&q=75`,
  },
  {
    name: "Company 1",
    img: `https://najottalim.uz/_next/image?url=%2Fimages%2Fbrands%2FMars.png&w=640&q=75`,
  },
];

const CommentSlider = () => {
  const commentSliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };

  const logoSliderSettings1 = {
    ...commentSliderSettings,
    slidesToShow: 6,
    rtl: true,
    autoplaySpeed: 0,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };
  const logoSliderSettings2 = {
    ...commentSliderSettings,
    slidesToShow: 6,
    rtl: false,
    speed: 3000,
    autoplaySpeed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto px-4 py-[40px] text-[#f9f4e8] bg-[#1f1f1f]">
      <Slider {...commentSliderSettings}>
        {comments.map((e, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: -60 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
            initial="hidden"
            whileInView="visible"
            className="relative h-[250px] text-[#f9f4e8] bg-[#1f1f1f] border border-gray-400 max-w-[90%] rounded-[20px] p-[24px]"
          >
            <div className="flex flex-col justify-between h-full relative">
              <p className="opacity-60 text-lg leading-[140%]">{e.p}</p>
              <h1 className="flex gap-2 items-center text-lg leading-[120%] font-medium tracking-[0.5px]">
                {e.name}
                <span className="text-[22px] text-[#f4db21] leading-[140%] font-normal">
                  ★★★★★
                </span>
              </h1>
            </div>
          </motion.div>
        ))}
      </Slider>

      <div className="mt-[90px] flex flex-col gap-2">
        <Slider {...logoSliderSettings1}>
          {companyLogos.map((logo, index) => (
            <div key={index} className="px-4">
              <img className="ml-4 md:max-w-[240px] md:max-h-[70px]" src={logo.img} alt={logo.name} />
            </div>
          ))}
        </Slider>
        <Slider {...logoSliderSettings2}>
          {companyLogos.map((logo, index) => (
            <div key={index} className="px-4">
              <img className="ml-4  md:max-w-[240px] md:max-h-[70px]" src={logo.img} alt={logo.name} />
            </div>
          ))}
        </Slider>
        <Slider {...logoSliderSettings1}>
          {companyLogos.map((logo, index) => (
            <div key={index} className="px-4">
              <img className="ml-4  md:max-w-[240px] md:max-h-[70px]" src={logo.img} alt={logo.name} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CommentSlider;
