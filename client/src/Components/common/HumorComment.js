import React from "react";
import Styled from "styled-components";
import HumorButton from "../../assets/icons/HumorButton.svg";

const ContentWrapper = Styled.div`
    width: 100%;
    margin-top: 0.7rem;
    border-radius: 6px 6px 6px 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    display: flex;
    justify-content: space-between;
    transition: .8s;
    background-color: white;
    :hover{
        box-shadow: 0px 20px 40px rgba(0,0,0,0.2);
        transform: scale(1.01,1.01);
        cursor: pointer;
    }
`;

const Content = Styled.div`
    font-family: "Apple Gothic";
    font-weight: 300;
    padding: 7px;
    font-size: 11.5px;
    display: flex;
    align-items: center;
    line-height: 1.3;
`;

const ImageContainer = Styled.div`
    background-color: #FFD899;
    .imageContent{
        height: 100%;
        width: 30px;
    }
`;

const doCopy = (text) => {
  // 흐름 1.
  if (!document.queryCommandSupported("copy")) {
    return alert("복사하기가 지원되지 않는 브라우저입니다.");
  }

  // 흐름 2.
  const textarea = document.createElement("textarea");
  textarea.value = text.sentence;
  textarea.style.top = 0;
  textarea.style.left = 0;
  textarea.style.display = "fixed";

  // 흐름 3.
  document.body.appendChild(textarea);
  // focus() -> 사파리 브라우저 서포팅
  textarea.focus();
  // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
  textarea.select();
  // 흐름 4.
  document.execCommand("copy");
  // 흐름 5.
  document.body.removeChild(textarea);
  alert("클립보드에 복사되었습니다.");
};

const HumorComment = ({ parrot, division, category, sentence }) => {
  return (
    <ContentWrapper>
      <Content onClick={() => doCopy({ sentence })}>{sentence}</Content>
      <ImageContainer>
        <img className='imageContent' src={HumorButton} alt='Humor' />
      </ImageContainer>
    </ContentWrapper>
  );
};
export default HumorComment;
