import styled from "styled-components";
import LinkedinContactus from "../icons/LinkedinContactus";
import MailContactus from "../icons/MailContactus";

const ContactUs = (): JSX.Element => {
  return (
    <ContactOne>
      <Title>Contact Us</Title>
      <Linkedin>
        <Icon>
          <LinkedinContactus />
        </Icon>
        <LinkedinContent>Linkedin</LinkedinContent>
      </Linkedin>
      <LinkEdin>Migacz Brothers</LinkEdin>
      <Mail>
        <Icon>
          <MailContactus />
        </Icon>
        <EmailContent>Email</EmailContent>
      </Mail>
      <ul>
        <MailLink>hello@migaczbrothers.com</MailLink>
        <MailLink>pedro@migaczbrothers.com</MailLink>
      </ul>
    </ContactOne>
  );
};

const ContactOne = styled.div``;

const Linkedin = styled.h2`
  color: var(--primary-color-font);
  display: flex;
  font-size: 18px;
  margin-bottom: 8px;
`;
const Title = styled.h1`
  color: var(--primary-color-font);
  font-size: 72px;
  margin-bottom: 38px;
`;
const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--primary-20);
  place-items: center;
  display: grid;
`;
const LinkEdin = styled.a`
  margin: 40px;
  color: var(--primary-color-font);
`;
const LinkedinContent = styled.a`
  align-self: center;
  margin-left: 10px;
  color: var(--second-20);
  font-weight: bold;
  font-size: 18px;
`;

const Mail = styled.h2`
  display: flex;
  margin-top: 34px;
`;
const EmailContent = styled.div`
  display: flex;
  align-self: center;
  color: var(--second-20);
  font-weight: bold;
  margin-left: 10px;
`;
const MailLink = styled.li`
  color: var(--primary-color-font);
  margin: 8px 0 0 40px;
`;

export default ContactUs;
