import React from "react";
import styled from "styled-components";
// Assets
import LiveIcon from "../../assets/svg/Services/LiveIcon";
import DesignIcon from "../../assets/svg/Services/DesignIcon";
import ARVRIcon from "../../assets/svg/Services/ARVRIcon";
import StageIcon from "../../assets/svg/Services/StageIcon";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "design":
      getIcon = <DesignIcon />;
      break;
    case "stage":
      getIcon = <StageIcon />;
      break;
    case "live":
      getIcon = <LiveIcon />;
      break;
    case "arvr":
      getIcon = <ARVRIcon />;
      break;
    default:
      getIcon = <DesignIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13 " style={{whiteSpace: 'pre-wrap'}}>{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;