import Link from "next/link";
import styled from "styled-components";

const Invitation = (): JSX.Element => {
  return (
    <InvitationContainer>
      <Section>
        <Paragraph>
          Do you wanna join our team?
          <br />
          Please email us:
        </Paragraph>

        <LinkMail>hr@migaczbrothers.com</LinkMail>
      </Section>
    </InvitationContainer>
  );
};

const InvitationContainer = styled.div`
  color: #e4e4e4e4;
  border: 1px solid;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Section = styled.div``;
const Paragraph = styled.p`
  font-size: 24px;
`;
const LinkMail = styled.ul`
  color: var(--gray-font);
  padding: 20px;
  font-size: 18px;
  text-decoration: underline;
`;

export default Invitation;
