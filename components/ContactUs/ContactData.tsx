import styled from "styled-components";
import React from "react";

const ContactData = (): JSX.Element => {
  return (
    <ContactTwo>
      <TextContent>
        <InputBox type='text' placeholder='Name'></InputBox>
        <InputBox type='text' placeholder='Email'></InputBox>
        <SelectBox>
          <option value=''>Budget</option>
          <option value={1}>Less than $3.000</option>
          <option value={2}>$3,000 - $5,000</option>
          <option value={3}>$5,000 - $10,000</option>
          <option value={4}>$10,000 - $15,000</option>
        </SelectBox>
        <MessengeBox placeholder='Message'></MessengeBox>
        <ButtonBox>Send</ButtonBox>
      </TextContent>
    </ContactTwo>
  );
};

const ContactTwo = styled.div`
  width: 488px;
  height: 514px;
  background-color: var(--dark-thirst);
  border-radius: var(--rounded);
`;
const TextContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 62px 72px 42px;
  font-size: 16px;
`;
const InputBox = styled.input`
  margin: 15px;
  height: 40px;
  width: 352px;
  border-radius: var(--rounded);
  background-color: var(--dark-primary);
  font-size: 16px;
  color: var(--gray-font);
  border: none;
  padding: 10px;
  :focus {
    outline: 1px solid var(--green-color);
  }
`;

const SelectBox = styled.select`
  margin: 15px;
  height: 40px;
  width: 352px;
  border-radius: var(--rounded);
  background-color: var(--dark-primary);
  font-size: 16px;
  color: var(--gray-font);
  border: none;
  padding: 10px;
  :focus {
    outline: 1px solid var(--green-color);
  }
`;

const MessengeBox = styled.textarea`
  margin-top: 15px;
  height: 90px;
  width: 352px;
  border-radius: var(--rounded);
  background-color: var(--dark-primary);
  font-size: 16px;
  color: var(--gray-font);
  border: none;
  padding: 10px;
  :focus {
    outline: 1px solid var(--green-color);
  }
`;

const ButtonBox = styled.button`
  color: var(--white-color-font);
  font-weight: bold;
  margin: 15px;
  height: 36px;
  width: 352px;
  background-color: var(--second-20);
  border-radius: var(--rounded);
  font-size: 16px;
  :focus {
    border: 1px solid var(--primary-color-font);
  }
`;

export default ContactData;
