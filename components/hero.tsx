"use client";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "@/lib/variants";

export const Hero = () => {
  return (
    <section
      className="min-h-245 bg-[url(/assets/hero/bg.jpg)] bg-cover bg-right bg-no-repeat"
      id="home"
    >
      <div className="container min-h-235 flex justify-center items-center">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="flex flex-col items-center text-center"
        >
          <motion.p
            variants={fadeIn("down", "tween", 0.2, 1.1)}
            className="text-2xl lg:text-3xl text-white font-primary italic lg:font-medium mb-1"
          >
            Nothing brings together like
          </motion.p>
          <motion.h1
            variants={fadeIn("down", "tween", 0.3, 1.1)}
            className="h1 mb-5"
          >
            Bistro Cafe
          </motion.h1>
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1.1)}
            className="max-w-150 mb-8 text-white"
          >
            Bistro Cafe – a modern café offering freshly brewed coffee, homemade
            pastries, and signature European dishes. With a cozy atmosphere,
            relaxing music, and friendly service, it’s the perfect spot for
            breakfast, casual dining, business meetings, or evening relaxation.
            Discover the real taste of life at Bistro Cafe!
          </motion.p>
          <motion.div variants={fadeIn("down", "tween", 0.5, 1.1)}>
            <button type="button" className="btn">
              Find out more
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
