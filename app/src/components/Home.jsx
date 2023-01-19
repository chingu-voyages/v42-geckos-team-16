import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { firstImage, secondImage, thirdImage } from "../images/images";
import CarouselItem from "./Carousel";


const images = [
  {
    src: firstImage,
    heading: "Shop with us",
    name: "Watch",
    description: "A wide variety of products at your disposal",
  },
  {
    src: secondImage,
    heading: "Find your joy",
    name: "Speaker",
    description: "We sell everything you need",
  },
  {
    src: thirdImage,
    heading: "New Year's Promotion",
    name: "Earphone",
    description: "Browse through our rich catalogues",
  },
];

export const Home = () => {
  return (
    <div>
     
      <Carousel slide={false}>
        {images.map((image, _index) => {
          return (
            <Carousel.Item key={new Date() * _index} className="m-0">
              <CarouselItem
                imgsrc={image.src}
                description={image.description}
                alt={image.name}
                heading={image.heading}
              >
                <button className="btn btn-primary">Get Started</button>
              </CarouselItem>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
