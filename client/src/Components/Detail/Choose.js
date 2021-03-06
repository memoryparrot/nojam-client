import React, { useRef } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import HumorBird from "../../../src/assets/icons/HumorBird.svg";
import SeriousBird from "../../../src/assets/icons/SeriousBird.svg";
import FlyHumorBird from "../../../src/assets/icons/FlyHumorBird.svg";
import FlySeriousBird from "../../../src/assets/icons/FlySeriousBird.svg";

const ChooseWrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.newwhite};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChooseTitle = styled.div`
  height: 10vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ChooseContent = styled.div`
  width: 50vw;
  height: 5vh;
  margin: 0 auto;
  line-height: 1.5;
  font-family: "Apple Gothic";
  font-weight: 700;
  text-align: center;
`;

const ChooseSmall = styled.div`
  width: 30vw;
  height: 15px;
  font-family: "Apple Gothic";
  font-weight: 300;
  color: #7e7e7e;
`;

const ChooseImage = styled.div`
  margin-top: 62px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const SpanWrapper = styled.span`
  background-color: #353535;
  color: white;
`;

const ImgWrapper = styled.img`
  width: 330px;
  height: 298px;
  :hover {
    cursor: pointer;
  }
`;

const TextWrapper = styled.div`
  margin-top: 63px;
  display: flex;
  justify-content: space-between;
`;

const HoverText = styled.div`
  width: 360px;
  height: 180px;
  box-shadow: 0px 5px 14px rgba(60, 79, 124, 0.16);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  visibility: hidden;
`;

const Span1 = styled.span`
  font-family: "Apple Gothic";
  font-weight: 700;
  font-size: 20px;
  color: #3c4f7c;
  position: relative;
  left: 32px;
  top: 26px;
`;

const Span2 = styled.span`
  font-family: "Apple Gothic";
  font-weight: 300;
  font-size: 16px;
  color: #7e7e7e;
  position: relative;
  left: 32px;
  top: 30px;
`;

const Span3 = styled.span`
  font-family: "Apple Gothic";
  font-weight: 700;
  font-size: 19px;
  color: #7e7e7e;
`;

const Span4 = styled.span`
  font-family: "Apple Gothic";
  font-weight: 700;
  font-size: 20px;
  color: #e67f35;
  position: relative;
  left: 32px;
  top: 26px;
`;
const Choose = ({ history }) => {
  const SeriousbirdImg = useRef();
  const HumorbirdImg = useRef();
  const HoverRef1 = useRef();
  const HoverRef2 = useRef();

  return (
    <ChooseWrapper>
      <ChooseTitle>
        <ChooseContent>
          사회 생활에서도, 학교 생활에서도 인싸가 되고 싶으시다고요?
          <br />
          <SpanWrapper>기억무새</SpanWrapper>를 따라해보세요!
        </ChooseContent>
        <ChooseSmall>잠자고 있는 앵무새를 만져 깨워보세요!</ChooseSmall>
      </ChooseTitle>
      <ChooseImage>
        <ImgWrapper
          src={SeriousBird}
          alt=''
          onMouseEnter={() => {
            HoverRef1.current.style.visibility = "visible";
            SeriousbirdImg.current.src = FlySeriousBird;
          }}
          onMouseLeave={() => {
            HoverRef1.current.style.visibility = "hidden";
            SeriousbirdImg.current.src = SeriousBird;
          }}
          ref={SeriousbirdImg}
          onClick={() => {
            history.push("/serious");
          }}
        />
        <ImgWrapper
          src={HumorBird}
          alt=''
          onMouseEnter={() => {
            HoverRef2.current.style.visibility = "visible";
            HumorbirdImg.current.src = FlyHumorBird;
          }}
          onMouseLeave={() => {
            HoverRef2.current.style.visibility = "hidden";
            HumorbirdImg.current.src = HumorBird;
          }}
          ref={HumorbirdImg}
          onClick={() => {
            history.push("/humor");
          }}
        />
      </ChooseImage>
      <TextWrapper>
        <HoverText ref={HoverRef1}>
          <Span1>안녕? 내 이름은 진지무새!</Span1>
          <Span2>
            팀원에게 보내는 인삿말이 고민되는 사람들,
            <br />
            반복되는 메일에 지쳐버린 직장인,
            <br />
            교수님께 메일 보내는 학생에게는
            <br />
            <Span3>나, 진지무새가 딱이지!</Span3>
          </Span2>
        </HoverText>
        <HoverText ref={HoverRef2}>
          <Span4>하이-Hi! 나는 유머무새!</Span4>
          <Span2>
            풍부한 표현이 기억나지 않는 사람들,
            <br />
            ㅋㅋㅋ만 남발하기엔 너무나 웃긴 사람들,
            <br />
            유쾌한 대화가 필요한 사람들에게는
            <br />
            <Span3>나, 유머무새가 딱이지!</Span3>
          </Span2>
        </HoverText>
      </TextWrapper>
    </ChooseWrapper>
  );
};

export default withRouter(Choose);
