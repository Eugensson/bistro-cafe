import Link from "next/link";

import { NAV_LINKS } from "@/constants";

export const Nav = () => {
  return (
    <nav className="w-full h-full">
      <ul className="h-full flex flex-col justify-center items-center gap-y-6">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-xl capitalize font-primary italic hover:text-dark transition-colors duration-300"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
