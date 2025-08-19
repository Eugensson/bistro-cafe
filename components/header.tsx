"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

import { Nav } from "@/components/nav";
import { Socials } from "@/components/socials";
import LogoWhite from "@/public/assets/header/logo-white.png";

import {
  fadeIn,
  staggerContainer,
  headerVariants,
  navVariants,
} from "@/lib/variants";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        nav &&
        !event
          .composedPath()
          .some((el) =>
            (el as HTMLElement)?.classList?.contains("nav-container")
          )
      ) {
        setNav(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [nav]);

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={isScrolled ? "show" : ""}
      className="fixed z-50 py-4 w-full max-w-[1800px]"
    >
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        animate="show"
        className="container"
      >
        <div className="relative flex items-center justify-between px-4 lg:px-0 text-white">
          <motion.div
            role="button"
            aria-label="Toggle navigation"
            variants={fadeIn("down", "tween", 1, 1.4)}
            className={twMerge(
              "flex flex-col items-center justify-center w-12 h-12 p-3 order-2 lg:order-none cursor-pointer border-2 rounded-full",
              nav ? "gap-y-0" : "gap-y-2"
            )}
            onClick={() => setNav((prev) => !prev)}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: nav ? -45 : 0, translateY: nav ? 2 : 0 }}
              className="w-full h-0.5 bg-white"
            />
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: nav ? 45 : 0 }}
              className="w-full h-0.5 bg-white"
            />
          </motion.div>

          <motion.div
            variants={fadeIn("down", "tween", 1.2, 1.4)}
            className="order-1 lg:order-none lg:ml-[11rem]"
          >
            <Link href="/">
              <Image
                src={LogoWhite}
                alt="logo"
                className={twMerge(
                  isScrolled ? "w-[90px] h-[90px]" : "w-[107px] h-[107px]"
                )}
              />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn("down", "tween", 1.4, 1.4)}
            className="hidden lg:block"
          >
            <Socials />
          </motion.div>

          <motion.div
            variants={navVariants}
            initial="hidden"
            animate={nav ? "show" : ""}
            exit="hidden"
            className="nav-container absolute z-50 top-[120px] right-0 lg:left-0 bottom-0 w-[310px] h-[60vh] bg-accent rounded-lg shadow-xl"
          >
            <Nav />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};
