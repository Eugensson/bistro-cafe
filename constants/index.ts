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
import Avatar1 from "@/public/assets/testimonial/avatar1.png";
import Avatar2 from "@/public/assets/testimonial/avatar2.png";
import Avatar3 from "@/public/assets/testimonial/avatar3.png";

export const NAV_LINKS = [
  { label: "home" },
  { label: "about" },
  { label: "menu" },
  { label: "team" },
  { label: "testimonial" },
  { label: "book a table" },
  { label: "contact" },
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

export const TESTIMONIAL_DATA = [
  {
    message:
      "This café always has a pleasant atmosphere and delicious dishes! The coffee here is simply incredible, and the desserts are always fresh. The service is top-notch, I highly recommend it to everyone!",
    image: Avatar1,
    name: "Rick Thompson",
    occupation: "Photographer",
  },
  {
    message:
      "Every time I visit, I can't help but enjoy the wonderful dishes. I'll definitely come back, as it's always delicious and cozy here. I also love the interior design!",
    image: Avatar2,
    name: "Adam Fernandez",
    occupation: "CEO of Delightful",
  },
  {
    message:
      "I've visited this café multiple times, and each time I am impressed by the service quality. It's a great place to spend time with friends or for solo work. Highly recommend it!",
    image: Avatar3,
    name: "Frank Jackson",
    occupation: "Creative Designer",
  },
];
