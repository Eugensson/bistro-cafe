"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import chefImg from "@/public/assets/team/chef.png";
import signatureImg from "@/public/assets/team/signature.png";

import { fadeIn } from "@/lib/variants";

export const Team = () => {
  return (
    <section className="relative top-96 lg:top-120 min-h-180 z-10">
      <div className="container flex flex-col lg:flex-row items-center lg:items-start lg:gap-x-32">
        <motion.div
          variants={fadeIn("down", "tween", 0.6, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex-1 text-center lg:text-left lg:pt-16"
        >
          <p className="pretitle">our team</p>
          <h2 className="h2 capitalize">meet our chef</h2>
          <p className="mb-8">
            At Bistro Cafe, our team is passionate about creating high-quality
            dishes that blend culinary innovation with authentic traditional
            recipes. Every meal is thoughtfully prepared to highlight both
            modern flavors and timeless classics.
          </p>
          <p>
            Using only fresh, locally sourced ingredients, we craft unique
            dining experiences that delight the senses. From breakfast to
            dinner, our restaurant is dedicated to offering guests unforgettable
            moments of taste, comfort, and true hospitality.
          </p>
          <div className="my-6">
            <p className="text-2xl capitalize font-semibold text-accent">
              olaf benjamin
            </p>
            <p className="text-base font-semibold capitalize text-grey/70">
              executive chef
            </p>
          </div>
          <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
            <Image
              src={signatureImg}
              alt="Facsimile signature of chef bistro"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.7, 1.6)}
          initial="hidden"
          whileInView={"show"}
          className="flex-1"
        >
          <Image src={chefImg} alt="Photo chef of bistro" />
        </motion.div>
      </div>
    </section>
  );
};
