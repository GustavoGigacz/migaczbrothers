import styled from "styled-components";
import Image from "next/image";
import Snicker from "../public/Snicker.png";

const Service = (): JSX.Element => {
  return (
    <section>
      <SectionContainer>
        <DriveInContainer>
          <DriveInContent>
            <TextContainer>
              <Title>AI-Driven copywrite & design</Title>
              <Paragraph>
                Unleash the full potential of your brand with AI-powered
                creative content. Our advanced AI tools allow us to deliver
                unparalleled user experiences and copywriting that will elevate
                your brand to new heights.
              </Paragraph>
            </TextContainer>

            <ImageContainer>
              <Image src={Snicker} alt='snickerImage' />
            </ImageContainer>
          </DriveInContent>
        </DriveInContainer>
      </SectionContainer>
    </section>
  );
};

const SectionContainer = styled.div`
  background-color: var(--dark-secondary);
  max-width: 100%;
  padding: 0 16px;
`;

const DriveInContainer = styled.div`
  width: 1400px;
  margin: 0 auto;
  padding: 160px 0;
`;
const DriveInContent = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`;

const TextContainer = styled.div`
  align-items: center;
  max-width: 725px;
`;
const Title = styled.h1`
  font-size: 32px;
  color: var(--primary-color-font);
  padding: 20px 0 21px 0;
`;
const Paragraph = styled.p`
  font-size: 22px;
  line-height: 150%;
  color: var(--secondary-color-font);
`;

const ImageContainer = styled.aside`
  position: relative;
`;

export default Service;
