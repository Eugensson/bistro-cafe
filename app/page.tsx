import { Hero } from "@/components/hero";
import { About } from "@/components/about";

const Home = () => {
  return (
    <section className="h-full bg-pattern bg-repeat max-w-450 mx-auto overflow-hidden">
      <Hero />
      <About />
      <div className="h-400" />
    </section>
  );
};

export default Home;
