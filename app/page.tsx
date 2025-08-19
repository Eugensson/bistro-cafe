import { Hero } from "@/components/hero";
import { Menu } from "@/components/menu";
import { Team } from "@/components/team";
import { About } from "@/components/about";

const Home = () => {
  return (
    <section className="h-full bg-pattern bg-repeat max-w-450 mx-auto overflow-hidden">
      <Hero />
      <About />
      <Menu />
      <Team />
      <div className="h-400" />
    </section>
  );
};

export default Home;
