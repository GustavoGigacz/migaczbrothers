import styled from "styled-components";
import Member from "./Member";
import Invitation from "./Invitation";

import PedroPicture from "../../public/members/Pedro.png";
import IagoPicture from "../../public/members/Iago.png";
import ArthurPicture from "../../public/members/Arthur.png";
import GustavoPicture from "../../public/members/Gustavo.png";

const Members = (): JSX.Element => {
  return (
    <MembersList>
      <Member
        name='Pedro H. G. Migacz'
        position='Co-Founder'
        description='Web developer with 5+ years of experience in web development, Pedro has a deep understanding of creating systems from responsive websites to complex backend systems.'
        picture={PedroPicture}
      />
      <Member
        name='Iago M. Pzivitovski'
        position='Engineer'
        description='Iago is a great frontend developer, and a big part of our team. He has extensive experience in the industry and a passion for problem solving..'
        picture={IagoPicture}
      />
      <Member
        name='Arthur F. Valério'
        position='Marketing Director'
        description='With knowledge both in marketing and development, he brings a wealth of experience to the organization. He is passionate about creating innovative and successful campaigns that will help drive growth.'
        picture={ArthurPicture}
      />
      <Member
        name='Gustavo G. Migacz'
        position='Junior Engineer'
        description='Meet Gustavo, our talented junior frontend developer. He has a passion for creating user-friendly and visually appealing interfaces.'
        picture={GustavoPicture}
      />
      <Invitation />
    </MembersList>
  );
};

const MembersList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 26px;
  padding: 50px 16px;
`;

export default Members;
