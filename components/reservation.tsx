"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa6";

import modelDarkImg from "@/public/assets/model-black.png";

import { fadeIn, staggerContainer } from "@/lib/variants";

const SelectedDate = dynamic(() => import("./selected-date"), { ssr: false });
const SelectedTime = dynamic(() => import("./selected-time"), { ssr: false });

export const Reservation = () => {
  return (
    <section
      className="relative top-96 z-30 pb-20 lg:py-[100px]"
      id="book a table"
    >
      <div className="container">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="text-center"
        >
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1.6)}
            className="h2 capitalize"
          >
            Booking Form
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.4, 1.6)}
            className="mb-8 text-dark"
          >
            Call (800) 123-4567 from 5AM - 11PM daily, or book online with
            OpenTable. Reservations required for parties of 6 or more.
          </motion.p>
          <motion.div
            variants={fadeIn("up", "tween", 0.6, 1.6)}
            className="flex justify-center mb-8"
          >
            <Image src={modelDarkImg} alt="Divider" />
          </motion.div>
        </motion.div>
        <motion.form
          variants={fadeIn("up", "tween", 0.7, 1.6)}
          initial="hidden"
          whileInView={"show"}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-y-4 mb-8">
            <SelectedDate />
            <SelectedTime />
            <div>
              <div className="flex items-center gap-x-2.5 font-semibold text-dark text-base mb-3">
                <FaUsers />
                <span>How many people?</span>
              </div>
              <input type="text" className="input" placeholder="1" />
            </div>
          </div>
          <div className="max-w-[316px] flex justify-center mx-auto">
            <button type="button" className="btn capitalize w-full lg:w-auto">
              Make a reservation
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
