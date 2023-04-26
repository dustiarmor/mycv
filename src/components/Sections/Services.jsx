import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets

import NikeImage from "../../assets/img/add/nike.png";
import BlizzardImage from "../../assets/img/add/blizzard.png";
import BlackMagicImage from '../../assets/img/add/BlackMagic.png'
import LplImage from '../../assets/img/add/lpl.png'

export default function Services() {

  

  return (
    <Wrapper id="services">
      {/* <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div> */}
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">我的经历</h1>
            <p className="font13">
              
            10+年互联网企业工作经验
              <br />
             熟悉企业管理架构及业务流程，熟悉市场运作及热点营销
             <br />
             敢于接受挑战，尝试新的方向
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
          <ServiceBoxWrapper>
              <ServiceBox
                icon="design"
                title="广东工业大学"
                subtitle={`2005-2009   \n网络工程专业 \n全日制本科                `} 
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="stage"
                title="网易-运营中心"
                subtitle={`2010-2015 \n系统工程师 \n负责运营中心日常桌面维护 \n负责广州、杭州、上海三地办公区规划组建工作 \n负责对接行政部门协调餐饮接待事宜`}
              />
            </ServiceBoxWrapper>
            
            <ServiceBoxWrapper>
              <ServiceBox
                icon="live"
                title="网易-CC直播"
                subtitle={`2016-2019 \n项目经理(兼广州IT经理) \n负责对接商务策划部门的项目需求 \n负责对接各类线上线上的直转播 \n统筹供应商资源落地执行 \n负责高唐演艺中心及OWL上海龙主场规划建设`}
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox icon="arvr" title="某集团旗下俱乐部" subtitle={`2019-今 \n运营总监 \n为电竞板块的目标提供技术和资源支持 \n统筹项目落地，包括：俱乐部收购、联动活动、线下赛观赛、线上赛举办等 \n场馆资源及跨业合作 \n海内外体育资源整合`  }/>
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font15 semiBold">Relationship</h4>
                <h2 className="font40 extraBold">客户关系伙伴</h2>
                <p className="font12">
                  合作伙伴及资源有：网易游戏、腾讯游戏、阿里游戏、Nike、暴雪、Bilibili、BlackMagic、大众汽车、萤火虫动漫文化等
                </p>
                {/* <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="联系我们"   />
                  </div>
                   <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div> 
                </ButtonsRow> */}
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={LplImage} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={BlackMagicImage} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={NikeImage} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={BlizzardImage} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;