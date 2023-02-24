import styled from "styled-components";
import ContactData from "./ContactData";
import ContactInfo from "./ContactInfo";

const IndexContact = (): JSX.Element => {
  return (
    <ContactContainer>
      <Section>
        <ContactInfo />
        <ContactData />
      </Section>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  background-color: var(--dark-primary);
  width: 100%;
`;

const Section = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 200px 16px;
`;

export default IndexContact;
