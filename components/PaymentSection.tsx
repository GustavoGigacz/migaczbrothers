import styled from "styled-components";

const Payment = (): JSX.Element => {
  return (
    <PaymentContainer>
      <PaymentSection>
        <SubTitle>Interested? Call us</SubTitle>
        <Paragraph>We’d love to help you grow!</Paragraph>
        <Button>Contact us</Button> <p>or</p>{" "}
        <MailLink>hello@migaczbrothers.com</MailLink>
      </PaymentSection>
    </PaymentContainer>
  );
};

const PaymentContainer = styled.div``;
const PaymentSection = styled.div``;
const SubTitle = styled.h2``;
const Paragraph = styled.p``;
const Button = styled.button``;
const MailLink = styled.li``;

export default Payment;
