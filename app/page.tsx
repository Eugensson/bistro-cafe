import { Hero } from "@/components/hero";
import { Menu } from "@/components/menu";
import { Team } from "@/components/team";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Testimonial } from "@/components/testimonial";
import { Reservation } from "@/components/reservation";

const Home = () => {
  return (
    <section className="h-full bg-[url(/assets/body-bg-pattern.png)] bg-repeat max-w-450 mx-auto overflow-hidden">
      <Hero />
      <About />
      <Menu />
      <Team />
      <Testimonial />
      <Reservation />
      <Footer />
      <div className="h-95 md:h-92.5" id="contact" />
    </section>
  );
};

export default Home;
