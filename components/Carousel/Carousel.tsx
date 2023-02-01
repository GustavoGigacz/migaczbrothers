import { Swiper, SwiperSlide } from "swiper/react";
import CarouselItems from "./CarouselItems";

import "swiper/css";
import styled from "styled-components";
import { Autoplay } from "swiper";

import FigmaIcon from "../icons/FigmaIcon";
import AirbnbIcon from "../icons/AirbnbIcon";
import ZoomIcon from "../icons/ZoomIcon";

import NodeIcon from "../icons/NodeIcon";
import FacebookIcon from "../icons/FacebookIcon";
import IfoodIcon from "../icons/IfoodIcon";

const CarouselCards = [
  {
    title: "Figma",
    paragraph:
      "Figma is a powerful design and prototyping tool that helps us create, share, and collaborate on designs with you. With Figma, we can provide you with wireframes, prototypes, and fully-designed screens all in one place.",
    icon: FigmaIcon,
    socialProof: [AirbnbIcon, ZoomIcon],
  },
  {
    title: "a",
    paragraph: "a",
    icon: NodeIcon,
    socialProof: [IfoodIcon, FacebookIcon],
  },
  {
    title: "a",
    paragraph: "a",
    icon: NodeIcon,
    socialProof: [IfoodIcon, FacebookIcon],
  },
  {
    title: "a",
    paragraph: "a",
    icon: NodeIcon,
    socialProof: [IfoodIcon, FacebookIcon],
  },
  {
    title: "a",
    paragraph: "a",
    icon: NodeIcon,
    socialProof: [IfoodIcon, FacebookIcon],
  },
];

const CarouselList = (): JSX.Element => {
  return (
    <SwiperContainer>
      <Title>Tech stack we work with</Title>
      <Swiper
        spaceBetween={50}
        slidesPerView={"auto"}
        centeredSlides
        loop
        autoplay={{
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
      >
        {CarouselCards.map((tech, key) => (
          <CustomSwiperSlide key={`tech_${tech.title + key}`}>
            <CarouselItems
              title={tech.title}
              paragraph={tech.paragraph}
              Icon={tech.icon}
              socialProof={tech.socialProof}
            />
          </CustomSwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
  background-color: #161616;
  max-width: 100%;
`;
const Title = styled.h2`
  font-size: 40px;
  color: var(--primary-color-font);
  font-weight: 600;
  width: 1400px;
  margin: 0 auto;
  padding: 50px 16px;
`;

const CustomSwiperSlide = styled(SwiperSlide)`
  max-width: 384px;
  min-width: 300px;
  width: 100%;
  height: 520px;
  cursor: pointer;
`;

export default CarouselList;
