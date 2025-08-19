import Image from "next/image";
import { StaticImageData } from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export type Testimonial = {
  message: string;
  image: string | StaticImageData;
  name: string;
  occupation: string;
};

interface TestimonialCarouselProps {
  items: Testimonial[];
}

export const TestimonialCarousel = ({ items }: TestimonialCarouselProps) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      autoPlay={false}
      infiniteLoop={true}
      className="w-full max-w-256 flex justify-center items-center"
    >
      {items.map(({ message, image, name, occupation }) => (
        <div key={name} className="max-w-240 mx-auto px-14 md:px-24 text-white">
          <p className="mb-9 min-h-27 text-sm md:text-lg lg:text-2xl leading-snug line-clamp-5">
            {message}
          </p>
          <div className="max-w-17.5 lg:max-w-25 mx-auto mb-3">
            <Image src={image} alt={`${name} image`} />
          </div>
          <p className="font-bold text-[22px] text-accent">{name}</p>
          <p className="font-medium italic">{occupation}</p>
        </div>
      ))}
    </Carousel>
  );
};
