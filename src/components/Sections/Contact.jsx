import React from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
// Assets

import QRcode from "../../assets/img/qrcode.png";

export default function Contact() {

  const handleSubmit = (e)  =>{
    // Prevent the default form submit behavior
 
    // Get the values of the form inputs
    const name = e.target.elements.fname.value;
    const email = e.target.elements.email.value;
    const subject = e.target.elements.subject.value;
    const message = e.target.elements.message.value;
    

    if(!name || !email || !subject || !message)
    {
      
      return 
    }

    var templateParams = {
      from_name: name,
      to_name: "BD@v5media.com",
      from_email: email,
      message: message
  };

  emailjs.send('service_9yvmdeu', 'template_6cetd1y',templateParams,'i2jswP2HTDymhhDPX')
      .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
          console.log('FAILED...', error);
      });
    
  }



  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">联系方式</h1>
            <p className="font13">
              Let's get in touch
              {/* <br />
              labore et dolore magna aliquyam erat, sed diam voluptua. */}
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form id="ContractForm" onSubmit={handleSubmit}>
                <label className="font13">姓名:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold " required message="Please enter a value"/>
                <label className="font13">Email:</label>
                <input type="text" id="email" name="email" className="font20 extraBold " required />
                <label className="font13 ">主题:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold " required/>
                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font10 " placeholder="请输入您的内容"  required/>
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput   type="submit" form="ContractForm" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "100%" }} className="flexNullCenter flexColumn">
                {/* <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox> */}
                <h4 className="font15 semiBold pt-5">联系方式</h4>
                {/* <h4 className="font15  pt-5"></h4> */}
                <h4 className="font15  pt-5">myleochan63@gmail.com</h4>
                <div style={{ marginTop: "50px"}}>
                  <img src={QRcode} alt="qrcode" style={{ width: 256, height: 256 }} />
                </div>
              </div>
              {/* <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div> */}
            </div>

          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









