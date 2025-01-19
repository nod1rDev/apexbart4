import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function Vocansiya() {
  const [open, setOpen] = useState(false);

  // Function to create animation controls and refs
  const useScrollAnimation = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    React.useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);

    return { ref, controls };
  };

  // Variants for motion animations
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  };

  // Animation hooks for different sections
  const headerAnimation = useScrollAnimation();
  const listAnimation = useScrollAnimation();
  const offerHeaderAnimation = useScrollAnimation();

  return (
    <>
      <section id="vocansiya" className="mt-[100px]  pb-10 w-[90%] mx-auto">
        <h1 className="text-[2.2rem] font-seaction text-center mb-10 leading-[2rem] md:leading-[2.6rem] md:text-[3rem] my-[1rem] font-bold uppercase">
          <span className="text-red-600">Our </span>current offers
        </h1>

        <div className="flex flex-col gap-[2rem]">
          {[...Array(5)].map((_, i) => {
            const cardAnimation = useScrollAnimation(); // Create individual animation for each card
            return (
              <div
                ref={cardAnimation.ref}
                key={i}
                className="flex flex-col cursor-pointer gap-2 group"
              >
                <div className="uppercase text-[1.25rem] font-[500] leading-1 rounded-2xl px-2 py-1 bg-[#1f1f1f] text-[#f9f4e8] flex w-full justify-between items-center">
                  <span>Menager</span>
                  <div className="flex gap-2 items-center">
                    <span>Open</span>
                    <span
                      id="dumaloq"
                      className="w-[18px] h-[18px] bg-[#b40a0a] rounded-full animate-pulse"
                      style={{
                        backgroundColor: "#b40a0a",
                        animation: "colorChange 2s infinite",
                      }}
                    ></span>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center text-[1rem] leading-[1.3]">
                      <span>📄</span>
                      <span>
                        Loyihani boshqarish vositasini ishlab chiqishni
                        boshlash.
                      </span>
                    </div>

                    <div className="flex gap-2 items-center text-[1rem] leading-[1.3]">
                      <span>💸</span>
                      <span>80 ming evrogacha.</span>
                    </div>

                    <div className="flex gap-2 items-center text-[1rem] leading-[1.3]">
                      <span>📍</span>
                      <span>Parij, uzoq gibrid.</span>
                    </div>
                  </div>

                  <div
                    onClick={() => setOpen(true)}
                    className="hidden text-red-600 group-hover:block transition-all duration-700 mr-2 text-[1.5rem] font-[500]"
                  >
                    <Link to={"/contact"}>Contact</Link>
                  </div>
                </div>
              </div>
            );
          })}

          {[...Array(2)].map((_, i) => {
            const cardAnimation = useScrollAnimation(); // Create individual animation for each card
            return (
              <div key={i} className="flex flex-col cursor-pointer gap-2 group">
                <div className="uppercase text-[1.25rem] font-[500] leading-1 rounded-2xl px-2 py-1 bg-[#1f1f1f] text-[#f9f4e8] flex w-full justify-between items-center">
                  <span>Menegeri</span>
                  <div className="flex gap-2 items-center">
                    <span>Close</span>
                  </div>
                </div>
              </div>
            );
          })}
          <style>
            {`
      @keyframes colorChange {
        0%, 100% {
          background-color: #ce0d0d;
        }
        50% {
          background-color: #f9f4e8;
        }
      }
    `}
          </style>
        </div>
      </section>
    </>
  );
}

export default Vocansiya;
