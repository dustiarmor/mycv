import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home"  offset={-80}>
              <LogoImg />
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                Leo
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
            Copyright © {getCurrentYear()} - <span className="purpleColor font13">LeoChan</span> All rights reserved.
            </StyleP>
            {/* <StyleP className="whiteColor font13">
             <a className="whiteColor" href="http://beian.miit.gov.cn/">工业和信息化部备案管理系统网站 粤ICP备2022059367号  </a>
            </StyleP> */}
            <Link className="whiteColor animate pointer font13" to="home"  offset={-80}>
            返回<i class="fa-sharp fa-solid fa-arrows-up-to-line"></i>
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;