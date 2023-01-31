import styled from "styled-components";
import Image, { StaticImageData } from "next/image";

interface ServiceProps {
  title: string;
  description: string;
  Imagem: StaticImageData;
  reversed?: boolean;
}

const Service = ({
  title,
  description,
  Imagem,
  reversed = false,
}: ServiceProps): JSX.Element => {
  return (
    <SectionContainer>
      <DriveInContainer>
        <DriveInContent $reversed={reversed}>
          <TextContainer>
            <Title>{title}</Title>
            <Paragraph>{description}</Paragraph>
          </TextContainer>
          <ImageContainer>
            <Image src={Imagem} alt='snickerImage' />
          </ImageContainer>
        </DriveInContent>
      </DriveInContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  background-color: var(--dark-secondary);
  max-width: 100%;
`;

const DriveInContainer = styled.div`
  width: 1400px;
  margin: 0 auto;
  padding: 80px 16px;
`;

interface DriveInContentProps {
  $reversed: boolean;
}

const DriveInContent = styled.div<DriveInContentProps>`
  display: flex;
  align-items: center;
  gap: 100px;
  flex-direction: ${(props) => (props.$reversed ? "row-reverse" : "row")};
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
