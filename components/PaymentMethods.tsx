import styled from "styled-components";
import CreditCardIcon from "./icons/CreditCardIcon";
import CryptoIcon from "./icons/CryptoIcon";
import WireTransferIcon from "./icons/WireTransferIcon";

const PaymentMethods = (): JSX.Element => {
  return (
    <PaymentMethodsContainer>
      <Section>
        <PaySection>
          <Title>Payment Methods</Title>
        </PaySection>
        <MethodsSection>
          <WireTransfer>
            <WireTransferIcon /> WIRE TRANSFER
          </WireTransfer>
          <CreditCard>
            <CreditCardIcon /> CREDIT CARD
          </CreditCard>
          <Crypto>
            <CryptoIcon /> CRYPTO
          </Crypto>
        </MethodsSection>
      </Section>
    </PaymentMethodsContainer>
  );
};

const PaymentMethodsContainer = styled.div`
  background-color: var(--dark-primary);
  max-width: 100%;
`;
const Section = styled.div`
  width: 1400px;
  margin: 0 auto;
`;
const PaySection = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.h2`
  font-size: 40px;
  color: var(--primary-color-font);
  padding: 80px 0 40px;
`;
const MethodsSection = styled.ul`
  display: flex;
  justify-content: space-evenly;
  background-color: var(--dark-thirst);
  padding: 100px 0;
  border-radius: 8px;
`;
const WireTransfer = styled.li`
  text-transform: uppercase;
  color: white;
  display: flex;
  align-items: center;
  letter-spacing: 0.12em;
`;
const CreditCard = styled.li`
  text-transform: uppercase;
  color: white;
  display: flex;
  align-items: center;
  letter-spacing: 0.12em;
`;
const Crypto = styled.li`
  text-transform: uppercase;
  color: white;
  display: flex;
  align-items: center;
  letter-spacing: 0.12em;
`;

export default PaymentMethods;
