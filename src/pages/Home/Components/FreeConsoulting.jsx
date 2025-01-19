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
      className="w-full bg-[#f9f4e8] flex justify-center items-center text-[#f9f4e8] py-[120px] md:py-[100px] sm:py-[40px]"
    >
      <div className="py-[100px] w-[90%] rounded-lg bg-[#1f1f1f] flex justify-center items-center flex-col gap-6 sm:gap-4 sm:py-[50px] sm:w-[90%]">
        <h1 className="text-[3rem] font-bold sm:text-[2rem] text-center">Lets Work Together</h1>

        <p className="opacity-[60%] text-center text-[1rem] sm:text-[0.875rem] px-4">
          We've helped many businesses save 50,000+ hours and $100K+ with
          automation. <br className="hidden sm:block" /> Let us do the same for your company.
        </p>

        <Link to={"/contact"}>
          <button className="bg-[#f9f4e8] hover:bg-[#e40e0e] hover:text-white transition-all duration-700 rounded-full flex justify-center items-center text-[#1f1f1f] py-[16px] px-[24px] sm:py-[12px] sm:px-[20px] font-[500] text-[1rem] sm:text-[0.875rem]">
            Book a Free Call →
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FreeConsoulting;
