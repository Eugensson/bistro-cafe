import { Hero } from "@/components/hero";

const Home = () => {
  return (
    <section className="h-full bg-pattern bg-repeat max-w-450 mx-auto overflow-hidden">
      <Hero />
      <div className="h-400" />
    </section>
  );
};

export default Home;
