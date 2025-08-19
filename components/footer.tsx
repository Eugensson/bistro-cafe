"use client";

import { motion } from "framer-motion";

import { Socials } from "@/components/socials";
import { Newsletter } from "@/components/newsletter";

import { fadeIn, staggerContainer } from "@/lib/variants";

export const Footer = () => {
  return (
    <footer className="relative top-96 z-20 pt-20 bg-dark lg:bg-transparent lg:bg-[url(/assets/footer/bg.jpg)] bg-center bg-no-repeat lg:min-h-155 lg:pt-32">
      <div className="container h-full">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="h-full flex flex-col gap-y-4"
        >
          <motion.div variants={fadeIn("up", "tween", 0.4, 1.6)}>
            <Newsletter />
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1.6)}
            className="flex flex-col lg:flex-row lg:gap-x-20 gap-y-12 lg:gap-y-0 lg:mb-12"
          >
            <div className="flex-1 lg:max-w-42.5">
              <h2 className="capitalize text-xl lg:text-[22px] font-normal font-primary text-white mb-[22px]">
                contact location
              </h2>
              <address className="capitalize not-italic">
                374 Adams Street, NYC, NY 11004
              </address>
              <p className="capitalize">(212) 555-7890</p>
            </div>
            <div className="flex-1 lg:max-w-125">
              <h2 className="capitalize text-xl lg:text-[22px] font-normal font-primary text-white mb-[22px]">
                working hours
              </h2>
              <ul className="flex gap-x-6">
                <li className="flex flex-col capitalize">
                  <span className="text-base xl:text-lg">monday - friday</span>
                  <span className="text-base xl:text-lg text-accent">
                    09:00 AM - 10:00 PM
                  </span>
                </li>
                <li className="flex flex-col capitalize">
                  <span className="text-base xl:text-lg">
                    saturday - sunday
                  </span>
                  <span className="text-base xl:text-lg text-accent">
                    09:00AM - 11:00PM
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex-1 lg:max-w-70 mb-12">
              <h2 className="capitalize text-xl lg:text-[22px] font-normal font-primary text-white mb-[22px]">
                social network
              </h2>
              <Socials />
            </div>
          </motion.div>
          <p className="py-6 container text-sm text-center border-t border-white/20">
            Copyright &copy; 2025 Bistro Cafe. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
