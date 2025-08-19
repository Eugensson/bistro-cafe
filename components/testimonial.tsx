"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import modelWhiteImg from "@/public/assets/model-white.png";
import {
  TestimonialCarousel,
  Testimonial as TestimonialType,
} from "@/components/testimonial-carousel";

import { fadeIn } from "@/lib/variants";
import { TESTIMONIAL_DATA } from "@/constants";

export const Testimonial = () => {
  return (
    <section
      className="bg-[url(/assets/testimonial/bg.png)] bg-cover bg-no-repeat relative z-10 top-85 lg:top-120 h-200 pt-16 md:pt-32"
      id="testimonial"
    >
      <div className="container">
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex flex-col items-center capitalize text-center"
        >
          <h2 className="h2 text-white">what client&apos;s say</h2>
          <p className="text-white/70 mb-8">1500+ statisfied clients</p>
          <div className="mb-12">
            <Image src={modelWhiteImg} alt="Divider" />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex justify-center items-center"
        >
          <TestimonialCarousel items={TESTIMONIAL_DATA as TestimonialType[]} />
        </motion.div>
      </div>
    </section>
  );
};
