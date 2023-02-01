import { Swiper, SwiperSlide } from "swiper/react";
import CarouselItems from "./CarouselItems";

import "swiper/css";
import styled from "styled-components";
import { Autoplay } from "swiper";

import FigmaIcon from "../icons/FigmaIcon";
import AirbnbIcon from "../icons/AirbnbIcon";
import ZoomIcon from "../icons/ZoomIcon";

import NodeIcon from "../icons/NodeIcon";
import MediumIcon from "../icons/MediumIcon";
import NetflixIcon from "../icons/NetflixIcon";

import PostgreSQLIcon from "../icons/PostgreSQLIcon";
import RobinhoodIcon from "../icons/RobinhoodIcon";
import NasaIcon from "../icons/NasaIcon";

import NextIcon from "../icons/NextIcon";
import TypeformIcon from "../icons/TypeformIcon";
import NotionIcon from "../icons/NotionIcon";

import Netifly from "../icons/NetflyIcon";
import SanityIcon from "../icons/SanityIcon";
import NikeIcon from "../icons/NikeIcon";

const CarouselCards = [
  {
    title: "Figma",
    paragraph:
      "Figma is a powerful design and prototyping tool that helps us create, share, and collaborate on designs with you. With Figma, we can provide you with wireframes, prototypes, and fully-designed screens all in one place.",
    icon: FigmaIcon,
    socialProof: [AirbnbIcon, ZoomIcon],
  },
  {
    title: "Node",
    paragraph:
      "NodeJS is a powerful and reliable tool for writing backend code. This is the basis for many of our services including APIs, CMS, custom systems, Discord bots, etc.",
    icon: NodeIcon,
    socialProof: [MediumIcon, NetflixIcon],
  },
  {
    title: "PostgreSQL",
    paragraph:
      "PostgreSQL is a feature-rich, open-source database management system. It's popular for its support of complex SQL queries, full-text search, and powerful indexing options. We use it to store and manage data for your web apps.",
    icon: PostgreSQLIcon,
    socialProof: [RobinhoodIcon, NasaIcon],
  },
  {
    title: "Next",
    paragraph:
      "NextJS is what makes our websites so blazing fast. It's our Server Side Rendering engine of choice for React. It offers automatic code splitting and optimized performance for fast, scalable web applications.",
    icon: NextIcon,
    socialProof: [TypeformIcon, NotionIcon],
  },
  {
    title: "Sanity",
    paragraph:
      "Sanity is a flexible headless CMS that makes it easy to manage and deliver structured content. This technology allows us developers to create complex relationships while keeping it extremely simple for you (the client) to manage your content.",
    icon: SanityIcon,
    socialProof: [Netifly, NikeIcon],
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
  display: inline-block;
  padding-bottom: 80px;
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
