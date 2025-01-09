import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function FreeConsoulting() {
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.prod.website-files.com/6427c6c769d01c2f58037956/6429745b66cfe6b77f861dbe_Line%206.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
      }}
      className="w-full bg-[#f9f4e8] flex justify-center items-center text-[#f9f4e8] py-[140px]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2 },
          },
        }}
        className=" py-[100px]  w-[70%] rounded-lg bg-[#1f1f1f] flex justify-center items-center flex-col gap-6"
      >
        <h1 className="text-[3rem] font-bold">Lets Work Together</h1>

        <p className=" opacity-[60%] text-center">
          We've helped many businesses save 50,000+ hours and $100K+ with
          automation. <br /> Let us do the same for your company.
        </p>

        <Link to={"/contact"}>
          <button className="bg-[#f9f4e8] hover:bg-[#e40e0e] hover:text-white transition-all duration-700 rounded-full flex justify-center items-center text-[#1f1f1f]  text-orange-[60%] py-[16px] px-[24px] font-[500]">
            Book a Free Call →
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default FreeConsoulting;
