import { StaticImageData } from "next/image";
import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

interface MemberComponentProps {
  name: string;
  position: string;
  description: string;
  picture: StaticImageData;
}

const MemberComponent = ({
  name,
  position,
  description,
  picture,
}: MemberComponentProps): JSX.Element => {
  const [active, setActive] = useState(false);

  const ToggleActive = () => setActive((prev) => !prev);

  return (
    <Member>
      <MemberButton onClick={ToggleActive}>
        <CustomImage
          src={picture}
          alt={`Picture of member ${name}`}
          placeholder='blur'
        />
        <AnimatePresence>
          {active ? (
            <DataContainer>
              <CardTitle>{name}</CardTitle>
              <CardSubheader>{position}</CardSubheader>
              <CardDescription>{description}</CardDescription>
            </DataContainer>
          ) : null}
        </AnimatePresence>
      </MemberButton>
    </Member>
  );
};

const Member = styled.div`
  aspect-ratio: 1/1;
  border-radius: var(--rounded);
  overflow: hidden;
`;

const MemberButton = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CustomImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  scale: 1.01;
`;

const AnimatePresence = styled.div`
  display: flex;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.75);

  top: 0;
  left: 0;

  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
const DataContainer = styled.div`
  color: white;
`;
const CardTitle = styled.h2``;
const CardSubheader = styled.h3``;
const CardDescription = styled.p``;

export default MemberComponent;
