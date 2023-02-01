import styled from "styled-components";

interface CarouselItems {
  title: string;
  paragraph: string;
  Icon: () => JSX.Element;
  socialProof: (() => JSX.Element)[];
}

const CarouselItems = ({
  title,
  paragraph,
  Icon,
  socialProof,
}: CarouselItems): JSX.Element => {
  return (
    <SwiperContainer>
      <SwiperContent>
        <IconContainer>
          <Icon />
        </IconContainer>
        <Title>{title}</Title>
        <Paragraph>{paragraph}</Paragraph>
        <CompanyContainer>
          {socialProof.map((SocialProofIcon, key) => (
            <CompanyIcon key={`SocialProofIcon_${key}`}>
              <SocialProofIcon />
            </CompanyIcon>
          ))}
        </CompanyContainer>
      </SwiperContent>
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
  background-color: var(--dark-primary);
`;
const SwiperContent = styled.div`
  background-color: var(--dark-thirst);
  border-radius: 8px;
  height: 520px;
  max-width: 384px;
  min-width: 300px;
  width: 100%;
  padding: 34px 22px 38px 22px;
  color: #fafafa;

  display: flex;
  flex-direction: column;
`;
const IconContainer = styled.div`
  height: 98px;
  margin-bottom: 17px;
`;
const Title = styled.h3`
  font-size: 40px;
  margin-bottom: 18px;
`;
const Paragraph = styled.p`
  color: var(--secondary-color-font);
  line-height: 140%;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: auto;
`;
const CompanyContainer = styled.ul`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
`;
const CompanyIcon = styled.li`
  display: flex;
  align-items: center;
  justify-self: flex-start;
`;

export default CarouselItems;
