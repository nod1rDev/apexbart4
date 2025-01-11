import React, { useState, useEffect, Suspense, lazy } from "react";
import { motion } from "framer-motion";

const Spline = lazy(() => import("@splinetool/react-spline"));

function Support() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5 },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplineLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="support" className="relative w-full overflow-hidden">
      <div className="relative w-full  min-h-screen  flex flex-col md:flex-row items-center">
        {/* Spline container */}
        <div className="absolute hidden md:flex  inset-0 md:relative md:w-[100%] h-[100vh] md:order-2">
          <Suspense fallback={<div className="bg-inherit"></div>}>
            {isSplineLoaded && (
              <Spline 
                className="w-full z-auto h-full object-cover"
                scene="https://prod.spline.design/tgMcFTnH9Gg2BrfP/scene.splinecode" 
                onLoad={() => console.log('Spline scene loaded')}
              />
            )}
          </Suspense>
        </div>

        {/* Text content */}
        <div className="relative z-10 w-full md:ml-10 md:w-1/2 h-full flex items-center md:order-1  bg-opacity-80 md:bg-opacity-100">
          <motion.div
            className="text-[#1f1f1f] font-heading font-bold px-6 md:px-12 py-12 md:py-0 text-[4.6rem] leading-[5rem] sm:text-[3.5rem] md:text-[8vw] md:leading-[7.6vw] w-full  uppercase"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            AI <br />
            <span className="text-red-600 animate-inherit">Data</span> <br />
            science <br />
            <span className="text-red-600 animate-inherit">analytics</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Support;

