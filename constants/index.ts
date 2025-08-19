import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
  RiYoutubeLine,
  RiDiscordLine,
} from "react-icons/ri";

import MenuImg1 from "@/public/assets/menu/1.jpg";
import MenuImg2 from "@/public/assets/menu/2.jpg";
import MenuImg3 from "@/public/assets/menu/3.jpg";
import MenuImg4 from "@/public/assets/menu/4.jpg";

export const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/", label: "about" },
  { href: "/", label: "menu" },
  { href: "/", label: "team" },
  { href: "/", label: "testimonials" },
  { href: "/", label: "book a table" },
  { href: "/", label: "contact" },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com/", icon: RiFacebookFill },
  { label: "Instagram", href: "https://instagram.com/", icon: RiInstagramLine },
  { label: "Twitter X", href: "https://x.com/", icon: RiTwitterXFill },
  { label: "Youtube", href: "https://youtube.com/", icon: RiYoutubeLine },
  { label: "Discord", href: "https://discord.com/", icon: RiDiscordLine },
];

export const MENU_ITEMS = [
  {
    image: MenuImg1,
    title: "Chocolate Cake",
    price: "$7.99",
    description:
      "A tender chocolate sponge soaked in cocoa cream, topped with glaze and grated dark chocolate.",
  },
  {
    image: MenuImg2,
    title: "Veggie Burger",
    price: "$9.49",
    description:
      "A juicy veggie patty with spinach and chickpeas, served in a soft bun with avocado sauce.",
  },
  {
    image: MenuImg3,
    title: "King Burger",
    price: "$8.50",
    description:
      "A fluffy bun with a juicy beef patty, cheddar cheese, caramelized onions, and signature sauce.",
  },
  {
    image: MenuImg4,
    title: "Mexican Burger",
    price: "$9.99",
    description:
      "A spicy burger with hot jalapeños, salsa sauce, a juicy patty, and mozzarella cheese.",
  },
];
