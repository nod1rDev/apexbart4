import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const comments = [
  {
    name: "Adeline M.",
    p: `"Our company was struggling to keep up with the demands of our growing business until we found this automation agency. They helped us streamline our workflow and cut down our workload significantly. We are now able to focus on what matters most to our business, and it has resulted in a noticeable increase in productivity."`,
  },
  {
    name: "Trevor D.",
    p: `"I was skeptical at first about using an automation agency, but I am so glad I did. They helped me automate all of my repetitive tasks, which has given me back so much time in my day. I can now focus on the things that I'm passionate about in my business without feeling overwhelmed."`,
  },
  {
    name: "Meredith L.",
    p: `"If you're looking for a way to scale your business without sacrificing your personal life, then this automation agency is the way to go. They helped me automate everything from social media management to customer support, which has allowed me to take my business to the next level without burning out."`,
  },
  {
    name: "Michael H.",
    p: `"This automation agency has been a game-changer for my business. They helped me automate my entire workflow, which has resulted in a significant increase in productivity. I can't imagine running my business without their help."`,
  },
  {
    name: "Alice K.",
    p: `"If you're tired of feeling like you're always behind on your work, then you need to work with this automation agency. They helped me automate all of my repetitive tasks, which has given me more time to focus on the things that matter most in my business. I'm so grateful for their help!"`,
  },
  {
    name: "Corey W.",
    p: `"I can't recommend this automation agency enough. They have helped me automate my entire workflow, which has saved me so much time and energy. I no longer feel like I'm drowning in my work, and I'm able to focus on growing my business."`,
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
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    speed: 2000,
    autoplaySpeed: 2000,
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
    speed: 2000,
    autoplaySpeed: 2000,
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
    <div className="w-full mx-auto px-4 py-[90px] text-[#f9f4e8] bg-[#1f1f1f]">
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
            className="relative h-[350px] text-[#f9f4e8] bg-[#1f1f1f] border border-gray-400 max-w-[390px] rounded-[20px] p-[32px]"
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

      <div className="mt-[90px] flex flex-col gap-6">
        <Slider {...logoSliderSettings1}>
          {companyLogos.map((logo, index) => (
            <div key={index} className="px-4">
              <img className="ml-10" src={logo.img} alt={logo.name} />
            </div>
          ))}
        </Slider>
        <Slider {...logoSliderSettings2}>
          {companyLogos.map((logo, index) => (
            <div key={index} className="px-4">
              <img className="ml-10" src={logo.img} alt={logo.name} />
            </div>
          ))}
        </Slider>
        <Slider {...logoSliderSettings1}>
          {companyLogos.map((logo, index) => (
            <div key={index} className="px-4">
              <img className="ml-10" src={logo.img} alt={logo.name} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CommentSlider;