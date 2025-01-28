import React, {
  lazy,
  useEffect,
  useState,
} from 'react';

import { motion } from 'framer-motion';

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
      <div className="relative w-full mb-6 md:mb-0 md:min-h-screen mt-5 flex flex-col md:flex-row items-center">
        {/* Spline container */}
        <div className="absolute flex  inset-0 md:relative md:w-[90%] h-[90vh] md:order-2">
          <div className="w-full z-auto h-full object-cover">
            {" "}
            <img className="  hidden md:block md:w-[90%] md:h-[90%]" src="/robotBg.png" alt="" />
          </div>
        </div>

        {/* Text content */}
        <div className="relative   w-full md:ml-10 md:w-1/2 h-full flex items-center md:order-1  bg-opacity-80 md:bg-opacity-100">
          <motion.div
            className="text-[#1f1f1f] font-heading font-bold px-6 md:px-12 py-12 md:py-0 text-[4rem] leading-[5rem] sm:text-[3.5rem] md:text-[8vw] md:leading-[7.6vw] w-full  uppercase"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            AIIIII <br />
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
