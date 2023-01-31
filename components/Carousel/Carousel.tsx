import styled from "styled-components";

interface TechItemProps {
  title: string;
  paragraph: string;
  Icon: () => JSX.Element;
  socialProof: (() => JSX.Element)[];
}


const Carousel = ({title, paragraph. Icon, socialProof,}: TechItemProps): JSX.Element => {
  return (
    <SwiperContainer>
      <SwiperContent>
        <IconContainer>
          <Icon/>
        </IconContainer>
        <Title></Title>
        <Paragraph></Paragraph>
      </SwiperContent>
    </SwiperContainer>
  )
}


const SwiperContainer = styled.div``
const SwiperContent = styled.div``
const IconContainer
const Title = styled.h1``
const Paragraph = styled.p``








export default Carousel;