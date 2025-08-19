"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink, Events } from "react-scroll";

import { NAV_LINKS } from "@/constants";

export const Nav = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  if (!isMounted)
    return (
      <nav className="w-full h-full">
        <ul className="h-full flex flex-col justify-center items-center gap-y-6">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={label}>
              <ScrollLink
                to={id}
                spy={true}
                smooth={true}
                className="text-xl capitalize font-primary italic hover:text-dark transition-colors duration-300"
                activeClass="active"
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    );

  return (
    <nav className="w-full h-full">
      <ul className="h-full flex flex-col justify-center items-center gap-y-6">
        {NAV_LINKS.map(({ id, label }) => (
          <li key={label}>
            <ScrollLink
              to={id}
              spy={true}
              smooth={true}
              className="text-xl capitalize font-primary italic hover:text-dark transition-colors duration-300"
              activeClass="active"
            >
              {label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
