import styled from "styled-components";
import PedroPicture from "../../public/members/Pedro.png";
import Member from "./Member";

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
        name='Pedro H. G. Migacz'
        position='Co-Founder'
        description='Web developer with 5+ years of experience in web development, Pedro has a deep understanding of creating systems from responsive websites to complex backend systems.'
        picture={PedroPicture}
      />
      <Member
        name='Pedro H. G. Migacz'
        position='Co-Founder'
        description='Web developer with 5+ years of experience in web development, Pedro has a deep understanding of creating systems from responsive websites to complex backend systems.'
        picture={PedroPicture}
      />
      <Member
        name='Pedro H. G. Migacz'
        position='Co-Founder'
        description='Web developer with 5+ years of experience in web development, Pedro has a deep understanding of creating systems from responsive websites to complex backend systems.'
        picture={PedroPicture}
      />
      <Member
        name='Pedro H. G. Migacz'
        position='Co-Founder'
        description='Web developer with 5+ years of experience in web development, Pedro has a deep understanding of creating systems from responsive websites to complex backend systems.'
        picture={PedroPicture}
      />
      <Member
        name='Pedro H. G. Migacz'
        position='Co-Founder'
        description='Web developer with 5+ years of experience in web development, Pedro has a deep understanding of creating systems from responsive websites to complex backend systems.'
        picture={PedroPicture}
      />
    </MembersList>
  );
};

const MembersList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default Members;
