import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { BackgroundImage } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

export const CarouselItems = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return <Carousel loop withIndicators classNames={{
    container: 'lg:h-[600px] h-[300px]'
  }} plugins={[autoplay.current]}>
    <Carousel.Slide>
      <BackgroundImage src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" className="w-full h-full" />
    </Carousel.Slide>
    <Carousel.Slide>
      <BackgroundImage src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" className="w-full h-full" />
    </Carousel.Slide>
    <Carousel.Slide>
      <BackgroundImage src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" className="w-full h-full" />
    </Carousel.Slide>
  </Carousel>
}