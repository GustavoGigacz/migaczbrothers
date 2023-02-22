import styled from "styled-components";
import Image from "next/image";

import PedroImage from "../../public/members/Pedro.png";
import Members from "./Members";

const AboutUs = (): JSX.Element => {
  return (
    <AboutUsContainer>
      <AboutUsContent>
        <AboutContent>
          <Title>Meet our team</Title>
          <SubTitle>
            Expert Team with a Global Reach and a Focus on Quality
          </SubTitle>
          <Paragraph>
            At Migacz Brothers, we are a global team of web development experts
            committed to delivering high-quality work. Our diverse skills and
            backgrounds allow us to handle projects of any size and complexity.
            We strive to exceed our clients expectations on every project.
          </Paragraph>
        </AboutContent>
        <Members />
      </AboutUsContent>
    </AboutUsContainer>
  );
};

const AboutUsContainer = styled.div`
  background-color: var(--dark-primary);
  width: 100%;
`;
const AboutUsContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
`;
const AboutContent = styled.div`
  padding-top: 124px;
`;
const Title = styled.h1`
  font-size: 40px;
  color: var(--primary-color-font);
  font-weight: bold;
  margin: 32px 0;
`;
const SubTitle = styled.h2`
  font-size: 24px;
  color: var(--primary-color-font);
  margin: 24px;
`;
const Paragraph = styled.p`
  color: var(--gray-font);
  max-width: 700px;
  margin: 0 auto;
  padding-bottom: 40px;
`;

export default AboutUs;
