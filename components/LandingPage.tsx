import styled from "styled-components";
import ManChair from "./icons/ManChair";
import Link from "next/link";
import Arrow from "./icons/Arrow";

const LandingPage = (): JSX.Element => {
  return (
    <LandingPageContainer>
      <LandingContainer>
        <LandingContent>
          <Paragraph>Welcome! 👋</Paragraph>
          <Title>
            We design <Span>experience</Span> and develop <Span>solutions</Span>
            .
          </Title>
          <SubTitle>Let’s build something together!</SubTitle>
          <CustomLink href={"./contact"}>
            {" "}
            Give us a call! <Arrow />
          </CustomLink>
        </LandingContent>
        <ManChair />
      </LandingContainer>
    </LandingPageContainer>
  );
};

const LandingPageContainer = styled.div`
  background-color: var(--dark-primary);
  width: 100%;
`;

const LandingContainer = styled.div`
  width: var(--container-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 132px 0;
`;

const LandingContent = styled.div`
  max-width: 725px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: var(--green-color);
  margin: 0 0 32px 16px;
`;

const Title = styled.h1`
  font-size: 64px;
  color: var(--primary-color-font);
  margin: 0 0 20px 16px;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  color: var(--white-color-font);
  margin: 0 0 64px 16px;
`;

const Span = styled.span`
  color: var(--green-color);
`;

const CustomLink = styled(Link)`
  color: var(--primary-color-font);
  text-decoration: underline;
  padding-left: 16px;

  svg {
    padding: 6px 0 0 8px;
  }
`;

export default LandingPage;
