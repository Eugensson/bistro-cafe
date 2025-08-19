"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import aboutImg from "@/public/assets/about/plate.png";

import { plateVariants, fadeIn, staggerContainer } from "@/lib/variants";

export const About = () => {
  return (
    <section className="min-h-155">
      <div className="container min-h-155">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="min-h-155 flex flex-col lg:flex-row items-center"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1.8)}
            className="flex-1 text-center lg:text-left"
          >
            <p className="pretitle">our story</p>
            <h2 className="h2 capitalize">who we are</h2>
            <p className="mb-8 max-w-150">
              We are a dedicated team of professionals passionate about
              innovation, technology, and creativity. By combining experience
              and fresh ideas, we deliver high-quality digital products and
              customized solutions that help businesses grow and achieve their
              goals. Our mission is to create impactful services that drive
              success and leave a positive mark on society, turning every
              project into real value for our clients.
            </p>
            <button type="button" className="mx-auto lg:mx-0 btn capitalize">
              find out more
            </button>
          </motion.div>
          <motion.div variants={plateVariants} className="-mb-75 -mr-46.5 z-10">
            <Image
              src={aboutImg}
              alt="Plate with dish"
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
