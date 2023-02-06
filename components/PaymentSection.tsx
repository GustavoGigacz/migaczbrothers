import styled from "styled-components";

const Payment = (): JSX.Element => {
  return (
    <PaymentContainer>
      <PaymentSection>
        <SubTitle>Interested? Call us</SubTitle>
        <Paragraph>We’d love to help you grow!</Paragraph>
        <ButtonMailSection>
          <Button>Contact us</Button> or
          <MailLink>hello@migaczbrothers.com</MailLink>
        </ButtonMailSection>
      </PaymentSection>
    </PaymentContainer>
  );
};

const PaymentContainer = styled.div`
  background-color: var(--dark-primary);
  max-width: 100%;
  padding: 80px 16px;
`;
const PaymentSection = styled.div`
  width: 1400px;
  margin: 0 auto;
`;
const SubTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  color: var(--white-color-font);
  padding-bottom: 33px;
`;

const Paragraph = styled.p`
  text-align: center;
  font-size: 18px;
  color: var(--white-color-font);
  padding-bottom: 58px;
`;
const ButtonMailSection = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  gap: 16px;
  color: white;
`;
const Button = styled.button`
  padding: 10px 64px;
  background-color: var(--green-color);
  border-radius: 8px;
  color: var(--white-color-font);
  font-size: 16px;
`;
const MailLink = styled.p`
  color: var(--green-color);
  text-decoration: underline;
`;

export default Payment;
