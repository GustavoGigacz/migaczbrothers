import styled from "styled-components";

const AboutUs = (): JSX.Element => {
  return (
    <AboutUsContainer>
      <AboutUsContent>
        <AboutContent>
        <Title>Meet our team</Title>
        <SubTitle>Expert Team with a Global Reach and a Focus on Quality</SubTitle>
        <Paragraph>At Migacz Brothers, we are a global team of web development experts committed to delivering high-quality work. Our diverse skills and backgrounds allow us to handle projects of any size and complexity. We strive to exceed our clients' expectations on every project.</Paragraph>
      </AboutContent>
      <AboutImages></AboutImages>
      </AboutUsContent>
    </AboutUsContainer>
  )
}


const AboutUsContainer = styled.div``;
const AboutUsContent = styled.div``;
const AboutContent = styled.div``
const Title = styled.h1``;
const SubTitle = styled.h2``;
const Paragraph = styled.p``;
const AboutImages = styled.div``;

export default AboutUs;